import { Component, Input } from "@angular/core";
import { Gif } from "../../models/giphy-response.model";

@Component({
    selector: 'gifs-card-list',
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
    @Input('gifList') gifList: Gif[] = [];
}