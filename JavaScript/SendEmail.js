var senderName = document.getElementById("#senderName");
var sender = document.getElementById("#sender");
var content = document.getElementById("#content");
function sendMail() {

    //getting values from input fields
  
    sender = Form.sender.value;
  

    receiver= "salifhenrique17@gmail.com";
  
    content=Form.content.value;
  
   
    //Sending email
  
    Email.send({
  
    Host: "smtp.gmail.com",
  
    Username: sender,
  
    To: receiver,
  
    From: sender,
  
    Subject: "Check Email Sending",
  
    Body: content,
  
    }).then(function (message) {
  
    alert("Email sent successfully")
  
    });
  
  }