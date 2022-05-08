import React, {useEffect, useState} from 'react';
import {Post} from "../domain/IPost";
import {PostService} from "../services/PostService";

const initialState: Post[] = [];

const Home = () => {
    const postService = new PostService();
    const [posts, setPosts] = useState(initialState);

    useEffect(() => {
        postService.getAll().then(data => setPosts(data))
    })

    return (<div className="app-page-flex-container">
        <div className="app-page-content">
            <div className="post-container content">
                <div className="post-title-container">
                    <span className="post-title post-text">Post a new project</span>
                </div>
                <div className="new-post-entry-container">
                    <input type="text" className="new-post-entry" placeholder="Your new idea" />
                    <a href="/newPost" className="new-post-entry-button">
                        To Posting
                    </a>
                </div>
            </div>
            <div  className="post-container content">
                <div className="post-title-container">
                    <span className="post-title post-text">{'{'}{'{'} post.title {'}'}{'}'}</span>
                </div>
                <div className="rating-container">
              <span>
                <span className="rating">★</span>
                <span className="rating">☆</span>
              </span>
                </div>
                <div className="under-text">
                    <span className="post-text post-content">{'{'}{'{'} post.explanation {'}'}{'}'}</span>
                </div>
                <div className="tag-container">
                    <span className="post-tag" v-for="id of post.tagIds">{'{'}{'{'} getTagById(id) {'}'}{'}'}</span>
                </div>
            </div>
        </div>
        <div className="app-page-edge">
            <div className="edge-box">
                <div className="edge-box-button">
                    <a href="/" className="edge-box-link">Feeds</a>
                </div>
                <div className="edge-box-button">
                    <a href="/" className="edge-box-link">feed1</a>
                </div>
                <div className="edge-box-button">
                    <a href="/" className="edge-box-link">feed2</a>
                </div>
            </div>
        </div>
    </div>)
};

export default Home;
