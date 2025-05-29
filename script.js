//your JS code here. If required.
const button = document.getElementById('btn');
const fname = document.getElementById('fname');
const lname =  document.getElementById('lname');
const phone =  document.getElementById('phone');
const email =  document.getElementById('email');



function submit(){
	const message = `First Name: ${fname.value} Last Name: ${lname.value} Phone Number: ${phone.value} Email ID: ${email.value}`
	alert(message);
}