import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { PostComponent } from './post.component';
import { PostNavigationComponent } from './post-navigation/post-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [ PostComponent, PostNavigationComponent ]
})
export class PostModule { }
