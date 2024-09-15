import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPosts } from '../state/posts.state';
import { Store } from '@ngrx/store';
import { addPost } from '../state/posts.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {

  postForm: FormGroup;
  constructor(private store: Store<IPosts>, private _router: Router) {
    this.initializeForm();
  }

  ngOnInit() {
  }

  initializeForm() {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(5)])
    });
  }

  OnAddPost() {
    const post: IPosts = {
      description: this.postForm.value.description,
      title: this.postForm.value.title
    }
    this.store.dispatch(addPost({ posts: post }));
    this.initializeForm();
  }

  errorDescription(): any {
    const formDescription = this.postForm.get('description');
    if (formDescription?.touched && formDescription.errors) {
      if (formDescription.hasError('required')) {
        return 'Description is required.';
      }
      else if (formDescription.hasError('minlength')) {
        return "Description should be minimum of 5 characters";
      }
      return false;
    }
  }

  onCancel(){
    this._router.navigate(['/post']);
  }
}
