import { Component } from "@angular/core";
import { GifsService } from "../../../gifs/services/gifs.service";
import { NgFor } from "@angular/common";

@Component({
    selector:'app-shared-sidebar',
    imports:[NgFor],
    templateUrl:'./sidebar.component.html',
    styleUrls:['./sidebar.component.scss']
})
export class SidebarComponent{

    constructor(private gifsService:GifsService){

    }
    get tags():string[]{
        return this.gifsService.TagsHistory;
    }
}