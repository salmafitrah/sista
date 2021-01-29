// Empty JS for your own code to be here

	function login(){
        let uname = document.getElementById("Username");
        let pw = document.getElementById("Password");

        console.log("Username = " + uname.value);
        console.log("Password = " + pw.value);
        if(uname.value == "admin" && pw.value == "000"){
            alert("---WELCOME---");
            window.location = "admin.html";
        }else{
            alert("Username / Password Salah!");
        }
	}
