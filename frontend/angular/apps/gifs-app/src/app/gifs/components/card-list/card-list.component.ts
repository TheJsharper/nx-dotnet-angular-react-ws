import { Component, Input } from "@angular/core";
import { Gif } from "../../models/giphy-response.model";
import { NgFor } from "@angular/common";

@Component({
    selector: 'app-gifs-card-list',
    imports: [NgFor],
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
    @Input() gifList: Gif[] = [];
}