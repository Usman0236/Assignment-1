function validation(){
    let a = document.getElementById("username").value;                                                 

    if(a == ""){
                 document.getElementById("message").innerHTML="**Please enter username"
                 return false;
    }else{
        document.getElementById("message").innerHTML=""
        // return false;
    }
    let b = document.getElementById("username").value;

    if(b.length < 3){
        document.getElementById("message").innerHTML="**username will be minimum 3 Letters"
        return false;
    }else{
        document.getElementById("message").innerHTML=""
        // return false;
    }
    let c = document.getElementById("password").value;

    if(c == ""){
        document.getElementById("message2").innerHTML="**Enter Password"
        return false;
    }else{
        document.getElementById("message2").innerHTML=""
        // return false;
    }

    let d = document.getElementById("password").value;

    if(d.length < 8){
        document.getElementById("message2").innerHTML="**Password will be atleast 8 characters"
        return false;
    }else{
        document.getElementById("message2").innerHTML=""
        // return false;
    }
    let e = document.getElementById("password").value;

    if(e.search(/[!\@\#\$\%\^\&\*]/) == -1){
        document.getElementById("message2").innerHTML="**Password must conatin special characters"
        return false;
    }else{
        document.getElementById("message2").innerHTML=""
        // return false;
    }
    if(a,b,c,d,e == e,d,c,b,a){
        document.getElementById("message3").innerHTML="**you have entered correct username and password"
        return false;
    }else{
        document.getElementById("message3").innerHTML=""
        // return false;
    }
}