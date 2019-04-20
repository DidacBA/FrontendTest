import { getProfileAndRepos, getProfile, getRepos } from '../app/utils/api/api';
import fetch from 'whatwg-fetch';


test('returns correct Github profile', async () => {
  const profile = await getProfile('DidacBA');

  expect(profile.login).toEqual('DidacBA');
})

test('returns repos object with correct user repos', async () => {
  const repos = await getRepos('DidacBA');

  expect(repos[0].name).toBe('Alexandria');
})

test('returns object with correct user profile and repos', async () => {
  const profileAndRepos = await getProfileAndRepos('DidacBA');

  expect(profileAndRepos.profile.login).toEqual('DidacBA');
  expect(profileAndRepos.repos[0].name).toBe('Alexandria');
})