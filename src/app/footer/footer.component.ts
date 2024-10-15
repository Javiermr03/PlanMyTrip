import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {
  arrowBackOutline,
  peopleOutline,
  bicycleOutline,
  checkmarkDoneOutline,
  cashOutline,
  homeOutline
} from "ionicons/icons";
import {RouterModule} from "@angular/router";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports: [
        IonicModule, RouterModule
    ]
})
export class FooterComponent  implements OnInit {

  constructor() {
    addIcons({homeOutline, arrowBackOutline, bicycleOutline, checkmarkDoneOutline, cashOutline})
  }

  ngOnInit() {}

}
