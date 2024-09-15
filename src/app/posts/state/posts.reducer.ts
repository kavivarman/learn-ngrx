import { createReducer, on } from "@ngrx/store"
import { IPosts, initialState } from "./posts.state"
import { addPost, updatePost } from "./posts.action";
import { state } from "@angular/animations";
import { map, pipe } from 'rxjs';

const _postsReducer = createReducer(initialState, on(addPost, (state, action) => {
    let post = { ...action.posts };
    post.id = (state.posts.length + 1).toString();

    return {
        ...state,
        posts: [...state.posts, post]
    }
}), on(updatePost, (state, action) => {
    let posts = [...state.posts ];
    posts.map((item, i) => {
        if (item.id === action.posts.id) {
            posts[i] = action.posts
        }
    });
    return {
        ...state,
        posts: posts
    }
}));

export function postsReducer(state: any, action: any) {
    return _postsReducer(state, action)
}