import { Injectable } from '@angular/core';
import { Post } from '../post/post';

@Injectable()
export class DateService {
  private _monthYear: string[];
  private _showAll = false;

  get monthYear(): string[] {
    return this._monthYear;
  }

  get showAll(): boolean {
    return this._showAll;
  }

  getMonthYearGroups(posts: Post[]): void {
    const newPosts = posts.map(post => post.monthYear);
    const newArray: string[] = [];
    newPosts.map((current) => {
      if (newArray.findIndex(d => d === current) === -1) {
        newArray.push(current);
      }
    });
    this._monthYear = newArray;
    this._showAll = false;
  }

  filter2MonthYear(monthYear: string): void {
    this._monthYear = [monthYear];
    this._showAll = true;
  }

}
