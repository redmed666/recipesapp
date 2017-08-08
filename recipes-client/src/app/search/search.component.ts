import { Component, OnInit } from '@angular/core';
import { PlatsService } from '../plats.service';
import { Plats } from '../plats';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [PlatsService]
})

export class SearchComponent implements OnInit {

    plats: Plats[];

    constructor(
      private platsService: PlatsService,
    ) {}

    ngOnInit() {
        this.platsService.getPlats().then(plats => this.plats = plats);
    }

}
