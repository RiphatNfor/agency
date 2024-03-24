function displayFormData() {
    var formData = JSON.parse(localStorage.getItem('formData'));
    var tableHtml = '';
    for (var key in formData) {
        tableHtml += `
            <tr>
                <td>${key}</td>
                <td>${formData[key]}</td>
            </tr>
        `;
    }
    document.getElementById('formDataBody').innerHTML = tableHtml;
}

// Display the form data when the page loads
displayFormData();