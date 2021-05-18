import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'welcome to tech quotes';
  quotes:Quotes [] = [
    new Quotes (1,'Jack','Winner never give up','The struggle must continue','Gallant Man', new Date(2020,6,28),0,0),
    new Quotes (2,'Nancy','farmer','Make hay while sun shines.','Brender Rogers',new Date(2012,5,12),0,0),
    new Quotes(3,'Fun','The great myth','The great myth of our times is that technology is communication.','Libby Larsen',new Date(2019,6,3),0,0),
    new Quotes(4,'Vila','Communication','Communications tools don’t get socially interesting until they get technologically boring.','Clay Shirky',new Date(2019,7,7),0,0),
    new Quotes (5,'Harry','marriage life','Programs must be written for people to read, ........','Kella ROll',new Date(2019,7,17),0,0),
    new Quotes(6,'Adiola','Spiritual life','For a list of all the ways technology has failed to improve the quality of life, please press three.','Alice Kahn',new Date(2019,7,15),0,0)
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
