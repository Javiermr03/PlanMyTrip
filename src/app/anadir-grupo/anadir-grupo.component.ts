import { Component, OnInit } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {IonicModule} from "@ionic/angular";
import {RouterLink} from "@angular/router";
import {addIcons} from "ionicons";
import {cloudUploadOutline} from "ionicons/icons";

@Component({
    selector: 'app-anadir-grupo',
    templateUrl: './anadir-grupo.component.html',
    styleUrls: ['./anadir-grupo.component.scss'],
    standalone: true,
    imports: [
        FooterComponent,
        IonicModule,
        RouterLink
    ]
})
export class AnadirGrupoComponent  implements OnInit {

  constructor() {
    addIcons({cloudUploadOutline})
  }

  ngOnInit() {}

}
