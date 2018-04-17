import api from '../../api/posts'

const state = {
  posts: [],
  post: {}
}

const getters = {
  posts: state => state.posts,
  post: state => state.post
}

const actions = {
  getPosts ({ commit }) {
    return new Promise((resolve, reject) => {
      api.getPosts().then(response => {
        commit('setPosts', response.data)
        resolve(response)
      }, error => reject(error))
    })
  },

  getPost ({ commit, state }, id) {
    return new Promise((resolve, reject) => {
      let filtered = state.posts.find(post => post.id === id)

      if (filtered) {
        commit('setPost', filtered)
        return resolve({ data: filtered })
      }

      api.getPost(id).then(response => {
        commit('setPost', response.data)
        resolve(response)
      }, error => reject(error))
    })
  },

  clearPosts ({ commit }) {
    commit('clearPosts')
  },

  clearPost ({ commit }) {
    commit('clearPost')
  }
}

const mutations = {
  setPosts (state, posts) {
    state.posts = posts
  },

  setPost (state, post) {
    state.post = post
  },
  
  clearPosts (state) {
    state.posts = []
  },

  clearPost (state) {
    state.post = {}
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
