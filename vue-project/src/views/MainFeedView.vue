<template>
  <div v-for="post of postStore.posts">
    <div>
      <span>{{ post.title }}</span>
    </div>
    <div>
      <span>{{ post.explanation }}</span>
    </div>
    <div>
      <span v-for="i of 5">
        <span v-if="post.rating > i">★</span>
        <span v-else>☆</span>
      </span>
    </div>
  </div>
  <span v-html="postStore.posts.length"></span>
</template>

<script lang="ts">
import {useIdentityStore} from "@/stores/identityStore";
import {Options, Vue} from "vue-class-component";
import type {Post} from "@/domain/Post";
import {PostService} from "@/services/Posts";
import {usePostsStore} from "@/stores/posts";

@Options({
  components: {
  },
  props: {},
  emits: [],
})
// @ts-ignore
export default class MainFeed extends Vue {
  identityStore = useIdentityStore();
  postService = new PostService();
  postStore = usePostsStore();

  async mounted(): Promise<void> {
    this.postStore.$state.posts = await this.postService.getAll();
  }
}
</script>

<style scoped>

</style>