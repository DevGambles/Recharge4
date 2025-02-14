import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'
@Component({
  selector: 'app-trip-completed',
  templateUrl: './trip-completed.page.html',
  styleUrls: ['./trip-completed.page.scss'],
})
export class TripCompletedPage implements OnInit {
  ratingIcon1 = false;
  ratingIcon2 = false;
  ratingIcon3 = false;
  ratingIcon4 = false;
  ratingIcon5 = false;
  constructor(private navCtrl: NavController) { }
  ngOnInit() {
  }


  toggleRatingIcon1() {
    this.ratingIcon1 = !this.ratingIcon1;
  }
  toggleRatingIcon2() {
    this.ratingIcon2 = !this.ratingIcon2;
  }
  toggleRatingIcon3() {
    this.ratingIcon3 = !this.ratingIcon3;
  }
  toggleRatingIcon4() {
    this.ratingIcon4 = !this.ratingIcon4;
  }
  toggleRatingIcon5() {
    this.ratingIcon5 = !this.ratingIcon5;
  }


  tabs() {
    this.navCtrl.navigateRoot(['./tabs']);
  }
}
