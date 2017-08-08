import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlatssideComponent } from '../platsside/platsside.component';
import { RecettessideComponent } from '../recettesside/recettesside.component';

const routes: Routes = [
        { path: '', redirectTo: '/', pathMatch: 'full' },
        { path: ':plat', component: PlatssideComponent },
        { path: ':plat/:recette', component: RecettessideComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class RoutingModule {}
