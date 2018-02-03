import { Router } from '@angular/router';
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


  constructor(private router: Router,
              private postService: PostService,
              private dateService: DateService) { }

  refresh() {
    // this.postService.posts.subscribe(posts => {
    //   this.dateService.getMonthYearGroups(posts);
    // });
    this.router.navigate(['home']);
  }



}
