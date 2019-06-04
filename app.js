(function(){
    'use strict'

    listInit();
})();

async function getRepos() {
    const response = await fetch('https://api.github.com/users/juan1003/repos');
    const data = response.json();
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