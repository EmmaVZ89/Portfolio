import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [AppComponent, InicioComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    LayoutModule,
    MatNativeDateModule,
    MatGridListModule,
    MatTabsModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}