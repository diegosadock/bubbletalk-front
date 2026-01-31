import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './componentes/homepage/homepage.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { CreateBubbleComponent } from './componentes/create-bubble/create-bubble.component';
import { GeneralProfileComponent } from './componentes/general-profile/general-profile.component';
import { BubbleProfileComponent } from './componentes/bubble-profile/bubble-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    CreateBubbleComponent,
    GeneralProfileComponent,
    BubbleProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
