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
          alt: 'Github profile picture',
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
          tagName: 'svg',
          attributes: {
            class: 'icon',
            viewBox: '0 0 14 16',
            width: '14',
            height: '16',
            aria_hidden: 'true'
          },
          innerHTML: [
            {
              tagName: 'path',
              attributes: {
                fill_rule: 'evenodd',
                d: 'M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z'
              }
            }
          ]
        },
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

// <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
// <path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
// </svg>