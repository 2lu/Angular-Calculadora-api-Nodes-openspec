import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display: string = '0';
  error: string | null = null;
  private clearDisplayOnNextInput = false;

  constructor(private calculatorService: CalculatorService) {}

  appendToDisplay(value: string): void {
    this.error = null; // Limpa o erro ao digitar

    if (this.display === '0' || this.clearDisplayOnNextInput) {
      this.display = value;
      this.clearDisplayOnNextInput = false;
    } else {
      this.display += value;
    }
  }

  clear(): void {
    this.display = '0';
    this.error = null;
  }

  backspace(): void {
    this.display = this.display.length > 1 ? this.display.slice(0, -1) : '0';
  }

  calculate(): void {
    if (this.display) {
      this.calculatorService.calculate(this.display).subscribe({
        next: (response) => {
          this.display = String(response.result);
          this.error = null;
          this.clearDisplayOnNextInput = true;
        },
        error: (err) => {
          this.error = err.error?.error || 'Erro no cálculo.';
          this.clearDisplayOnNextInput = true;
        }
      });
    }
  }
}