import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../forms/question/question.service";

@Component({
    selector: 'example',
    templateUrl: 'example.component.html',
    providers:  [QuestionService]
})
export class ExampleComponent implements OnInit {
    questions: any[];
    constructor(service: QuestionService) {
        this.questions = service.getQuestions();
    }

    ngOnInit() { }

}