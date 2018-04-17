import axios from 'axios'

export default {
  getPosts (payload) {
    return axios.get('/posts', payload)
  },

  getPost (id, payload) {
    return axios.get('/posts/' + id, payload)
  }
}
