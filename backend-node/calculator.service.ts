import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CalculationResponse {
  result: number;
}

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  // A URL da sua API Node.js
  private apiUrl = 'http://localhost:3000/api/calculate';

  constructor(private http: HttpClient) { }

  calculate(expression: string): Observable<CalculationResponse> {
    return this.http.post<CalculationResponse>(this.apiUrl, { expression });
  }
}