import { Injectable } from '@angular/core';
import { city, cityNames } from '../model/city';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  constructor(private http:HttpClient) { }

  private URL = '../assets/200k.json';
  private CITY_NAMES_URL = '../assets/200knames.json';

  getCities(){
    return this.http.get<city[]>(this.URL).pipe(
      take(1)
    )
  }

  getCityNames(){
    return this.http.get<cityNames>(this.CITY_NAMES_URL).pipe(
      take(1)
    )
  }

}
