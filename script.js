// This will send the email


// Listen for a submit
document.querySelector(".message-form").addEventListener("submit", submitForm);

// Make sure non of the fields are empty
function emptyFields() {
  var field;
  field = document.getElementById('fname').value;
  if (field == "") {
    alert("Enter valid First Name");
    return false;
  };
}
function submitForm(e) {
  e.preventDefault();

  // Get the input values
  let fname = document.querySelector(".fname").value;
  let lname = document.querySelector(".lname").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;

  document.querySelector(".message-form").reset();

  sendEmail(fname, lname, email, message);

}



// Send Email Info
function sendEmail(fname, lname, email, message) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "pitonyaks4@gmail.com",
    Password: "yxnqbkyzesiuqaah",
    To: "pitonyaks4@gmail.com",
    From: "pitonyaks4@gmail.com",
    Subject: `${fname} ${lname} send you a message`,
    Body: `Name: ${fname} ${lname} <br/> Email: ${email} <br/> Message: ${message}`,

  }).then((message) => alert("Message Sent Successfully"))
}
