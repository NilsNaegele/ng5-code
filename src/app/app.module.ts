import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { PostModule } from './post/post.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmailComponent } from './email/email.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { DateService } from './shared/date.service';
import { PostService } from './post/post.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PostModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [ PostService, DateService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
