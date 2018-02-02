import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-navigation',
  templateUrl: './post-navigation.component.html',
  styleUrls: ['./post-navigation.component.css']
})
export class PostNavigationComponent implements OnInit {
  @Input() postIDInput: number;
  @Input() numberPosts: number;

  postID: number;
  nextPostID: number;
  previousPostID: number;

  ngOnInit() {
    this.postID = this.postIDInput;
    this.calculateNextPreviousPostIDs();
  }

  calculateNextPreviousPostIDs() {
    this.nextPostID = ((this.postID + 1) > this.numberPosts ? this.postID : this.postID + 1);
    this.previousPostID = (( this.postID - 1) < 0 ? this.postID : this.postID - 1);
  }

  onNext() {
    this.postID++;
    this.postID = this.postID > this.numberPosts ? this.numberPosts : this.postID;
    this.calculateNextPreviousPostIDs();
  }

  onPrevious() {
    this.postID = this.postID - 1 < 1 ? 1 : this.postID - 1;
    this.calculateNextPreviousPostIDs();

  }

}
