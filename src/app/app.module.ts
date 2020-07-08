
import { TimeCountPipe } from './time-count.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearcFormComponent } from './searc-form/searc-form/searc-form.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { DateCountPipe } from './date-count.pipe';
import { HighlightDirective } from './highlight.directive';

import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';



@NgModule({
  declarations: [
    AppComponent,
    SearcFormComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    DateCountPipe,
    HighlightDirective,
    TimeCountPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
