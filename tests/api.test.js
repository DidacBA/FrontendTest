import { getProfileAndRepos, getProfile, getRepos } from '../app/utils/api';
import fetch from 'whatwg-fetch';


test('returns correct Github profile', async () => {
  const profile = await getProfile('DidacBA');

  await expect(profile.login).toEqual('DidacBA');
})

test('returns repos object with user repos', async () => {
  const repos = await getRepos('DidacBA');

  
})