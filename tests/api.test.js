import { getProfileAndRepos, getProfile, getRepos } from '../app/utils/api/api';
import fetch from 'whatwg-fetch';


test('returns correct Github profile', async () => {
  const profile = await getProfile('DidacBA');

  await expect(profile.login).toEqual('DidacBA');
})

test('returns repos object with correct user repos', async () => {
  const repos = await getRepos('DidacBA');

  await expect(repos[0].name).toBe('Alexandria');
})

test('returns object with correct user profile and repos', async () => {
  const profileAndRepos = await getProfileAndRepos('DidacBA');

  await expect(profileAndRepos.profile.login).toEqual('DidacBA');
  await expect(profileAndRepos.repos[0].name).toBe('Alexandria');
})