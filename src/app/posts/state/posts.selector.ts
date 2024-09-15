import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IPosts, IPostsState } from "./posts.state";


export const postsSelector = createFeatureSelector<IPostsState>('posts');

export const getPost = createSelector(postsSelector, (post) => {
    return post.posts;
});

export const getPostById = (id: string) => createSelector(postsSelector, (post) => {
    return post.posts.find(data => {
        return data.id == id
    })
});