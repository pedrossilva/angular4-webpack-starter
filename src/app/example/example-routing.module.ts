import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExampleComponent} from "./example.ccomponent";

const routes: Routes = [
  { path: '', component: ExampleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleRoutingModule { }

export const routedComponents = [ExampleComponent];