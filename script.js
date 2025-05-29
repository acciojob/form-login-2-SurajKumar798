//your JS code here. If required.
const button = document.getElementById('btn');
const fname = document.getElementById('fname');
const lname =  document.getElementById('lname');
const phone =  document.getElementById('phone');
const email =  document.getElementById('email');

fname.value = 'John';
lname.value = "Doe";
phone.value = "1234567890";
email.value = "john.doe@example.com"


function handleSubmit(){
	const message = `First Name: ${fname.value} Last Name: ${lname.value} Phone Number: ${phone.value} Email ID: ${email.value}`
	alert(message);
}