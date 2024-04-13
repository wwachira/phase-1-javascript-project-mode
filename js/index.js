# GitHub Search App

//This IS a tool to search for users on github using Javascript.
const form = document.getElementById('github-form');
const userList = document.getElementById('user-list');
const reposList = document.getElementById('repos-list');

form.addEventListener('submit', async function(event) {
  event.preventDefault();
  const searchValue = document.getElementById('search').value.trim();
  if (!searchValue) return;

  const users = await searchUsers(searchValue);
  displayUsers(users);
});

async function searchUsers(username) {
  const response = await fetch(`https://api.github.com/search/users?q=${username}`);
  const data = await response.json();
  return data.items;
}

async function getUserRepos(username) {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  const data = await response.json();
  return data;
}

function displayUsers(users) {
  userList.innerHTML = '';
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.login;
    li.addEventListener('click', async function() {
      const repos = await getUserRepos(user.login);
      displayRepos(repos);
    });
    userList.appendChild(li);
  });
}

function displayRepos(repos) {
  reposList.innerHTML = '';
  repos.forEach(repo => {
    const li = document.createElement('li');
    li.textContent = repo.name;
    reposList.appendChild(li);
  });
}
