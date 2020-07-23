fetch("https://api.github.com/users/juan1003/repos")
    .then(response => response.json())
    .then(data => {
        data.map(repository => {
            const li = document.createElement('li');
            li.innerHTML = `
                <a href="${repository.html_url}" target="_blank">${repository.name}</a>
                <p>${repository.description}</p>
            `;
            document.querySelector("#repo-list").appendChild(li);
        })
    })
    .catch(error => console.error(error.message));

