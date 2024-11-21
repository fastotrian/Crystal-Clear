let submit = document.getElementById('submit');
let create = document.getElementById('createa');
let login = document.getElementById('login');
const eye = document.getElementById('eye');
let submitc = document.getElementById('submitc');
let msg = document.getElementById('msg');
let msg2 = document.getElementById('msg2');

// Toggle password visibility
eye.onclick = () => {
    let password = document.getElementById('passlogin');
    let passs = document.getElementById('passcre')
    if (password.type === 'password' && passs.type === 'password') {
        password.type = 'text';
        passs.type = 'text'
        eye.style.backgroundImage = "url('view.png')";
    } else {
        password.type = 'password';
        passs.type = 'password';
        eye.style.backgroundImage = "url('hide.png')";
    }
};
// Handle login submission
submit.onclick = () => {
    let addrs = document.getElementById('passlogin').value;
    let citys = document.getElementById('userlogin').value;
    if (addrs !== '' && citys !== '') {
        sendUserData(citys, addrs, true); // true for login
    } else {
        submit.innerHTML = 'Fill the Above';
        setTimeout(() => submit.innerHTML = 'Log In', 2000);
    }
};

// Handle account creation
create.onclick = () => {
    let regis = document.getElementById('reg');
    let city = document.getElementById('userlogin');
    let addr = document.getElementById('passlogin');
    let heder = document.getElementById('heder');
    let create = document.getElementById('createa');
    let dont = document.getElementById('dont');
    let submit = document.getElementById('submit');
    let we = document.getElementById('we');
    let ba = document.getElementById('ba');
    let eye = document.getElementById('eye');
    regis.style.transform = 'rotate(-55deg) translateY(100px)';
    city.style.transform = 'translateX(-1000px)';
    addr.style.transform = 'translateX(-1000px)';
    heder.style.transform = 'translateX(-1000px)';
    create.style.transform = 'translateX(-1000px)';
    dont.style.transform = 'translateX(-1000px)';
    submit.style.transform = 'translateX(-1000px)';
    we.style.transform = 'translateX(1000px)';
    ba.style.transform = 'translateX(1000px)';
    eye.style.transform = 'translateX(450px) translateY(-68px)';

    let user = document.getElementById('usercre');
    let pass = document.getElementById('passcre');
    let repass = document.getElementById('repass');
    let hederc = document.getElementById('hederc');
    let login = document.getElementById('login');
    let exis = document.getElementById('exis');
    let submitc = document.getElementById('submitc');
    user.style.transform = 'translateX(-500px)';
    pass.style.transform = 'translateX(-500px)';
    repass.style.transform = 'translateX(-500px)';
    hederc.style.transform = 'translateY(140px)';
    login.style.transform = 'translateY(-360px)';
    exis.style.transform = 'translateY(-400px)';
    submitc.style.transform = 'translateX(-420px)';
};

// Handle login transition back
login.onclick = () => {
    let regiss = document.getElementById('reg');
    let user = document.getElementById('usercre');
    let pass = document.getElementById('passcre');
    let repass = document.getElementById('repass');
    let hederc = document.getElementById('hederc');
    let login = document.getElementById('login');
    let exis = document.getElementById('exis');
    let submitc = document.getElementById('submitc');
    let eye = document.getElementById('eye');
    regiss.style.transform = 'rotate(50deg) translateY(0px)';
    user.style.transform = 'translateX(500px)';
    pass.style.transform = 'translateX(500px)';
    repass.style.transform = 'translateX(500px)';
    hederc.style.transform = 'translateY(-140px)';
    login.style.transform = 'translateY(360px)';
    exis.style.transform = 'translateY(400px)';
    submitc.style.transform = 'translateX(420px)';
    eye.style.transform = 'translateX(0px)';

    let city = document.getElementById('userlogin');
    let addr = document.getElementById('passlogin');
    let heder = document.getElementById('heder');
    let create = document.getElementById('createa');
    let dont = document.getElementById('dont');
    let submit = document.getElementById('submit');
    city.style.transform = 'translateX(0px)';
    addr.style.transform = 'translateX(0px)';
    heder.style.transform = 'translateX(0px)';
    create.style.transform = 'translateX(0px)';
    dont.style.transform = 'translateX(0px)';
    submit.style.transform = 'translateX(0px)';
};

// Handle account creation submission
submitc.onclick = () => {
    let repa = document.getElementById('repass').value;
    let pass = document.getElementById('passcre').value;
    let user = document.getElementById('usercre').value;
    if (user !== '' && pass !== '' && repa !== '' && pass === repa) {
        sendUserData(user, pass, false); // false for registration
    } else {
        submitc.innerHTML = 'Fill the Above';
        setTimeout(() => submitc.innerHTML = 'Create an Account', 2000);
    }
};

// JavaScript function to send user data to the Flask server
function sendUserData(username, password, isLogin) {
    const data = {
        username: username,
        password: password,
        l: isLogin ? 1 : 0
    };

    fetch('http://127.0.0.1:5000/receive_data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Response from server:', data);
        if (data.message=='L'){
            console.log('login successfull')
            submit.innerHTML = 'Logging In';
            setTimeout(() => submit.innerHTML = 'Login Successfull', 2000);
        }else if (data.message=='I'){
            msg.innerHTML = 'Incorrect Username or Password';
            submit.style.transform = 'translateY(35px)';
            setTimeout(() => msg.innerHTML = '', 2000);
            setTimeout(() => submit.style.transform = 'translateY(0px)', 2000);
        }else if(data.message=='Already'){
            msg2.innerHTML = 'This Username Already Exist';
            setTimeout(() => msg2.innerHTML = '', 2000);
        }else if(data.message=='C'){
            submitc.innerHTML = 'Creating';
            setTimeout(() => submitc.innerHTML = 'Account Created',1000);
            setTimeout(() => submitc.innerHTML = 'Create an Account', 2000);
        }

    })
}
