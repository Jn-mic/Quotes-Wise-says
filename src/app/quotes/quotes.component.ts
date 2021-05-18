import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'Karibu to Quotes baze';
  quotes:Quotes [] = [
    new Quotes (1,'Jack','Winner never give up','The struggle must continue','Gallant Man', new Date(2020,6,28),0,0),
    new Quotes (2,'Nancy','farmer','Make hay while sun shines.','Brender Rogers',new Date(2012,5,10),0,0),
    new Quotes(3,'Fun','Fun Dog','Dogs do have leisure too','Jimmy Carter',new Date(2012,6,3),0,0),
    new Quotes(4,'Vila','Learning','we live to learn each day','Marie Rose',new Date(2005,4,8),0,0),
    new Quotes (5,'Harry','marriage life','Learning never stop','Kelly ROlland',new Date(2019,2,30),0,0),
    new Quotes(6,'Abu','Spiritual life','Keep prayers and work','vera sidika',new Date(2021,5,6),0,0)
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote:any){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  displayInformation(index:any){
    this.quotes[index].showInfo= !this.quotes[index].showInfo;
  }
  Readquote(isRead:any, index:any){
    if (isRead) {
      this.quotes.splice(index,1);
    }
  }
  quoteDelete(isRead: any, index: number){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo(index: any){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() { }

  ngOnInit() {
  }

}
