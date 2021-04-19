document.getElementById("search-button").onclick = function() {
    var fromStation = document.getElementById("departure").value;
    var toStation   = document.getElementById("arrive").value;

    if (!fromStation) {
        return;
    } else if (!toStation) {
        return;
    };
    
    var database = firebase.database();

    var data;
    database.ref("scheduler/bus/" + fromStation).on(
        "value", (snapshot) => {
            data = snapshot.val();
        }
    )

    document.getElementById("result").innerText = data;
};