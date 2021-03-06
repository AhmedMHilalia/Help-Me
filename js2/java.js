

function getLocation() {

    var listInfo = {
        name: 'Asas',
        phone: 'asas',
        message: 'asd',
        latitude: '121',
        longitude: '121'
    }
    listInfo.name = document.getElementById('name').value
    localStorage.setItem('listInfo', JSON.stringify(listInfo))

    // Resive value from localstroge
    var test = JSON.parse(localStorage.getItem('listInfo'))
    console.log(test);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + ' , ' +
        "Longitude: " + position.coords.longitude;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
} 
