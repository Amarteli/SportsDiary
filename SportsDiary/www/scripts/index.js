//Creating a database
$(document).on("ready", function () {
    databaseHandler.createDatabase();

    $.mobile.changePage("login.html");
});


function toRegister() {
    $.mobile.changePage("register.html");
}

function loginUserdata() {

    var username = $("#txtUsername").val();
    var passwords = $("#txtPasswords").val();
    sessionStorage.setItem("user_info", "");
    if (!username) {
        alert("Username is required");
    } else if (!passwords) {
        alert("Password is required");
    } else {
        //var r = confirm("Username: " + username + "\n" + "Passwords: " + passwords);
        var r = true;
        if (r == true) {
            loginHandler.loginUser(username, passwords);
            
            $("#txtPasswords").val("");
            $("#txtRowid").val("");
            var nameinfo = sessionStorage.getItem("user_info");
            
            if (nameinfo.length > 0) {
                
                $.mobile.changePage("index.html");
            }
        }
    }
}

//Adding item in table
function addUserdata() {
    var username = $("#txtUsername").val();
    var passwords = $("#txtPasswords").val();
    if (!username) {
        alert("Username is required");
    } else if (!passwords) {
        alert("Password is required");
    } else {
        var r = confirm("Username: " + username + "\n" + "Passwords: " + passwords);
        if (r == true) {
            pwdHandler.addUser( username, passwords);
            $("#txtPasswords").val("");
            $("#txtRowid").val("");
            sessionStorage.setItem("user_info", username);
            
            $.mobile.changePage("index.html");
        }
    }
}

function addSportdata() {
    var username = sessionStorage.getItem("user_info");
    var sport = $("#txtSport").val();
    var place = $("#txtPlace").val();
    var sdate = $("#txtDate").val();
    var stime = $("#txtTime").val();
   
    if (!sport) {
        alert("Sport is required");
    } else if (!sdate) {
        alert("Date is required");
    } else {
       
        sportDataHandler.addAction(username, sport, place, sdate, stime);
                    
    }
}

function getSportdata() {
   
    var username = sessionStorage.getItem("user_info");
    
    getSportHandler.getSportData(username);
    
}


function showData(ind) {
    var username = sessionStorage.getItem("user_info");

    getSportHandler.showRowData(username, ind);

}