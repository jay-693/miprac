function validate()
{
    var username=document.getElementById("uname");
    var password=document.getElementById("epass");
    var confirmPass=document.getElementById("cpass");
    var error1=document.getElementById("er");
    var error2=document.getElementById("err");
    var error3=document.getElementById("erro");
    var error4=document.getElementById("error");
    var error5=document.getElementById("em");
    if(username.value.trim() == "" && password.value.trim() == "" && confirmPass.value.trim() == "")
    {
           //alert("no blank values allowed");
           uname.style.border = "solid 3px red";
           epass.style.border = "solid 3px red";
           cpass.style.border = "solid 3px red";
           error1.style.visibility="visible";
           error2.style.visibility="visible";
           error3.style.visibility="visible";
           return false;
    }
    else if(username.value.trim() == "")
    {
       //alert("no blank values allowed");
       uname.style.border = "solid 3px red";
       error1.style.visibility="visible";
       return false;
    }
    else if(password.value.trim() =="")
    {
        epass.style.border = "solid 3px red";
        error2.style.visibility="visible";
       return false;
    }
    else if(confirmPass.value.trim() == "")
    {
        cpass.style.border = "solid 3px red";
        error3.style.visibility="visible";
        return false;
    }
    else if(password.value.trim().length<8){
        epass.style.border = "solid 3px red";
        error5.style.visibility="visible";
        return false;
    }
    else if(password.value!=confirmPass.value)
    {
        //alert("both fields are not same");
        cpass.style.border= "solid 3px red";
        error4.style.visibility="visible";
        return false;
    }
    else{
        return true;
    }
}