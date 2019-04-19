const id = process.env.CLIENT_ID;
const sec = process.env.SECRET_ID;
const params = `?client_id=${id}&client_secret=${sec}`;

export async function getProfile (username) {
  const response = await fetch(`https://api.github.com/users/${username}${params}`);
  
  return response.json();
}

export async function getRepos (username) {
  const response = await fetch(`https://api.github.com/users/${username}/repos${params}&per_page=100`);

  return response.json();
}

export async function getProfileAndRepos (username) {
  const profile = await getProfile(username);
  const repos = await getRepos(username);
  const response = { profile, repos };

  return response;
}
