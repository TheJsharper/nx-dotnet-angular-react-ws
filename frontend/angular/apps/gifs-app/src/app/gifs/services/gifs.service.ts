import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Gif, GiphyResponse } from "../models/giphy-response.model";


@Injectable()

export class GifsService {

    private _tagsHistory: string[] = [];

    private API_KEY= "DlyhUudrpjVFrMFoZ0y7GISYkLk0ABt5";

    private BASE_URL = 'http://api.giphy.com/v1/gifs';


    public gifList: Gif[] = [];

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
        this._tagsHistory = this.TagsHistory.splice(0, 10);
    }

    searchTag(tag: string): void {
        if (tag.length === 0) return;

        this.organizeHistory(tag);

        const params = new HttpParams()
            .set('api_key', this.API_KEY)
            .set('limit', 10)
            .set('q', tag);

        this.httpClient.get<GiphyResponse>(`${this.BASE_URL}/search`, { params, responseType: 'json' })
            .subscribe((value: GiphyResponse) => {
                this.gifList = value.data;
            })
        /*   fetch('http://api.giphy.com/v1/gifs/search?q=ryan gosling&api_key=DlyhUudrpjVFrMFoZ0y7GISYkLk0ABt5&limnit=10')
          .then(resp=> resp.json())
          .then(console.log)*/

        // this._tagsHistory.unshift(tag);
    }

}