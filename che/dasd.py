import mysql.connector as con
from flask import Flask, request, jsonify
from flask_cors import CORS

# Initialize Flask app and enable CORS
app = Flask(__name__)
CORS(app)

# Connect to the MySQL server
db = con.connect(
    host="localhost",
    user="root",
    password="fastotrian8790"
)

# Create a cursor object using the connection
cur = db.cursor()

# Use the 'login' database
cur.execute('USE login')

def create_check(username):
    cur.execute("SELECT * FROM accounts WHERE username = %s", (username,))
    result = cur.fetchone()
    return bool(result)

def check(username, password):
    try:
        cur.execute("SELECT * FROM accounts WHERE username = %s AND password = %s", (username, password))
        result = cur.fetchone()
        return bool(result)
    except Exception as e:
        print(f"Error during login: {e}")
        return False

# Function to insert a new user account into the database
def insert_account(username, password):
    try:
        cur.execute('INSERT INTO accounts(username, password) VALUES (%s, %s)', (username, password))
        db.commit()
        return True
    except Exception as e:
        print(f"Error inserting record: {e}")
        return False

@app.route('/receive_data', methods=['POST'])
def receive_data():
    try:
        # Get JSON data from the request
        data = request.json
        username = data.get('username')
        password = data.get('password')
        is_login = data.get('l')

        if is_login == 1:
            # Handle login logic
            success = check(username, password)
            if success==True:
                return jsonify({'status': 'success', 'message': 'L'})
            elif success==False:
                return jsonify({'status': 'success', 'message': 'I'})
            else:
                return jsonify({'status': 'error', 'message': 'Invalid username or password.'}), 401
        elif username and password:
            exists = create_check(username)
            if exists:
                return jsonify({'status': 'success', 'message': 'Already'})
            else:
                success = insert_account(username, password)
                if success:
                    return jsonify({'status': 'success', 'message': 'C'})
                else:
                    return jsonify({'status': 'error', 'message': 'Failed to create account.'}), 500
        else:
            return jsonify({'status': 'error', 'message': 'Invalid data received.'}), 400
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True) 