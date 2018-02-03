import { DateService } from './../shared/date.service';
import { PostService } from './../post/post.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';

import { Post } from '../post/post';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('dateChangeAnimation', [
      transition('* <=> *', [
        style({ opacity: 0}), animate(2000)
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private router: Router,
              private postService: PostService,
              public dateService: DateService) { }

  ngOnInit() {
    this.posts$ = this.postService.posts;
    this.postService.loadAllPosts();
    this.posts$.subscribe(posts => {
      this.dateService.getMonthYearGroups(posts);
    });
  }

  gotoPost(post: Post): void {
    this.router.navigate(['/post', post.id]);
  }

  showAllPosts() {
    this.posts$.subscribe(posts => {
        this.dateService.getMonthYearGroups(posts);
    });
  }

}
