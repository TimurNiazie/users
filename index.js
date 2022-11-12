async function fetchusers() {
    let url = 'https://raw.githubusercontent.com/TimurNiazie/users/main/users.json';
    try {
        let response = await fetch(url);

        if (response.status== 200) {
            return await response.json(); 
        }

        //TO DO 
        // Break into the catch, throw an error
    

    } catch (error);
}

async function renderUsers() {
    let users = await fetchUsers();
    let html = '';

    users.forEach(user => {
        console.log(user);
        let htmlSegment = `<div class="user">
            <h2>${user.firstName} ${user.lastName}</h2>
            <div class="email"><a Href="email:${user.email}"> ${user.email}</div>
        </div>`
    console.log(htmlSegment);
    htmll += htmlSegment;
    });
    let container = document.querySelector('user-container');
    container.innerHTML = html;
}

renderUsers();