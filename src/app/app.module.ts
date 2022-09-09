import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientComponent } from './client/client.component';
import { AddClientFormComponent } from './client/add-client-form/add-client-form.component';
import { ClientActionsComponent } from './client/client-actions/client-actions.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientComponent,
    AddClientFormComponent,
    ClientActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
