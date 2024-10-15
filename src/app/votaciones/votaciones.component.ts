import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {thumbsUpOutline, thumbsDownOutline, addCircleOutline} from "ionicons/icons";
import {FooterComponent} from "../footer/footer.component";

@Component({
    selector: 'app-votaciones',
    templateUrl: './votaciones.component.html',
    styleUrls: ['./votaciones.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        FooterComponent
    ]
})
export class VotacionesComponent  implements OnInit {

  constructor() {
    addIcons({thumbsUpOutline, thumbsDownOutline, addCircleOutline})
  }

  ngOnInit() {}

}
