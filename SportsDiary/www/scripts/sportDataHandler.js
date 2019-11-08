var sportDataHandler = {
    //Add the record in database, it adds record or row in Web SQL (SQLite)
    addAction: function (username, sporttype, sportplace, sportdate, sportlen) {
        databaseHandler.db.transaction(
            function (tx) {
                tx.executeSql(
                    "insert into diarydata( username, sporttype, sportplace, sportdate, sportlen) values( ?, ?, ?, ?, ?)",
                    [username, sporttype, sportplace, sportdate, sportlen],
                    function (tx, results) { },
                    function (tx, error) {
                        console.log("add product error: " + error.message);
                    }
                );
            },
            function (error) { },
            function () { }
        );
    },
} 