import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetLinkedinInfoService {
  mesageResults: any[] = [];
  coments: any[] = [];
  constructor(private httpClient: HttpClient) { }
}
