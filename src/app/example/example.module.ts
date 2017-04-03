import { NgModule } from '@angular/core';
import {ExampleComponent} from "./example.ccomponent";
import {CommonModule} from "@angular/common";
import {DynamicFormModule} from "../forms/dynamic-form.module";
import {ExampleRoutingModule} from "./example-routing.module";


@NgModule({
    imports: [
        CommonModule,
        DynamicFormModule,
        ExampleRoutingModule
    ],
    exports: [],
    declarations: [
        ExampleComponent
    ],
    providers: [],
})
export class ExampleModule { }
