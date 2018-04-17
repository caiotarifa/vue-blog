<template>
  <article class="Post" :class="classes">
    <header class="Post-header">
      <h3 class="Post-title"><router-link :to="{ name: 'post-detail', params: { id: post.id } }">{{ post.title }}</router-link></h3>
    </header>

    <div v-if="post.body" class="Post-content" v-html="post.body"></div>

    <footer class="Post-footer">
      <button type="button" @click="like">{{ likeLabel }}</button>
      <span>{{ likes }} pesoas já curtiram isso!</span>
    </footer>
  </article>
</template>

<script>
export default {
  computed: {
    classes () {
      return {
        'Post--featured': this.featured
      }
    },

    likeLabel () {
      return this.liked ? 'Descurtir' : 'Curtir'
    }
  },

  data () {
    return {
      liked: false,
      likes: 0
    }
  },

  methods: {
    like () {
      this.liked = !this.liked
      this.likes += this.liked ? 1 : -1
    }
  },

  props: {
    featured: {
      type: Boolean,
      default: false
    },

    post: {
      default: () => {},
      type: Object
    }
  }
}
</script>

<style>
.Post--featured {
  color: red;
}
</style>
