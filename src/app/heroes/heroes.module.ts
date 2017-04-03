import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {HeroesComponent} from "./heroes.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./hero.service";
import {FormsModule} from "@angular/forms";
import {HeroesRoutingModule} from "./heroes-routing.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HeroesRoutingModule
    ],
    exports: [],
    declarations: [
        HeroesComponent,
        DashboardComponent,
        HeroDetailComponent
    ],
    providers: [ HeroService ],
})
export class HeroesModule { }
