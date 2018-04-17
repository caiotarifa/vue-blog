<template>
  <div class="PostDetail">
    <h1>Post</h1>
    <router-link :to="{ name: 'post-list'}">Voltar para a listagem de posts.</router-link>
    
    <div v-if="loading">Carregando...</div>
    <post v-else :post="post"></post>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Post from '../components/post'

export default {
  components: {
    Post
  },

  computed: mapGetters({
    post: 'post'
  }),

  data () {
    return {
      loading: true
    }
  },

  methods: {
    getPost (id) {
      this.$store.dispatch('getPost', id).then(response => {
        this.loading = false
      })
    },

    clearPost () {
      this.$store.dispatch('clearPost')
    }
  },

  created () {
    this.getPost(this.$route.params.id)
  },

  destroyed () {
    this.clearPost()
  }
}
</script>
