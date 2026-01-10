import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface MagazineInfo {
  filename: string;
  title: string;
  date: string;
}

export interface MagazineIndex {
  magazines: MagazineInfo[];
}

export interface Magazine {
  name: string;
  path: string;
  date?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MagazineService {
  constructor(private http: HttpClient) {}

  getMagazines(): Observable<Magazine[]> {
    return this.http.get<MagazineIndex>('Magazines/index.json').pipe(
      map(response => 
        response.magazines.map(mag => ({
          name: mag.title,
          path: `Magazines/${mag.filename}`,
          date: mag.date
        }))
      )
    );
  }
}