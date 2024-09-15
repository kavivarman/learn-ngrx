import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IPosts } from '../state/posts.state';
import { ActivatedRoute, Router } from '@angular/router';
import { getPostById } from '../state/posts.selector';
import { updatePost } from '../state/posts.action';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent {
  postForm: FormGroup;
  id: string;
  constructor(private _store: Store<IPosts>, private _route: ActivatedRoute, private _router: Router) {

  }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id') as string;
    this._store.select(getPostById(this.id)).subscribe(post => {
      this.postForm = new FormGroup({
        id: new FormControl(post?.id,),
        title: new FormControl(post?.title, [Validators.required, Validators.minLength(2)]),
        description: new FormControl(post?.description, [Validators.required, Validators.minLength(5)])
      })
    });
  }

  OnUpdatePost() {
    const posts: IPosts = {
      id: this.postForm.value.id,
      title: this.postForm.value.title,
      description: this.postForm.value.description
    };
    this._store.dispatch(updatePost({ posts }));
    this._router.navigate(['/post']);
  }

  OnCancel() {
    this._router.navigate(['/post']);
  }

  errorDescription() {

  }
}
