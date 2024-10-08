import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {movilComponent} from "./movil/movil.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {GruposComponent} from "./grupos/grupos.component";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, movilComponent, NavbarComponent, FooterComponent, GruposComponent],
})
export class AppComponent {
  constructor() {}
}
