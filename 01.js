function validateForm() {
    var photo = document.getElementById("photo").value;
    var fname = document.getElementById("fname").value;
    var mname = document.getElementById("mname").value;
    var lname = document.getElementById("lname").value;
    var pname = document.getElementById("pname").value;

    if (photo === "" || fname === "" || mname === "" || lname === "" || pname === "") {
        alert("Please fill in all the required fields.");
        return false;
    }

    return true;
}

function addCodeInput() {
    var codeInputs = document.getElementById('codeInputs');
    var newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.placeholder = 'New Code';
    codeInputs.appendChild(newInput);
}
document.getElementById("resumeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;

    // Get photo file
    var photoInput = document.getElementById("photo");
    var photo = '';
    if (photoInput.files.length > 0) {
        var reader = new FileReader();
        reader.onload = function (e) {
            photo = '<img src="' + e.target.result + '" alt="Photo" style="width: 150px; height: 150px;">'; // Adjust width and height here
            generateResume(name, email, education, experience, photo);
        };
        reader.readAsDataURL(photoInput.files[0]);
    } else {
        generateResume(name, email, education, experience, photo);
    }
});

function generateResume(name, email, education, experience, photo) {
    // Create a resume template using backticks (`) and placeholders (${variable})
    var resumeTemplate = `
        <h2>${name}</h2>
        ${photo}
        <p><strong>Email:</strong> ${email}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
    `;

    // Insert the resume template into the container
    document.getElementById("resumeContainer").innerHTML = resumeTemplate;
}

function printResume() {
    window.print();
}