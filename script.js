document.getElementById('scanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var idCardFile = document.getElementById('idCard').files[0];
    if (!idCardFile) {
        alert('Please select a file');
        return;
    }
    
    var reader = new FileReader();
    reader.onload = function(event) {
        var ticketImage = document.getElementById('ticketImage');
        ticketImage.src = event.target.result;
        document.getElementById('ticket').style.display = 'block';
    };
    reader.readAsDataURL(idCardFile);
});



