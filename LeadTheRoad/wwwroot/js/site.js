
    
  
    

const fname1 = document.getElementById("Name");

const alert1 = document.getElementById("alert1");

fname1.addEventListener("blur", validate);

function validate() {
    let fname = fname1.value;
    let comp = new RegExp('[a-z]{2-15}', "gi");

    if (comp.test(fname)) {

        alert1.innerHTML = "Good";
        alert1.style.color = "green";

    } else {
        alert1.innerHTML = "Wrong";
        alert1.style.color = "red";
    }
}

const 

//function nameLast() {
//    let lName = LastName.value;
//    let comparelName = new RegExp('[a-z]{2,15}', "gi");
//    if (comparelName.test(lName)) {
//        displayLN.innerHTML = "Good!";
//        displayLN.style.color = "green";
//    } else {
//        displayLN.innerHTML = "Oops! incorrect input";
//        displayLN.style.color = "red";
//    }

//}





//const FirstName = document.getElementById("FirstName");
//const LastName = document.getElementById("LastName");
//const Phone = document.getElementById("Phone");
//const Email = document.getElementById("Email");
//const Address = document.getElementById("Address");
//const Course = document.getElementById("Course");
//const GradYr = document.getElementById("GradYr");
//const ExpYr = document.getElementById("ExpYr");
//const Functional = document.getElementById("Functional");
//const Password = document.getElementById("Password");
//const ConPass = document.getElementById("ConPass");


//const Name = document.getElementById("Name");
//const PhoneNum = document.getElementById("PhoneNum");
//const ComEmail = document.getElementById("ComEmail");
//const ComAddress = document.getElementById("ComAddress");
//const ComFunctional = document.getElementById("ComFunctional");
//const ComPassword = document.getElementById("ComPassword");
//const ConComPass = document.getElementById("ConComPass");

//const displayFN = document.querySelector("#displayFN");
//const displayLN = document.querySelector("#displayLN");
//const displayP = document.querySelector("#displayP");
//const displayE = document.querySelector("#displayE");
//const displayA = document.querySelector("#displayA");
//const displayC = document.querySelector("#displayC");
//const displayG = document.querySelector("#displayG");
//const displayExYr = document.querySelector("#displayExYr");
//const displayF = document.querySelector("#displayF");
//const pass = document.querySelector("#pass");
//const Cpass = document.querySelector("#Cpass");

//const displayName = document.querySelector("#displayName");
//const displayPN = document.querySelector("#displayPN");
//const displayCE = document.querySelector("#displayCE");
//const displayCA = document.querySelector("#displayCA");
//const displayCF = document.querySelector("#displayCF");
//const passC = document.querySelector("#passC");
//const CpassC = document.querySelector("#CpassC");




//FirstName.addEventListener("blur", nameFirst);
//LastName.addEventListener("blur", nameLast);
//Phone.addEventListener("blur", phone);
//Email.addEventListener("blur", email);
//Address.addEventListener("blur", address);
//Course.addEventListener("blur", course);
//GradYr.addEventListener("blur", grads);
//ExpYr.addEventListener("blur", experience);
//Functional.addEventListener("blur", funct);
//Password.addEventListener("blur", passe);
//ConPass.addEventListener("blur", conPass);

//Name.addEventListener("blur", name);
//PhoneNum.addEventListener("blur", phonenum);
//ComEmail.addEventListener("blur", comemail);
//ComAddress.addEventListener("blur", comaddress);
//ComFunctional.addEventListener("blur", comfunc);
//ComPassword.addEventListener("blur", compass);
//ConComPass.addEventListener("blur", concompass);

//function concompass() {
//    let cPassed = ConComPass.value;

//    if (ConComPass.value.trim() === "") {
//        CpassC.innerHTML = "Oops! input is empty";
//        CpassC.style.color = "red";
//    }
//    else if (cPassed === ComPassword.value) {
//        CpassC.innerHTML = "Match!";
//        CpassC.style.color = "green";
//    }

//    else {
//        CpassC.innerHTML = "Oops! password did not match";
//        CpassC.style.color = "red";
//    }
//}

//function compass() {
//    let passed = ComPassword.value;
//    let pword = /^[\w@-]{6,12}$/g;

//    if (pword.test(passed)) {
//        passC.innerHTML = "Good!";
//        passC.style.color = "green";
//    } else {
//        passC.innerHTML = "Password should contain minimum 6 charcter";
//        passC.style.color = "red";
//    }
//}

//function comfunc() {
//    let add = ComFunctional.value;
//    let comparefName = new RegExp('[a-z ]{3,30}', "gi");
//    if (comparefName.test(add)) {
//        displayCF.innerHTML = "Good!";
//        displayCF.style.color = "green";
//    } else {
//        displayCF.innerHTML = "Oops! incorrect input";
//        displayCF.style.color = "red";
//    }

//}

//function comaddress() {
//    let add = ComAddress.value;
//    let comparefName = new RegExp('[a-z0-9,]{4,100}', "gi");
//    if (comparefName.test(add)) {
//        displayCA.innerHTML = "Good!";
//        displayCA.style.color = "green";
//    } else {
//        displayCA.innerHTML = "Oops! incorrect input";
//        displayCA.style.color = "red";
//    }

//}

//function comemail() {
//    let emailAd = ComEmail.value;
//    let compareEmail = new RegExp('[a-z0-9_.]+@[a-z0-9-]+\.[a-z]{2,6}', "gi");
//    if (compareEmail.test(emailAd)) {

//        displayCE.innerHTML = "Good!";
//        displayCE.style.color = "green";
//    } else {
//        displayCE.innerHTML = "Oops! incorrect input";
//        displayCE.style.color = "red";
//    }
//}

//function phonenum() {
//    let phoneNu = PhoneNum.value;
//    let comparePhone = new RegExp('[1-9]{4,15}', "gi");

//    if (comparePhone.test(phoneNu)) {
//        displayPN.innerHTML = "Good!";
//        displayPN.style.color = "green";
//    } else {
//        displayPN.innerHTML = "Oops! incorrect input";
//        displayPN.style.color = "red";
//    }
//}

//function name() {
//    let lName = Name.value;
//    let comparelName = new RegExp('[a-z]{2,15}', "gi");
//    if (comparelName.test(lName)) {
//        displayName.innerHTML = "Good!";
//        displayName.style.color = "green";
//    } else {
//        displayName.innerHTML = "Oops! incorrect input";
//        displayName.style.color = "red";
//    }

//}

//function passe() {
//    let passed = Password.value;
//    let pword = /^[\w@-]{6,12}$/g;

//    if (pword.test(passed)) {
//        pass.innerHTML = "Good!";
//        pass.style.color = "green";
//    } else {
//        pass.innerHTML = "Password should contain minimum 6 charcter";
//        pass.style.color = "red";
//    }
//}

//function conPass() {
//    let cPassed = ConPass.value;
//    if (cPassed === Password.value) {
//        Cpass.innerHTML = "Match!";
//        Cpass.style.color = "green";
//    }
//    else if (cPassed.trim() === "") {
//        Cpass.innerHTML = "Oops! input is empty";
//        Cpass.style.color = "red";
//    }
//    else {
//        Cpass.innerHTML = "Oops! password did not match";
//        Cpass.style.color = "red";
//    }
//}

//function funct() {
//    let add = Functional.value;
//    let comparefName = new RegExp('[a-z ]{3,30}', "gi");
//    if (comparefName.test(add)) {
//        displayF.innerHTML = "Good!";
//        displayF.style.color = "green";
//    } else {
//        displayF.innerHTML = "Oops! incorrect input";
//        displayF.style.color = "red";
//    }

//}

//function experience() {
//    let add = ExpYr.value;
//    let comparefName = new RegExp('[0-9 ]{1,2}', "gi");
//    if (comparefName.test(add)) {
//        displayExYr.innerHTML = "Good!";
//        displayExYr.style.color = "green";
//    } else {
//        displayExYr.innerHTML = "Oops! incorrect input";
//        displayExYr.style.color = "red";
//    }

//}


//function grads() {
//    let add = GradYr.value;
//    let comparefName = new RegExp('[0-9 ]{4}', "gi");
//    if (comparefName.test(add)) {
//        displayG.innerHTML = "Good!";
//        displayG.style.color = "green";
//    } else {
//        displayG.innerHTML = "Oops! incorrect input";
//        displayG.style.color = "red";
//    }

//}

//function course() {
//    let add = Course.value;
//    let comparefName = new RegExp('[a-z ]{3,30}', "gi");
//    if (comparefName.test(add)) {
//        displayC.innerHTML = "Good!";
//        displayC.style.color = "green";
//    } else {
//        displayC.innerHTML = "Oops! incorrect input";
//        displayC.style.color = "red";
//    }

//}

//function address() {
//    let add = Address.value;
//    let comparefName = new RegExp('[a-z0-9,]{4,100}', "gi");
//    if (comparefName.test(add)) {
//        displayA.innerHTML = "Good!";
//        displayA.style.color = "green";
//    } else {
//        displayA.innerHTML = "Oops! incorrect input";
//        displayA.style.color = "red";
//    }

//}

//function email() {
//    let emailAd = Email.value;
//    let compareEmail = new RegExp('[a-z0-9_.]+@[a-z0-9-]+\.[a-z]{2,6}', "gi");
//    if (compareEmail.test(emailAd)) {

//        displayE.innerHTML = "Good!";
//        displayE.style.color = "green";
//    } else {
//        displayE.innerHTML = "Oops! incorrect input";
//        displayE.style.color = "red";
//    }
//}

//function phone() {
//    let phoneNu = Phone.value;
//    let comparePhone = new RegExp('[1-9]{4,15}', "gi");

//    if (comparePhone.test(phoneNu)) {
//        displayP.innerHTML = "Good!";
//        displayP.style.color = "green";
//    } else {
//        displayP.innerHTML = "Oops! incorrect input";
//        displayP.style.color = "red";
//    }
//}

//function nameFirst() {
//    let fName = FirstName.value;
//    let comparefName = new RegExp('[a-z]{2,15}', "gi");
//    if (comparefName.test(fName)) {
//        displayFN.innerHTML = "Good!";
//        displayFN.style.color = "green";
//    } else {
//        displayFN.innerHTML = "Oops! incorrect input";
//        displayFN.style.color = "red";
//    }

//}

//function nameLast() {
//    let lName = LastName.value;
//    let comparelName = new RegExp('[a-z]{2,15}', "gi");
//    if (comparelName.test(lName)) {
//        displayLN.innerHTML = "Good!";
//        displayLN.style.color = "green";
//    } else {
//        displayLN.innerHTML = "Oops! incorrect input";
//        displayLN.style.color = "red";
//    }

//}



























//Message Caleb


//Return to sendShift + Return to add a new line
//Slack needs your permission to enable desktop notifications.


//See what’s 



////$(document).ready(function () {
////    let comp = new RegExp('[a-z]{2-15}', "gi");
////    let fname = $("name");
////    let alert1 = $("alert1");

////    $(fname).blur(function () {

////        if (comp.test(fname)) {
////            alert1.innerHTML = "Good";
////            alert1.style.color = "green";
////        } else {
////            alert1.innerHTML = "Wrong";
////            alert1.style.color = "red";
////        }
////    }); 
////    });

