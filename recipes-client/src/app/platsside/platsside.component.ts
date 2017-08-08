import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Plats } from '../plats';
import { Recettes } from '../recettes';

import { PlatsService } from '../plats.service' ;


@Component({
  selector: 'platsside',
  templateUrl: './platsside.component.html',
  styleUrls: ['./platsside.component.css'],
  providers: [PlatsService]
})

export class PlatssideComponent implements OnInit {

    plats: Plats[];
    selectedPlat: Plats;
    selectedRecette: Recettes;
    recettes: Recettes[];
    recettePath: string;

    constructor(
        private platsService: PlatsService,
    ) {}

    onSelectPlat(plat: Plats): void {
        this.selectedPlat = plat;
        this.platsService.getRecettes(plat).then(recettes => this.recettes = recettes);
    }

    onSelectRecette(recette: Recettes): void {
        this.selectedRecette = recette;
        this.recettePath = "../public/mongodb/" + this.selectedPlat.name + "/" + this.selectedRecette[0] + ".pdf";
    }

    getPlats(): void {
        this.platsService.getPlats().then(plats => this.plats = plats);
    }

  public platsCollapsed:boolean = true;

  public collapsed(event:any):void {
    console.log(event);
  }

  public expanded(event:any):void {
    console.log(event);
  }

  ngOnInit():void {
      this.getPlats();
  }
}
