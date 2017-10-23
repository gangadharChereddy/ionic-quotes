import { SettingsService } from './../../services/settings';
import { QuotePage } from './../quote/quote';
import { QuotesService } from './../../services/quotes';
import { Quote } from './../../data/quote.interface';
import { Component } from '@angular/core';
import { ModalController} from 'ionic-angular'
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {

 quotes :  Quote[];
  constructor(private quotesService : QuotesService,
  private modalCtrl:ModalController,
  private settingsService:SettingsService
  ){}

  //ngOnInit(){
  //  console.log("in page")
  //  this.quotes=this.quotesService.getFavouriteQuotes();
  //  console.log("after service"+this.quotes)
  //}

  ionViewWillEnter(){
    this.quotes=this.quotesService.getFavouriteQuotes();
  }

  onViewQuote(quote : Quote){
    const modal=this.modalCtrl.create(QuotePage,quote);
    modal.present();
    modal.onDidDismiss((remove :boolean) =>{
      if(remove){
        this.onRemoveFromFavouries(quote);
      }
    });
  }

  onRemoveFromFavouries(quote : Quote){
    this.quotesService.removeQuoteFromFavourites(quote);
    const position= this.quotes.findIndex((quoteEl : Quote)=>{
      return quoteEl.id == quote.id;
   });
   this.quotes.splice(position,1);
  }

  getBackground(){
    return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }

  
}
