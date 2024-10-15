import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {createOutline, exitOutline, peopleCircleOutline} from 'ionicons/icons';
import {RouterModule} from "@angular/router";
import {FooterComponent} from "../footer/footer.component";

@Component({
    selector: 'app-grupo-fubol',
    templateUrl: './grupo-fubol.component.html',
    styleUrls: ['./grupo-fubol.component.scss'],
    standalone: true,
  imports: [
    IonicModule, RouterModule, FooterComponent
  ]
})
export class GrupoFubolComponent  implements OnInit {

  constructor() {
    addIcons({peopleCircleOutline, createOutline, exitOutline})
  }

  ngOnInit() {}

}
