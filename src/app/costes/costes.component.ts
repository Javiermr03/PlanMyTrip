import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
    selector: 'app-costes',
    templateUrl: './costes.component.html',
    styleUrls: ['./costes.component.scss'],
    standalone: true,
    imports: [
        IonicModule
    ]
})
export class CostesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
