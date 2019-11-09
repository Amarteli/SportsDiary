var loginHandler = {
    //Add the record in database, it adds record or row in Web SQL (SQLite)
    loginUser: function ( usrname, psswords) {
        databaseHandler.db.transaction(
            function (tx) {
                tx.executeSql(                 
                    "Select * From userdata Where username = " + usrname + " And passwords = " + psswords ,

                    function (tx, results) {
                        if (results.rows.length > 1 
                        },
                    function (tx, error) {
                        var r = confirm("login error: " + error.message );
                        console.log("login error: " + error.message);
                    }
                );
            },
            function (error) { },
            function () { }
            
        );
    },
}