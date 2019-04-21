import { element, grab } from "../utils/DOMHelp/boxes";

export const buildProfile = async (data) => {
  console.log(data);
  await grab('container').append(element({
    tagName: 'div',
    attributes: {
      id: 'profile',
      class: 'profile-cont',
    },
  }), element({
    tagName: 'div',
    attributes: {
      id: 'repos',
      class: 'repos-container'
    }
  }))

  await grab('profile').append(element({
    tagName: 'img',
    attributes: {
      id: 'profile-pic',
      class: 'image profile-image',
      src: data.profile.avatar_url
    },
  }), element({
    tagName: 'p',
    attributes: {
      id: 'login',
      class: 'profile-login',
    },
    text: data.profile.login
  }), element({
    tagName: 'h1',
    attributes: {
      id: 'name',
      class: 'profile-name',
    },
    text: data.profile.name
  }), element({
    tagName: 'p',
    attributes: {
      id: 'bio',
      class: 'profile-bio',
    },
    text: data.profile.bio
  }))

  await grab('repos').append(element({
    tagName: 'h2',
    attributes: {
      class: 'repo-title'
    },
    text: 'Repositories'
  }), element({
    tagName: 'ul',
    attributes: {
      id: 'repo-list',
      class: 'repo-list'
    }
  }));

  data.repos.map((repo) => {
    grab('repo-list').append(element({
      tagName: 'li',
      attributes: {
        class: 'repo-list-item'
      },
      text: repo.name
    }))
  })
}