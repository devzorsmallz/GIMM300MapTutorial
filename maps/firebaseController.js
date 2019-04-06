var locationsRef = firebase.database().ref('locationData/');
var locationsDataArray = [];

locationsRef.on('value', function(snapshot) {
    snapshotToArray(snapshot);
    updateLocations();
})

function snapshotToArray(snapshot) {
    var locationArray = [];
    snapshot.foreach(function(childSnapShot) {
        var item = childSnapShot.val();
        locationArray.push(item);
    })

    locationsDataArray = locationArray;
}