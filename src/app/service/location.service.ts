import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private _url=`https://zbusmaster.herokuapp.com/`
  constructor(private http:HttpClient) { }

  getlocation(){
  return this.http.get<any>(this._url);
  }
  postlocation(data:any){
    return this.http.post(this._url,data)
  }
}
