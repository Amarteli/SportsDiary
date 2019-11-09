var loginHandler = {
    //Add the record in database, it adds record or row in Web SQL (SQLite)
    loginUser: function ( usrname, psswords) {
        databaseHandler.db.transaction(
            function (tx) {
                tx.executeSql(                 
                    "Select * From userdata Where userdata.username = '" + usrname + "' And userdata.passwords = '" + psswords + "'",

                    function (tx, results) {
                        return true 
                        },
                    function (tx, error) {
                        var r = confirm("login error: " + error.message );
                        console.log("login error: " + error.message);
                        return false
                    }
                );
            },
            function (error) { },
            function () { }
            
        );
    },
}