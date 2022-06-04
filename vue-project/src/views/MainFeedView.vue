<template>
  <div class="app-page-flex-container">
    <div class="app-page-content">
      <div class="post-container content">
        <div class="post-title-container">
          <span class="post-title post-text">Post a new project</span>
        </div>
        <div class="new-post-entry-container">
          <input v-model="newPostTitle" type="text" class="new-post-entry" placeholder="Your new idea">
          <RouterLink to="/newPost" class="new-post-entry-button" v-on:click="titlelog">
            To Posting
          </RouterLink>
        </div>
      </div>
      <div v-for="post of postStore.posts" class="post-container content">
        <div class="post-title-container">
          <span class="post-title post-text">{{ post.title }}</span>
        </div>
<!--        <span class="post-text">{{post.id}}</span>-->
        <div class="rating-container">
          <span v-for="i of 5">
            <span class="rating" v-if="Math.round(post.rating) >= i" v-on:click="rate(i, post.id)">★</span>
            <span class="rating" v-else v-on:click="rate(i, post.id)">☆</span>
          </span>
        </div>
        <div class="under-text">
          <span class="post-text post-content">{{ post.explanation }}</span>
        </div>
        <div class="tag-container">
          <span class="post-tag" v-for="id of post.tagIds">{{ getTagById(id) }}</span>
        </div>
      </div>
    </div>
    <div class="app-page-edge">
      <div class="edge-box">
        <div class="edge-box-button">
          <RouterLink to="/" class="edge-box-link">Feeds</RouterLink>
        </div>
        <div class="edge-box-button">
          <RouterLink to="/" class="edge-box-link">feed1</RouterLink>
        </div>
        <div class="edge-box-button">
          <RouterLink to="/" class="edge-box-link">feed2</RouterLink>
        </div>
      </div>
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
import {useTagStore} from "@/stores/tagstore";
import {TagsService} from "@/services/Tags";
import type {Tag} from "@/domain/Tag";

@Options({
  components: {},
  props: {},
  emits: [],
})
// @ts-ignore
export default class MainFeed extends Vue {
  identityStore = useIdentityStore();
  postService = new PostService();
  postStore = usePostsStore();
  tagStore = useTagStore();
  tagService = new TagsService();
  ratingService = new RatingService();
  newPostTitle = "";

  titlelog(): void {
    console.log(this.newPostTitle)
  }

  async mounted(): Promise<void> {
    await this.load()
  }

  async load(): Promise<void> {
    this.postStore.$state.posts = await this.postService.getAll();
    this.tagStore.addAll(await this.tagService.getAll());
  }

  refresh(): void {
    this.load()
    console.log(this.postStore.posts)
  }

  getTagById(id: string): string {
    let res = "tag";
    const tags = this.tagStore.tags.filter(t => t.id == id)
    return tags[0].tagname["en-GB"]
  }

  async rate(rating: number, id: string): Promise<void> {
    console.log("rating")
    console.log(rating, id)
    this.postStore.index(id);
    await this.ratingService.add({
      ProjectIdeaId: id,
      Rating: rating,
      UserId: id
    })
    let post = await this.postService.get(id);
    console.log(post)
    this.postStore.$patch((state) => {
      console.log(state.indexToUpdate)
      state.posts[state.indexToUpdate!].rating = post.rating;
    })
  }
}
</script>

<style scoped>
.post-container {
  background: #363535;
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: wrap;
  padding-bottom: 1.5rem;
  padding-left: 1.5rem;
  border: 1px solid #3f2525;
  border-radius: 20px;
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

.new-post-entry-container {
  display: flex;
  border: 1px solid #2a2a2a;
  background: #363535;
  border-radius: 0.6rem;
  border-image: fill;
  width: 93%;
}

.new-post-entry {
  flex-grow: 8;
  font-size: 1.5rem;
  padding: 0.5rem 0.1rem 0.5rem 0.5rem;
  /*padding-bottom: 0.3rem;*/
  background: #3a3939;
  border-color: transparent;
  border-radius: 0.6rem;
  border-image: fill;
  width: 60%;
}

.new-post-entry-button {
  flex-grow: 2;
  border: 1px solid #2a2a2a;
  border-radius: 0.6rem;
  padding-bottom: 0.4rem;
  text-align: center;
  background: #2e4d2c;
  font-size: 1.7rem;
  max-width: 30%;
  text-decoration: none;
  color: #263f24;
}

.post-tag {
  color: #949191;
  border: 1px solid #676f88;
}

.tag-container {
  width: 100%;
  display: flex;
  margin-top: 1rem;
}

/*.post-tag{*/
/*  position:relative;*/
/*  margin:0 0.5rem 0 1rem;*/
/*  display:inline-block;*/
/*  height:1.1rem;*/
/*  padding: 0 1.9rem 0 1.5rem;*/
/*  font-size: 1.5rem;*/
/*  line-height:4.0rem;*/
/*  cursor: pointer;*/
/*  font-weight: 10;*/
/*  margin: 1.9px 2px;*/
/*  background: #6c6b6b;*/
/*  transition: background 0.3s;*/
/*}*/

/*.post-tag:after{*/
/*  position:absolute;*/
/*  content:"";*/
/*  right:-1.25rem;*/
/*  width: 0.1rem;*/
/*  height:0rem;*/
/*  border-left:1.1rem solid #f3f3f3;*/
/*  border-top:  2rem solid transparent;*/
/*  border-bottom: 2rem solid transparent;*/
/*  transition: border 0.3s;*/
/*}*/

/*.post-tag:hover{*/
/*  background: green;*/
/*  color:#ffffff;*/
/*}*/

/*.post-tag:hover:after{*/
/*  border-left-color:green;*/
/*}*/
</style>