import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {bicycleOutline} from "ionicons/icons";

@Component({
    selector: 'app-actividades',
    templateUrl: './actividades.component.html',
    styleUrls: ['./actividades.component.scss'],
    standalone: true,
    imports: [
        IonicModule
    ]
})
export class ActividadesComponent  implements OnInit {

  constructor() {
    addIcons({bicycleOutline})
  }

  ngOnInit() {}

}
