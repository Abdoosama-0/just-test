

//=====================================================================================================
    
    const button = document.getElementById('getValueButton');
    const outputDiv = document.getElementById('output');
    button.addEventListener('click', () => {
        const inputValue = document.getElementById('username').value;

        fetch('http://localhost:3000/api/v1/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: inputValue , completed:false})
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            outputDiv.innerHTML = `<p>added: task: ${data.task.name} , isCompleted: ${data.task.completed}</p>`;
        })
        .catch((error) => {
            outputDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        });
    });




//=====================================================================================================
    const button2 = document.getElementById('getValueButton2');
    const outputDiv2 = document.getElementById('output2');

    button2.addEventListener('click', () => {
        const inputValue2 = document.getElementById('id').value;
//to backend
        fetch(`http://localhost:3000/api/v1/tasks/${inputValue2}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            
        })
//=============
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            outputDiv2.innerHTML = `<p>the task : ${data.task.name}</p>`; 
        })
        .catch((error) => {
            outputDiv2.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        });
    });
//=================================================================
const button3 = document.getElementById('getValueButton3');
const outputDiv3 = document.getElementById('output3');

button3.addEventListener('click', () => {
    
//to backend
    fetch(`http://localhost:3000/api/v1/tasks`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
      
    })
//=============
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const tasksHtml = data.tasks//data is json but data.tasks means hold tasks and tasks here is array
        .map(task => `<p>Name: ${task.name} , Completed: ${task.completed} , id: ${task._id}</p>`)//task is a variable to hold each member in tasks array
        .join('');
    
    // Update the innerHTML of outputDiv2
    outputDiv2.innerHTML = tasksHtml;
    })
    .catch((error) => {
        outputDiv2.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    });
});
//=================================================================
 
const button5 = document.getElementById('submit');
const outputDiv5 = document.getElementById('output5');
button5.addEventListener('click', () => {
    const taskId = document.getElementById("task").value;
    const newTaskName = document.getElementById("newtask").value;
    fetch(`http://localhost:3000/api/v1/tasks/${taskId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: newTaskName })
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        outputDiv5.innerHTML = `<p>update completed : task: ${data.tasks.name} , isCompleted: ${data.tasks.completed}</p>`;
    })
    .catch((error) => {
        outputDiv5.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    });
});
//=================================================================
 
const button1 = document.getElementById('submit1');
const outputDiv6 = document.getElementById('output6');
button1.addEventListener('click', () => {
    const taskId = document.getElementById("taskid").value;
    fetch(`http://localhost:3000/api/v1/tasks/${taskId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
      
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        outputDiv6.innerHTML = `<p>  Completed: ${data.message} </p>`;
    })
    .catch((error) => {
        outputDiv6.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    });
});


