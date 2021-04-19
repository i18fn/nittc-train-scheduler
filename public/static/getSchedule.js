document.getElementById("search-button").onclick = function() {
    var fromStation = document.getElementById("departure").value;
    var toStation   = document.getElementById("arrive").value;

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