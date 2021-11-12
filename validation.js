let email = document.getElementById("inputEmail4");
let error = document.getElementById("error");
let password = document.getElementById("inputPassword4");

function validate()
 {
     let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    //  let  = /^(?=.*\d)(?=.[a-z])(?=.*[A-Z]).{8,20}$/;
     if(regexp.test(email.value)){
         error.innerHTML="Valid";
         error.style.color="green";
         return true;
     }
     else{

          error.innerHTML="Invalid";
          error.style.color="red";
          return false;
     }

 } 
     
 
//  if(email.value==""){
//      alert("Email cannot empty");
//      return false;
//  }
//  else if(password.value==""){
//      alert("Password cannot empty");
//      return false;
//  }
//  else if (password.value.length>=8){
//      alert("Password should be 8 digit or greater than 8");
//      password.style.border= "2px solid red";
//      return false;
//  }
//  else{
//      return true;
//  }