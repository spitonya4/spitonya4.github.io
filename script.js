// This will send the email


// Listen for a submit
document.querySelector(".message-form").addEventListener("submit", submitForm);
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
    Password: "nqzfrtlptgnndobt",
    To: "pitonyaks4@gmail.com",
    From: "pitonyaks4@gmail.com",
    Subject: `${fname} ${lname} send you a message`,
    Body: `Name: ${fname} ${lname} <br/> Email: ${email} <br/> Message ${message}`,

  }).then((message) => alert("Message Sent Successfully"))
}
