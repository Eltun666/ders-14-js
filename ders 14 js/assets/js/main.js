document.getElementById('myButton').addEventListener('click', function(e) {
    e.preventDefault();  
    const box = document.getElementById('box1');
    const div1 = document.getElementById('div1'); 
    const div2 = document.getElementById('div2'); 

    box.classList.add('boxanimation');
    div1.classList.add('rightanimation');
    div2.classList.add('leftanimation');

    box.addEventListener('animationend', function() {
        div1.classList.remove('rightanimation');
        div2.classList.remove('leftanimation');
        location.reload();
    });
});

document.getElementById('myButton1').addEventListener('click', function(e) {
    e.preventDefault(); 

    const box = document.getElementById('box2');
    const div3 = document.getElementById('div3');
    const div4 = document.getElementById('div4');

    box.classList.add('boxanimation');
    div3.classList.add('rightanimation1');
    div4.classList.add('leftanimation1');

    box.addEventListener('animationend', function() {
        div3.classList.remove('rightanimation1');
        div4.classList.remove('leftanimation1');
    });
});



let from = document.getElementById("form")
let form1 = document.getElementById("form1")

let name = document.getElementById("name")
let surname = document.getElementById("surname")
let email = document.getElementById("email1")
let password = document.getElementById("password")
from.addEventListener("submit",persone)
form1.addEventListener("submit",persone)



function persone(e){
    e.preventDefault();
    let personData = {
        name:name.value,
        surname:surname.value,
        email:email.value,
        password:password.value
    }
    from.reset()
    form1.reset()
    sessionStorage.setItem("Persone",JSON.stringify(personData))
}

let from2 = document.getElementById("logform1")

let email1 = document.getElementById("logemail")
let password1 = document.getElementById("logpass")

from2.addEventListener("submit",persone1)



function persone1(e){
    e.preventDefault();
    from2.reset()
    let a = JSON.parse(sessionStorage.getItem("Persone"))
    if(email1.value == a.email && password1.value == a.password){
        alert("Xos geldiniz")
    }else if(email1.value != a.email && password1.value != a.password){
        alert("Email ve Passwors sefdir")        
    }else if (email1.value != a.email){
        alert("Email sefdir")
    }else {
        alert("Password sefdir")
    }
}