<template>
  <div class="PostList">
    <h1>Listagem</h1>

    <div v-if="loading">Carregando...</div>

    <div v-else>
      <post v-for="post in posts" :key="post.id" :post="post"></post>
    </div>
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
    posts: 'posts'
  }),

  data () {
    return {
      loading: true
    }
  },

  methods: {
    getPosts (id) {
      this.$store.dispatch('getPosts').then(response => {
        this.loading = false
      })
    },

    clearPosts () {
      this.$store.dispatch('clearPosts')
    }
  },

  created () {
    this.getPosts()
  },

  destroyed () {
    this.clearPosts()
  }
}
</script>

