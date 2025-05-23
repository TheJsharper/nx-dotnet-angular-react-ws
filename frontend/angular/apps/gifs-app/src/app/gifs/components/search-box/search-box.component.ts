import { Component, ViewChild, ElementRef } from "@angular/core";
import { GifsService } from "../../services/gifs.service";

@Component({
    selector:'app-gifs-search-box',
    template:`
    <h5> Search: </h5>
    <input type="text"
            class="form-control"
            placeholder="Search gifs....."
            (keyup.enter)="searchTag()"
            #txtTagInput
     >
    `

})
export class SearchBoxComponent{
@ViewChild('txtTagInput') public tagInput!:ElementRef<HTMLInputElement>;

constructor(private gifsService:GifsService){

}
    searchTag():void{
        const newTag = this.tagInput.nativeElement.value;
        this.gifsService.searchTag(newTag);
        console.log("===>x", newTag);   
        this.tagInput.nativeElement.value = ''; 
    }
}