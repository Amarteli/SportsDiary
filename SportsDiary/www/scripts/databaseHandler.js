var databaseHandler = {
    db: null,
    createDatabase: function () {
        this.db = window.openDatabase(
            "SportDiary.db",
            "1.0",
            "Sport diary database",
            1000000);
        this.db.transaction(
            function (tx) {
                
                //Run SQL Here
                tx.executeSql(
                    "create table if not exists userdata(_id int primary key, username text, passwords text)",
                [],
                    function (tx, results) { },
                    function (tx, error) {
                        console.log("Error while creating the table: " + error.message);
                    })
                tx.executeSql(
                    "create table if not exists diarydata(_id int primary key, username text, sporttype text, sportplace text, sportdate datetime, sportlen double)",
                    [],
                    function (tx, results) { },
                    function (tx, error) {
                        console.log("Error while creating the table: " + error.message);
                    })
            },
            function (error) {
                console.log("Transaction error:" + error.message);
            },
            function () {
                console.log("Create DB transaction completed successfully:");
            },
        );
    }
}