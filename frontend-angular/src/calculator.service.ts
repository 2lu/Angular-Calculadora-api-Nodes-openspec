import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  /**
   * Calcula uma expressão matemática através da API do backend
   * @param expression - A expressão matemática a ser calculada (ex: "2+2*5")
   * @returns Observable com o resultado do cálculo
   */
  calculate(expression: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/calculate`, { expression });
  }
}
