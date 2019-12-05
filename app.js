(function(){
    'use strict'

    jobLististInit()
    repositoryListInit()
    renderContactInfo()
})()

async function getRepos() {
    const response = await fetch('https://api.github.com/users/juan1003/repos');
    const data = response.json();
    return data;
}

async function repositoryListInit() {
    const repositories = await getRepos();

    repositories.map(repo => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<h4><a id="repo-link" href="${repo.html_url}" target="blank">${repo.name}</a></h4>
                              <p>${repo.description}</p>`

        document.querySelector('#repo-list').appendChild(listItem)
    })
}

function jobLististInit() {
    const experience = [
        {title: "Software Developer", company: "Qinetix Group LLC.", from: "April 2018", until: "Present", location: "Guaynabo, PR"},
        {title: "Software Engineer", company: "Agordia", from: "April 2017", until: "February 2018", location: "Guaynabo, PR"},
        {title: "Software Developer", company: "AON Hewitt", from: "July 2016", until: "January 2017", location: "San Juan, PR"}
    ]

    experience.map(job => {
        const listItem = document.createElement('li')
        listItem.innerHTML = `<h4>${job.title}</h4>
                              <p>${job.company} | ${job.from} - ${job.until} | ${job.location}</p>`
        
        document.querySelector('#job-list').appendChild(listItem)
    })
}

function renderContactInfo() {
    const tierlist = [
        {media: "Twitter", url: "https://twitter.com/jdejesus93"},
        {media: "Github", url: "https://github.com/juan1003"},
        {media: "LinkedIn", url: "https://linkedin.com/in/juan-de-jesus-torres-04662213b/"},
        {media: "Email Me!", url: "mailto:jdejesus93@gmail.com"}
    ]

    tierlist.map(contact => {
        const listItem = document.createElement('li')
        listItem.innerHTML = `<h4><a href="${contact.url}">${contact.media}</a></h4>`

        document.querySelector('#contact-info').appendChild(listItem)
    })
}