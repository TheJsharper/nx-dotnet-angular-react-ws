import { Component } from "@angular/core";
import { GifsService } from "../../services/gifs.service";
import { Gif } from "../../models/giphy-response.model";
import { CardListComponent } from "../../components/card-list/card-list.component";
import { SearchBoxComponent } from "../../components/search-box/search-box.component";

@Component({
    selector:'app-gifs-home-page',
    imports: [CardListComponent, SearchBoxComponent],
    templateUrl:'./home-page.component.html',
    styleUrls:['./home-page.component.scss']
})
export class HomePageComponent{

    constructor(private gifsService: GifsService){}

    get gifs():Gif[]{
        return this.gifsService.gifList;
    }
}