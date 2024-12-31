import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuUrl = '/assets/data/menu.json'; // Assuming the JSON file is in the assets folder

  constructor(private http: HttpClient) {}

  getMenuItems(): Observable<any[]> {
    return this.http.get<any[]>(this.menuUrl);
  }
}
