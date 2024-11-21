let d1 = document.getElementById('d1')
let d2 = document.getElementById('d2')
let d3 = document.getElementById('d3')
let d4 = document.getElementById('d4')
let causes = document.getElementById('causes')
let effects = document.getElementById('effects')
let solution = document.getElementById('solution')
let project = document.getElementById('project')

// Add console log to ensure onclick events are firing
causes.onclick = () => {
    console.log("Causes button clicked");  // Check if this gets printed
    // Shrink the widths
    d1.style.width = '300px';
    d2.style.width = '300px';
    d3.style.width = '300px';
    d4.style.width = '300px';

    // Expand the widths after a delay
    setTimeout(() => {
        console.log("Expanding widths");
        d1.style.width = '460px';
        d2.style.width = '425px';
        d3.style.width = '385px';
        d4.style.width = '360px';
    }, 300);

    // Scroll to section2
    document.getElementById('section2').scrollIntoView();
}

// Ensure other buttons work as expected
effects.onclick = () => {
    console.log("Effects button clicked");
    document.getElementById('section3').scrollIntoView();
}

solution.onclick = () => {
    console.log("Solution button clicked");
    document.getElementById('section4').scrollIntoView();
}

project.onclick = () => {
    window.location.href = "project.html";
}

