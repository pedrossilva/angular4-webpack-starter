import {CommonModule} from "@angular/common";
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';
import {DynamicFormComponent}           from "./example/dynamic-form.component";
import {DynamicFormQuestionComponent}   from "./question/dynamic-form-question.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        DynamicFormComponent,
        DynamicFormQuestionComponent
    ],
    exports: [
        DynamicFormComponent,
        DynamicFormQuestionComponent
    ]
})
export class DynamicFormModule {
    constructor() {
    }
}