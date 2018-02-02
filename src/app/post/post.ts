export class Post {
  date: Date;
  monthYear: string;

  constructor(public id: number, public title: string, public dateString: string) {
    this.date = new Date(dateString);
    this.monthYear = `
                      ${this.getFullMonthName(this.date.getMonth())}
                      ${this.date.getFullYear().toString()}
    `;
  }



  getFullMonthName(month: number): string {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                        'August', 'September', 'October', 'November', 'December'];
    return monthNames[month];
  }



}
