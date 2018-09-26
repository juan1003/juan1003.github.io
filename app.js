(function(){
    'use strict'

    listInit();
})();

function getRepos() {
    const data = fetch('https://api.github.com/users/juan1003/repos')
    .then(response => {
        return response.json();
    })
    .then(repos => {
        const repositories = [];
        repos.map(repo => {
            repositories.push({name: repo.name, uri: repo.html_url, description: repo.description});
        });
        return repositories;
    })
    .catch(err => {
        console.error(err);
    });

    return data;
}

async function listInit() {
    const repos = await getRepos();
    
    repos.map(repo => {
        const listItem = document.createElement('div');
        listItem.className = "list-item";
        listItem.innerHTML = `<h4>${repo.name}</h4>
                              <p>${repo.description}</p>
                              <a class="btn" href="${repo.uri}" target="blank">Visit Repository &raquo;</a>`;

        document.querySelector('#repo-list').appendChild(listItem);
    })
}