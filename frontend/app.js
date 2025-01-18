//=================================================================


    //==========================================================================
    
    const button = document.getElementById('getValueButton');
    const outputDiv = document.getElementById('output');
    button.addEventListener('click', () => {
        const inputValue = document.getElementById('username').value;

        fetch('http://localhost:3000/api/v1/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: inputValue })
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            outputDiv.innerHTML = `<p>welcome: ${JSON.stringify(data)}</p>`;
        })
        .catch((error) => {
            outputDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        });
    });




    //========================================================
    const button2 = document.getElementById('getValueButton2');
    const outputDiv2 = document.getElementById('output2');

    button2.addEventListener('click', () => {
        const inputValue2 = document.getElementById('id').value;
//=========================================================================to backend
        fetch(`http://localhost:3000/api/v1/tasks/${inputValue2}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify({ id: inputValue })
        })
//=================================================================================================
        .then((res) => {
            return res.json();
        })
        .then((data) => {
             if(data.name=="abdo"){
            outputDiv2.innerHTML = `<p>welcome: ${JSON.stringify(data)}</p>`;
             }
             else{
                outputDiv2.innerHTML = `<p>wrong data </p>`;

             }
        })
        .catch((error) => {
            outputDiv2.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        });
    });
//=================================================================