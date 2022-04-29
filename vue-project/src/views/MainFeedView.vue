<template>
  <div class="app-page-flex-container">
    <div class="app-page-content">
      <div v-for="post of postStore.$state.posts" class="post-container content">
        <div class="post-title-container">
          <span class="post-title post-text">{{ post.title }}</span>
        </div>
        <div class="rating-container">
          <span v-for="i of 5">
            <span class="rating" v-if="Math.round(post.rating) >= i" v-on:click="rate(i, post.id)">★</span>
            <span class="rating" v-else v-on:click="rate(i, post.id)">☆</span>
          </span>
        </div>
        <div class="under-text">
          <span class="post-text post-content">{{ post.explanation }}</span>
        </div>
      </div>
    </div>
    <div class="app-page-edge">
      <span style="color: #f1f1f1">Here</span>
    </div>

  </div>
<!--  <span v-html="postStore.posts.length" style="color: #f1f1f1"></span>-->
  <button v-on:click="refresh">Refresh</button>
</template>

<script lang="ts">
import {useIdentityStore} from "@/stores/identityStore";
import {Options, Vue} from "vue-class-component";
import type {Post} from "@/domain/Post";
import {PostService} from "@/services/Posts";
import {usePostsStore} from "@/stores/posts";
import {RatingService} from "@/services/Ratings";

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
  ratingService = new RatingService();

  async mounted(): Promise<void> {
    await this.load()
  }

  async load(): Promise<void> {
    this.postStore.$state.posts = await this.postService.getAll();
  }

  refresh(): void {
    this.load()
    console.log(this.postStore.posts)
  }

  async rate(rating: number, id: string): Promise<void> {
    console.log("rating")
    console.log(rating, id)
    await this.ratingService.add({
      ProjectIdeaId: id,
      Rating: rating,
      UserId: id
    })
  }
}
</script>

<style scoped>
.post-container {
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: wrap;
  /*border: 1px solid white;*/
}

.post-text {
  color: #7d7c80;
}

.post-title {
  font-size: 2rem;
}

.post-title-container {
  width: 80%;
  /*border: 1px solid white;*/
}

.under-text {
  width: 90%;
}

.rating {
  color: #32642c;
  font-size: 1.5rem;
}

.rating-container {
  width: 19%;
  justify-self: right;
  justify-content: right;
  display: flex;
  /*border: 1px solid white;*/
}
</style>