import { Component, Input } from "@angular/core";
import { Gif } from "../../models/giphy-response.model";


@Component({
    selector: 'app-gifs-card-list',
    imports: [],
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
    @Input() gifList: Gif[] = [];
}