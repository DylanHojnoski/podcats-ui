import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/post';
import { AppState } from 'src/app/state/app.state';
import { addToQueue, setPlaying } from 'src/app/state/playing/playing.action';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  @Input() post: Post = {};
  descriptionActive: boolean = false;
  hours: string = "";
  minutes: string = "";

  public constructor(private store: Store<AppState>) { }

  toggleDescription() {
    this.descriptionActive = !this.descriptionActive;
  }

  play(post: Post) {
    this.store.dispatch(setPlaying({playing: post }));
  }

  addToQueue(post: Post) {
    this.store.dispatch(addToQueue({ post: post }));
  }

}
