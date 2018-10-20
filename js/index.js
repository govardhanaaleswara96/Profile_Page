var email =document.querySelector('#email');
var pass = document.querySelector('#password');
var log = document.querySelector('#button');


log.addEventListener('click',function(){
    if(email.value == "") {
        alert("Error: email cannot be blank!");
        email.focus();
        return false;
    }
    re =/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if(!re.test(email.value)) {
      alert("Error: Enter Vaild Email Id!");
        email.focus();
        return false;
      }
      if(pass.value == ''){
           alert("Error: password cannot be blank!");
           pass.focus();
             return false;
           }
           if((pass.value.length < 8)) {
             alert("Error: password must contain at eight character");
             pass.focus();
             return false;
           }
           re = /[a-z]/;
           if(!re.test(pass.value)) {
             alert("Error: password must contain at least one lowercase letter (a-z)!");
             pass.focus();
             return false;
           }
          
           window.open('home.html');
    });





