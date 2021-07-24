function fun(){
    console.log("here");
    var a = document.getElementById("Password").value;
    var b = document.getElementById("ConfirmPassword").value;
    if(a.length<8){
        document.getElementById("span1").innerHTML="**Password should be at least of 8 chracters**";
    }
        else if(a.length>15)
        {
            document.getElementById("span1").innerHTML="**Password should be less than 15 chracters**";
        }
     
    
   else if(a!=b){
        document.getElementById("span1").innerHTML="**Password is not matched**";

    }
    
    else{
        alert("Password and Confirm Password is same");

    }
    


        
    }

//min 8 , max 15 
//confirm pass == password
//==> alert("password and confirm password is same")

//if(a.length> && a.length1<5)