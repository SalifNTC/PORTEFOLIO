var senderName = document.getElementById("#senderName");
var sender = document.getElementById("#sender");
var content = document.getElementById("#content");

function sendEmail() { 
	Email.send({ 
		Host: "smtp.gmail.com", 
		Username: "sender", 
		Password: "Enter your password", 
		To: 'salifhenrique17@gmail.com', 
		From: sender, 
		Subject: "Sending Email using javascript", 
		Body: content, 
	}) 
		.then(function (message) { 
		alert("email sent successfully") 
		}); 
	} 