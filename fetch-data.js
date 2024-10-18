async function fetchUserData(){

    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    const dataContainer = document.getElementById('api-data');

    //Fetch Data Using try-catch:
    try {
        const response = await fetch(apiUrl);

        if(!response.ok) {
            throw new Error('Network response not ok');
        }
        
        //Then, convert the response to JSON using await response.json() and store this data in a constant named users.

        const users = await response.json();

        //Before appending new content to dataContainer, clear its existing content (the 'Loading user data' message) by setting dataContainer.innerHTML = ''.

        dataContainer.innerHTML ='';

        //Create a <ul> element and store it in a constant named userList. Loop through the users array with forEach
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        
        dataContainer.appendChild(userList);


    } catch (error){
        dataContainer.innerHTML = "Failed to load user data.";
        console.error('An error occurred during data fetching:', error);
    }

}

//invoke the addTask function on DOMContentLoaded. - Outside addTask, add an event listener to document for the DOMContentLoaded event. Set the callback function to invoke addTask
document.addEventListener('DOMContentLoaded', fetchUserData);