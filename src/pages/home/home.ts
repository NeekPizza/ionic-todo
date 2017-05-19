import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = ['Feed the cat', 'Cook Lunch', 'Shop for clothes']
  item = ""
  removeItem = ""

  constructor(
    public navCtrl: NavController,
    public alertCtrol: AlertController) {

  }

  addItem(item){
    if(item.length > 0 ){
      return this.items.push(item);
    }
    let alert = this.alertCtrol.create({
      title: "Nothing to add",
      buttons: ['OK']
    })
    alert.present();
  }

  remove(index){
    this.items.splice(index, 1);
  }



}
