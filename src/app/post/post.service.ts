import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './post';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

class PostJSON {
  constructor(public id: number, public title: string, public date: string) { }
}

interface PostJSONResponse {
posts: PostJSON[];
}

@Injectable()
export class PostService {

  private _posts: BehaviorSubject<Post[]>;
  private _currentPost: BehaviorSubject<Post>;
  private _dataStore: {
    posts: Post[],
    currentPost: Post
  };

  constructor(private http: HttpClient) {
    this._posts = <BehaviorSubject<Post[]>>new BehaviorSubject([]);
    this._currentPost = <BehaviorSubject<Post>>new BehaviorSubject(null);
    this._dataStore = {
      posts: [],
      currentPost: null
    };
  }

  get posts(): Observable<Post[]> {
    return this._posts.asObservable();
  }

  get currentPost(): Observable<Post> {
    return this._currentPost.asObservable();
  }

  loadAllPosts(id = 0) {
    this.http.get<PostJSONResponse>('./assets/data/posts.json')
             .map(response => response.posts
             .map(post => new Post(post.id, post.title, post.date))
             .sort((a, b) => +b.date - +a.date))
             .subscribe(data => {
               this._dataStore.posts = data;
               this._dataStore.currentPost = this._dataStore.posts.find(p => p.id === id);
               this._posts.next(Object.assign({}, this._dataStore).posts);
               this._currentPost.next(Object.assign({}, this._dataStore).currentPost);
             });
  }

}
