import { Component, OnInit } from '@angular/core';

import { Plats } from '../plats';
import { Recettes } from '../recettes';
import { PlatsService } from '../plats.service';

@Component({
  selector: 'app-newrecette',
  templateUrl: './newrecette.component.html',
  styleUrls: ['./newrecette.component.css'],
  providers: [PlatsService]
})

export class NewrecetteComponent implements OnInit {
    public platSelected: boolean;
    public recetteSelected: boolean;
    public newPlat: Plats;
    public newRecette: Recettes;

    constructor(
        private platsService: PlatsService,
    ) {}

    createPlat(plat: Plats): void {
      this.platsService.createPlat(plat).then();
    }

    createRecette(recette: Recettes): void {
        this.platsService.createRecette(recette).then();
    }

    ngOnInit() {
        this.platSelected = false;
        this.recetteSelected = false;
    }

}
