import { Component } from '@angular/core';

import { addIcons } from 'ionicons';
import { library, playCircle, radio, search } from 'ionicons/icons';
import {IonicModule} from "@ionic/angular";
import {NavbarComponent} from "../navbar/navbar.component";
import {GruposComponent} from "../grupos/grupos.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-movil',
  templateUrl: './movil.component.html',
  styleUrls: ['./movil.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    NavbarComponent,
    GruposComponent,
    FooterComponent
  ]
})
export class movilComponent {
  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ library, playCircle, radio, search });
  }
}
