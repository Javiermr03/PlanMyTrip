import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {addCircleOutline} from "ionicons/icons";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss'],
  standalone: true,
  imports: [
    IonicModule, RouterModule
  ]
})
export class GruposComponent  implements OnInit {

  constructor() {
    addIcons({addCircleOutline});
  }

  ngOnInit() {}

}
