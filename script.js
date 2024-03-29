function sendDataToServer(data) {
    fetch('http://localhost:8080/', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        },
        body: data
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(responseText => {
        console.log('Server response:', responseText);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

// Assuming you have gyroscope data stored in a variable named gyroData
sendDataToServer(JSON.stringify(gyroData));
