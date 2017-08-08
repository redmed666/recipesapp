// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// 3rd party imports
import { CollapseModule } from 'ng2-bootstrap';
import { TabsModule } from 'ng2-bootstrap';
import { AlertModule } from 'ng2-bootstrap';

// Internal imports
import { AppComponent } from './app.component';
import { PlatssideComponent } from './platsside/platsside.component';
import { RecettessideComponent } from './recettesside/recettesside.component';
import { RecettemainComponent } from './recettemain/recettemain.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './approuting/approuting.module';

import { PlatsService } from './plats.service';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlatssideComponent,
    RecettessideComponent,
    RecettemainComponent,
    HeaderComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    HttpModule
  ],
  providers: [PlatsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
