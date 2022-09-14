function submitData() {

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let position = document.getElementById("position").value
    let message = document.getElementById("message").value

    if(name == ""){
        return alert("Enter your name")
    } else if (email == ""){
        return alert("Enter your email")
    } else if(phone == ""){
        return alert("Enter your phone Number")
    } else if(position == "") {
        return alert("select your position")
    } else if(message == ""){
        return alert("write your message")
    }

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(position);
    console.log(message);

    

    let emailReceiver = "johnMarston@gmail.com"

    let a = document.createElement('a')
    a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${position}&body=hallo, saya ${name}, ${message}, silakan hubungi nomor ${phone}`
    a.click()
    
}
