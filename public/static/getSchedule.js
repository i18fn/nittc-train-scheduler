document.getElementById("search-button").onclick = function() {
    var fromStation = document.getElementById("from-station").value;
    var toStation   = document.getElementById("to-station").value;

    alert("test");

    if (!fromStation) {
        return;
    } else if (!toStation) {
        return;
    };
    
    var database = firebase.database();

    database.ref("scheduler/bus/" + fromStation).on(
        "value", (snapshot) => {
            const data = snapshot.val();
            console.log(data);
        }
    )
};