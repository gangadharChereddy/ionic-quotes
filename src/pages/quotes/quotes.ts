import { QuotesService } from './../../services/quotes';

import { Quote } from './../../data/quote.interface';
import { Component,OnInit } from '@angular/core';
import { NavParams,AlertController } from 'ionic-angular';



@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  
  quoteGroup : {category :string, quotes : Quote[], icon :string};
  
constructor(private navParams:NavParams, private alertCtrl : AlertController,
private quotesService: QuotesService ){}

ngOnInit(){
  this.quoteGroup=this.navParams.data;
}

//ionViewDidLoad(){
 // this.quoteGroup=this.navParams.data;
//{{quoteGroup?.category | uppercase}} use elvis operator for optional 
//bcoz template loads befor this method executes
//}

onAddToFavourites(selectedQuote : Quote){
const alert=this.alertCtrl.create({
  title : 'Add Quote',
  subTitle : 'Are you sure?',
  message : 'Are you sure you want to add the quote?',
  buttons : [{
    text : 'Yes, Go Ahead',
    handler: ()=>{
     this.quotesService.addQuoteToFavourites(selectedQuote);
    }
  },
{
  text : 'No, I changed my mind',
  role : 'cancel',
  handler: ()=>{
    console.log("cancel");
  }
}]
});
alert.present();
}

onRemoveFromFavourites(quote : Quote){
  this.quotesService.removeQuoteFromFavourites(quote);
}

isFavourite(quote :Quote){
  return this.quotesService.isQuoteFavourite(quote);
}

}
