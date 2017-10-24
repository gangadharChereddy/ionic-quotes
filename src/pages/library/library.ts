import { QuotesPage } from './../quotes/quotes';
import { Quote } from './../../data/quote.interface';
import { Component,OnInit } from '@angular/core';
import  quotes from './../../data/quotes';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
quotesPage=QuotesPage;

constructor(public afd: AngularFireDatabase){}

quoteCollection : {category :string, quotes : Quote[], icon :string}[];

ngOnInit(){

  this.afd.app.database().ref('/quotesData/').once('value', snapshot => {
    console.log(snapshot.val());
    console.log(snapshot.toJSON());
    this.quoteCollection= snapshot.val();
   
  });
}

}
