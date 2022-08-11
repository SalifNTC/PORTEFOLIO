let senderName = document.getElementById("#senderName");
let sender = document.getElementById("#sender");
let content = document.getElementById("#content");
let send = document.querySelector('.send-btn')

send.onclick = () => { 
	Email.send({ 
		Host: "salifhenrique17@gmail.com", 
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