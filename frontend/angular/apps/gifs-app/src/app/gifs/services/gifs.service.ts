import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({ providedIn: 'root' })

export class GifsService {

    private _tagsHistory: string[] = [];

    private API_KEY:string ="DlyhUudrpjVFrMFoZ0y7GISYkLk0ABt5";

    private BASE_URL:string= 'http://api.giphy.com/v1/gifs';

    constructor(private httpClient: HttpClient) { }

    get TagsHistory(): string[] {
        return [...this._tagsHistory];
    }

    private organizeHistory(tag: string): void {
        tag = tag.toLowerCase();
        if (this._tagsHistory.includes(tag)) {
            this._tagsHistory = this._tagsHistory.filter((olTag) => olTag !== tag);
        }
        this._tagsHistory.unshift(tag);
        this._tagsHistory = this.TagsHistory.splice(0,10);
    }

    searchTag(tag: string): void {
        if (tag.length === 0) return;
        
        this.organizeHistory(tag);

        const params = new HttpParams();

        params.set('api_key', this.API_KEY);
        params.set('limit', 10);
        params.set('q', tag);
        this.httpClient.get(`${this.BASE_URL}/search`, {params, responseType:'json'})
        .subscribe(console.log)
        /*fetch('http://api.giphy.com/v1/gifs/search?q=ryan gosling&api_key=DlyhUudrpjVFrMFoZ0y7GISYkLk0ABt5&limnit=10')
        .then(resp=> resp.json())
        .then(console.log)*/

       // this._tagsHistory.unshift(tag);
    }

}