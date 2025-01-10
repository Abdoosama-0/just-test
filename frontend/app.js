document.addEventListener('DOMContentLoaded', () => {
    let idCounter = 0; // Initialize ID counter

    const button = document.getElementById('getValueButton');
    const outputDiv = document.getElementById('output');
    button.addEventListener('click', () => {
        const inputValue = document.getElementById('username').value;

        fetch('http://localhost:3000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                id: ++idCounter, // Increment and send ID
                username: inputValue 
            })
        })
        .then((res) => {
            if (!res.ok) throw new Error(`HTTP status ${res.status}`);
            return res.json();
        })
        .then((data) => {
            outputDiv.innerHTML = `<p>Server Response: ${JSON.stringify(data)}</p>`;
        })
        .catch((error) => {
            outputDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        });
    });
});


       
