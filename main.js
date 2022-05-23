let userName = prompt("what is your name?")
if(userName === "Admin"){
    let password = prompt("Enter your password:")
    if(password === "TheMaster"){
        alert("Welcome")
    }else if(password !== "TheMaster"){
        alert("Wrong password")
    }else if(password == "" || null){
        alert("Canceled")
    }
 
}else if(userName == "" || null){
    alert("Canceled")
}else if(userName !== "Admin"){
    alert("I don't know you")
}