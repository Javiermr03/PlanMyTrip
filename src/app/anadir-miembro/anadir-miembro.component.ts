import { Component, OnInit } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-anadir-miembro',
    templateUrl: './anadir-miembro.component.html',
    styleUrls: ['./anadir-miembro.component.scss'],
    standalone: true,
  imports: [
    FooterComponent,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ]
})
export class AnadirMiembroComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
