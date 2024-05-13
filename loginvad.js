function valid(){
    var username=document.getElementById("uname");
    var password=document.getElementById("pass");
    var error1=document.getElementById("er");
    var error2=document.getElementById("err");
    var error3=document.getElementById("erro");
    if(username.value.trim() == "" && password.value.trim() == "")
        {
               //alert("no blank values allowed");
               uname.style.border = "solid 3px red";
               pass.style.border = "solid 3px red";
               error1.style.visibility="visible";
               error2.style.visibility="visible";
               return false;
        }
        else if(username.value.trim() == "")
        {
           //alert("no blank values allowed");
           uname.style.border = "solid 3px red";
           error1.value="username is required";
           error1.style.visibility="visible";
           return false;
        }
        else if(password.value.trim() =="")
        {
           pass.style.border = "solid 3px red";
           //error2.value="password is required";
           error2.style.visibility="visible";
           return false;
        }
        else if(password.value.trim().length<8){
            pass.style.border = "solid 3px red";
            error3.style.visibility="visible";
            return false;
        }
        else{
            return true;
        }
}
