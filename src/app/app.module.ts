import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';

import { AppRoutingModule }     from './app-routing.module';
import {HeroesModule} from "./heroes/heroes.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HeroesModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [ ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
