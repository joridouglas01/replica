// use .value to retrieve input data from a form.  his is an example of how to get a password function to work.

function getInfo() {
	var username = document.getElementById("username").value 
 	var password = document.getElementById("password").value 
 	console.log("your username is " + username + " and your password is " + password)
}