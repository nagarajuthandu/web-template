import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AboutUsContentService {
  private staticContentUrl = 'assets/data/about.json';

  constructor(private http: HttpClient) {}

  getAboutUsContent(): Observable<any> {
    return this.http.get<any>(this.staticContentUrl);
  }
}
