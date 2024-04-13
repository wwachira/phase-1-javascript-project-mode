 //had to create a db.json on my terminal lets see..
//something is not working here,sorted..
//fetch and display the user's repositories
//from thunder client I copy this list @client status 200 live to db.json
//Liz gets the response on git api(https://api.github.com)

//on my web page i Liz was able to search my username and got other 2users

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
