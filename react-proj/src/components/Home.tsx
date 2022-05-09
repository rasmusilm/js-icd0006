import React, {useContext, useEffect, useState} from 'react';
import {Post} from "../domain/IPost";
import {PostService} from "../services/PostService";
import {AppContext} from "../state/AppContext";
import {IdentityContext} from "../state/IdentityContext";
import "../style/Feed.css"
import {TagContext} from "../state/TagContext";
import {TagService} from "../services/TagService";
import {Tag} from "../domain/Tag";
import {RatingService} from "../services/RatingService";
import {Rating} from "../domain/Rating";
import {IdentityService} from "../services/IdentityService";

const initialState: Post[] = [];

const TagById = (id: string, tags: Tag[]) => {
    tags = tags.filter(t => t.id == id)
    return tags[0].tagname["en-GB"]
}

const Home = () => {
    const postService = new PostService();
    const tagService = new TagService();
    const ratingService = new RatingService();
    const [posts, setPosts] = useState(initialState);
    const rate = async (id: string, grade: number) => {
      let rating: Rating = {ProjectIdeaId: id, Rating: grade, UserId: id};
        console.log(rating)
      let res = await ratingService.add(rating, identityState);
      if (res.status == 401) {
          let refresh = await (new IdentityService().refreshIdentity(identityState.jwt!));
          identityState.setJwt(refresh.data!);
          await ratingService.add(rating, identityState);
      }
    }

    let appState = useContext(AppContext);
    let identityState = useContext(IdentityContext);
    let tagState = useContext(TagContext);

    useEffect(() => {
        postService.getAll(identityState).then(data => setPosts(data));
        tagService.getAll(identityState).then(data => tagState.setTags(data));
    }, [])

    return (
        <>
            {/*<div style={{color: "#ffffff"}}>{appState.name}</div>*/}
            {/*<div style={{color: "#ffffff"}}>{identityState.jwt?.token}</div>*/}
            {/*<div style={{color: "#ffffff"}}>{identityState.jwt?.refreshToken}</div>*/}
            <div className="app-page-flex-container">
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
                    {posts.map(post => {
                        return (
                            <div  className="post-container content">
                                <div className="post-title-container">
                                    <span className="post-title post-text">{post.title}</span>
                                </div>
                                <div className="rating-container">
                                  <span>{
                                      [ 1, 2,3,4,5].map(n => {
                                          if(n <= post.rating) {
                                              return (<span className="rating" onClick={() => rate(post.id, n)}>★</span>);
                                          } else {
                                              return (<span className="rating" onClick={() => rate(post.id, n)}>☆</span>);
                                          }
                                      })
                                  }

                                  </span>
                                </div>
                                <div className="under-text">
                                    <span className="post-text post-content">{post.explanation }</span>
                                </div>
                                <div className="tag-container">
                                    {post.tagIds.map(id => {
                                        return (
                                            <span className="post-tag">{ TagById(id, tagState.tags) }</span>
                                        )
                                    })}
                                </div>
                            </div>
                        );
                    })}
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
            </div>
        </>
       )
};

export default Home;
