import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { PostListComponent } from "./post-list/post-list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { postsReducer } from "./state/posts.reducer";

const routes: Route[] = [
    {
        path: '', component: PostListComponent,
        children: [
            { path: 'addPost', component: AddPostComponent },
            { path: 'editPost/:id', component: EditPostComponent }
        ]
    }
]
@NgModule({
    declarations: [PostListComponent, AddPostComponent, EditPostComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes), StoreModule.forFeature('posts', postsReducer)]
})

export class PostModule {

}