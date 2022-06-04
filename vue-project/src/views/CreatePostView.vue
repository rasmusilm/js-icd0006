<template>
  <div class="app-page-flex-container">
    <div class="app-page-content">
      <div class="post-container content">
        <div class="new-post-title-container">
          <input v-model="post.title" type="text" class="new-post-title" placeholder="Title your project idea...">
        </div>
        <div class="new-post-title-container">
          <textarea v-model="post.explanation" class="new-post-explanation" placeholder="Explain the details of your project...">
          </textarea>
        </div>
        <span class="post-text" v-on:click="switchTagSelectionVisible">
          See all tags
        </span>
        <div v-if="seeTagSelection" class="new-post-tags-container">
          <span v-for="tag of unusedTags" v-on:click="addTag(tag.id)">
            <span v-if="!post.tagIds.includes(tag.id)" class="post-tag">
              {{tag.tagname["en-GB"]}}
            </span>
          </span>
        </div>
        <div class="new-post-tags-container">
          <span class="post-tag" v-for="tagId of post.tagIds" v-on:click="removeTag(tagId)">
            {{getTagById(tagId)}}
          </span>
        </div>
      </div>
    </div>
    <div class="app-page-edge">
      <div class="edge-box">
        <div class="edge-box-button">
          <RouterLink to="/" class="edge-box-link">here</RouterLink>
        </div>
        <div class="edge-box-button">
          <RouterLink to="/" class="edge-box-link">here</RouterLink>
        </div>
        <div class="edge-box-button">
          <RouterLink to="/" class="edge-box-link">here</RouterLink>
        </div>
      </div>
  </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import type {Post} from "@/domain/Post"
import type {Tag} from "@/domain/Tag"
import {useTagStore} from "@/stores/tagstore";


export default class CreatePost extends Vue {
  title = "";
  post: Post = {
    id: "",
    title: "Cool site for sharing coding ideas",
    explanation: "",
    PostedAt: "",
    Edited: false,
    Deleted: false,
    complexity: "",
    difficulty: "",
    userId: "",
    rating: 0,
    tagIds: []
  };
  seeTagSelection = true
  tagStore = useTagStore();
  unusedTags: Tag[] = [...this.tagStore.tags]

  switchTagSelectionVisible() {
    this.seeTagSelection = !this.seeTagSelection
  }

  getTagById(id: string): string {
    let res = "tag";
    const tags = this.tagStore.tags.filter(t => t.id == id)
    return tags[0].tagname["en-GB"]
  }

  addTag(id: string) {
    if (!this.post.tagIds.includes(id)) {
      this.post.tagIds.push(id)
      this.removeUnused(id)
    }
    else {
      console.log("already there")
    }
  }

  removeTag(id: string) {
    for(let i = 0; i < this.post.tagIds.length; i++){

      if (this.post.tagIds[i] === id) {
        this.post.tagIds.splice(i, 1);
        break;
      }
    }

    this.reinsertUnused(id);
  }

  async reinsertUnused(id: string) {
    for (let i = 0; i < this.tagStore.tags.length; i++) {
      if (this.tagStore.tags[i].id === id) {
        this.unusedTags.push(this.tagStore.tags[i])
      }
    }
  }

  async removeUnused(id: string) {
    for (let i = 0; i < this.unusedTags.length; i++) {
      if (this.unusedTags[i].id === id) {
        this.unusedTags.splice(i, 1);
      }
    }
    // this.unusedTags.sort()
  }
}
</script>

<style scoped>
.post-container {
  background: #363535;
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: block;
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

.new-post-title {
  color: #888686;
  margin: 1rem 1rem 0rem 0rem;
  font-size: 1.5rem;
  padding: 1rem 1rem 0.5rem 1rem;
  /*padding-bottom: 0.3rem;*/
  background: #3a3939;
  border-color: transparent;
  border-radius: 0.6rem;
  border-image: fill;
  width: 100%;
}

.new-post-title-container {
  flex-grow: 8;
  color: #888686;
  /*padding-bottom: 0.3rem;*/
  border-color: transparent;
  border-radius: 0.6rem;
  border-image: fill;
  width: 90%;
}

.new-post-explanation {
  color: #888686;
  margin: 1rem 1rem 0rem 0rem;
  font-size: 1.5rem;
  padding: 1rem 1rem 0.5rem 1rem;
  /*padding-bottom: 0.3rem;*/
  background: #3a3939;
  border-color: transparent;
  border-radius: 0.6rem;
  border-image: fill;
  width: 100%;
  min-height: 20rem;
  resize: vertical;
}

.new-post-tags-container {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  padding-right: 5%;
  width: 80%;
  min-height: 2rem;
  background: #3a3939;
  border: 1px transparent;
  border-radius: 0.6rem;
}

.post-tag {
  color: #949191;
  border: 1px solid #676f88;
}
</style>