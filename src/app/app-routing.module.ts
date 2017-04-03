import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroesModule} from "./heroes/heroes.module";
import {ExampleModule} from "./example/example.module";

const routes: Routes = [
  // { path: '', redirectTo: 'heroes', pathMatch: 'full' },
    {
        path: '',
        children: [
            { path: 'heroes', loadChildren : () => HeroesModule },
            { path: 'example', loadChildren : () => ExampleModule },
        ]
    }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
