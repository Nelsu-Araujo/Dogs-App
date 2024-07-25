import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog, Image } from 'src/models/dog.model';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  // https://api.thedogapi.com/v1/breeds?limit=10&page=0?api_key=live_5YuLnjm4OIuoZ2ZDT4b8yxYTNwRRPJRdxwkJX2TUkfRyFRHC41reT9dOqydzewnt

  private domain: string = 'https://api.thedogapi.com/v1/'
  private apikey: string = 'live_5YuLnjm4OIuoZ2ZDT4b8yxYTNwRRPJRdxwkJX2TUkfRyFRHC41reT9dOqydzewnt'

  constructor(private http: HttpClient) { }

  getDogs(page: number): Observable<Dog[]> {
    return this.http.get<Dog[]>(`${this.domain}breeds/?limit=60&page=${page}?api_key=${this.apikey}`)
  }

  getImageById(id: string): Observable<Image> {
    return this.http.get<Image>(`${this.domain}images/${id}?api_key=${this.apikey}`);
  }

  getDogById(id: number): Observable<Dog> {
    return this.http.get<Dog>(`${this.domain}breeds/${id}?api_key=${this.apikey}`);
  }
}
