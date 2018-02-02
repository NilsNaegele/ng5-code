import { Component } from '@angular/core';
import { DateService } from './../../shared/date.service';
import { PostService } from './../../post/post.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  logo = '../../../assets/images/angular.png';


  constructor(private postService: PostService,
              private dateService: DateService) { }

  refresh() {
    // this.postService.posts.subscribe(posts => {
    //   this.dateService.
    // });
  }



}
