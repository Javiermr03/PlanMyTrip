import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
    selector: 'app-grupo-fubol',
    templateUrl: './grupo-fubol.component.html',
    styleUrls: ['./grupo-fubol.component.scss'],
    standalone: true,
    imports: [
        IonicModule
    ]
})
export class GrupoFubolComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
