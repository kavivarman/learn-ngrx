import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../app.state';
import { Observable } from 'rxjs';
import { IPosts } from '../state/posts.state';
import { getPost } from '../state/posts.selector';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  posts$: Observable<IPosts[]>;
  constructor(private store: Store<IAppState>, private router: Router) {
  }

  ngOnInit() {
    this.posts$ = this.store.select(getPost);
  }

  onEdit(post: IPosts) {
    this.router.navigate(['post/editPost/' + post.id]);
  }
}
