import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { trigger, style, animate, transition } from '@angular/animations';

import { Observable } from 'rxjs/Observable';
import { Post } from './post';
import { PostService } from './post.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  animations: [
    trigger('changeAnimateMe', [
      transition('* <=> *', [
        style({opacity: 0}), animate(1500)
      ])
    ])
  ]
})
export class PostComponent implements OnInit, OnDestroy {
  post$: Observable<Post>;
  posts$: Observable<Post[]>;
  postsLength: number;

  postsSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private postService: PostService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.postService.loadAllPosts(+params.get('id'));
    });
    this.postsSubscription = this.posts$.subscribe(posts => {
          this.postsLength = posts.length;
    });
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
