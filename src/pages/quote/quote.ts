import { Component } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing';

import { ViewController,NavParams} from 'ionic-angular';


@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  person :string;
  text:string;
  
constructor(private viewCtrl:ViewController,
private navParams: NavParams,
private socialSharing: SocialSharing
){}
onClose(remove =false){
this.viewCtrl.dismiss(remove);
}

onShareToWhatsapp(){
  this.socialSharing.shareViaWhatsApp(this.text).then(() => {
    console.log('success');
  }).catch((error) => {
    console.log(error);
  });
}
ionViewDidLoad(){
  this.person=this.navParams.get('person');
  this.text=this.navParams.get('text');
}
  
}
