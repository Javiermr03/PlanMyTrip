import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {addCircleOutline, arrowBackOutline, createOutline, personCircleOutline} from "ionicons/icons";
import {RouterLink} from "@angular/router";
import {FooterComponent} from "../footer/footer.component";

@Component({
    selector: 'app-miembros-futbol',
    templateUrl: './miembros-futbol.component.html',
    styleUrls: ['./miembros-futbol.component.scss'],
    standalone: true,
  imports: [
    IonicModule,
    RouterLink,
    FooterComponent
  ]
})
export class MiembrosFutbolComponent  implements OnInit {

  constructor() {
    addIcons({personCircleOutline, addCircleOutline, createOutline, arrowBackOutline})
  }

  ngOnInit() {}

}
