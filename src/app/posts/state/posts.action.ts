import { createAction, props } from "@ngrx/store";
import { IPosts } from "./posts.state";

export const addPost = createAction('AddPost', props<{ posts: IPosts }>());
export const updatePost = createAction('updatePost', props<{ posts: IPosts }>());
export const onEdit = createAction('editPost', props<{ id: number }>());