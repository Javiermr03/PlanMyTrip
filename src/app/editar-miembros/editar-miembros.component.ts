import { Component, OnInit } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {IonicModule} from "@ionic/angular";
import {RouterLink} from "@angular/router";
import {addIcons} from "ionicons";
import {
  addCircleOutline,
  arrowBackOutline,
  closeCircleOutline,
  createOutline,
  personCircleOutline
} from "ionicons/icons";

@Component({
    selector: 'app-editar-miembros',
    templateUrl: './editar-miembros.component.html',
    styleUrls: ['./editar-miembros.component.scss'],
    standalone: true,
    imports: [
        FooterComponent,
        IonicModule,
        RouterLink
    ]
})
export class EditarMiembrosComponent  implements OnInit {

  constructor() {
    addIcons({personCircleOutline, addCircleOutline, createOutline, arrowBackOutline, closeCircleOutline})
  }

  ngOnInit() {}

}
