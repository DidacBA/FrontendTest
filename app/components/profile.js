import { element, grab } from "../utils/DOMHelp/boxes";

export const buildProfile = async (data) => {
  await grab('container').append(
    element({
    tagName: 'div',
    attributes: {
      id: 'profile',
      class: 'profile-cont',
    },
    innerHTML: [
      {
        tagName: 'img',
        attributes: {
          id: 'profile-pic',
          class: 'image profile-image',
          src: data.profile.avatar_url
        },
      },
      {
        tagName: 'p',
        attributes: {
          id: 'login',
          class: 'profile-login',
        },
        text: data.profile.login
      },
      {
        tagName: 'h1',
        attributes: {
          id: 'name',
          class: 'profile-name',
        },
        text: data.profile.name
      },
      {
        tagName: 'p',
        attributes: {
          id: 'bio',
          class: 'profile-bio',
        },
        text: data.profile.bio
      }
    ]
  }), 
  element({
    tagName: 'div',
    attributes: {
      id: 'repos',
      class: 'repos-container'
    },
    innerHTML: [
      {
        tagName: 'h2',
        attributes: {
          class: 'repo-title'
        },
        text: 'Repositories'
      },
      {
        tagName: 'ul',
        attributes: {
          id: 'repo-list',
          class: 'repo-list'
        }
      }
    ]
  }))

  data.repos.map((repo) => {
    grab('repo-list').append(element({
      tagName: 'li',
      attributes: {
        class: 'repo-list-item'
      },
      text: repo.name,
      innerHTML: [
        {
          tagName: 'span',
          attributes: {
            class: 'repo-stars'
          },
          text: `${repo.stargazers_count}`
        },
        {
          tagName: 'span',
          attributes: {
            class: 'repo-forks'
          },
          text: `${repo.forks_count}`
        },
      ]
    }))
  })
}