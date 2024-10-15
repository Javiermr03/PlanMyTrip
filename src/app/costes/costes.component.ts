import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FooterComponent} from "../footer/footer.component";

@Component({
    selector: 'app-costes',
    templateUrl: './costes.component.html',
    styleUrls: ['./costes.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        FooterComponent
    ]
})
export class CostesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
