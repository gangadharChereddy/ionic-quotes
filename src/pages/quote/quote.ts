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
  subject :string = 'This Quote is sharing from the Quotes App. You can download the App from this link';
  url :string='https://drive.google.com/file/d/0B9IGPSNh8ibAUGVVMXV1T01DaUE/view?usp=sharing';
  
constructor(private viewCtrl:ViewController,
private navParams: NavParams,
private socialSharing: SocialSharing
){}
onClose(remove =false){
this.viewCtrl.dismiss(remove);
}

onShareToWhatsapp(){
  this.socialSharing.share(this.text).then(() => {
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
