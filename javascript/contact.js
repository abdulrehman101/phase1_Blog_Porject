
function printError(element, msg) {
    document.getElementById(element).innerHTML = msg;
}
function validateForm() {

    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var feedback = document.contactForm.feedback.value
   
    var nameErr = emailErr = textErr = true;

    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // validate feedback
    if (feedback == "") {
        printError("textErr", "Please enter your feeback")
    } else {
        printError("textErr", "")
        textErr = false;
    }

    if ((nameErr || emailErr || textErr) == true) {
        return false;
    } else {
        alert('You have submitted the form..')
    }
}