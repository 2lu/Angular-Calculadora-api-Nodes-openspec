import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display: string = '0';
  previousValue: number | null = null;
  operator: string | null = null;
  newNumber: boolean = true;
  isLoading: boolean = false;
  error: string = '';

  constructor(private calculatorService: CalculatorService) { }

  /**
   * Formata número com separador de milhar e decimal
   */
  formatNumber(value: string): string {
    // não formata se terminar com vírgula (o usuário ainda está digitando decimal)
    if (value.endsWith(',')) {
      const integerPart = value.slice(0, -1).replace(/\./g, '');
      return this.formatInteger(integerPart) + ',';
    }

    // separa parte inteira e decimal
    const parts = value.split(',');
    const integerPart = parts[0].replace(/\./g, '');
    const decimalPart = parts[1] || '';

    let formatted = this.formatInteger(integerPart);
    if (decimalPart !== '') {
      formatted += ',' + decimalPart;
    }
    return formatted;
  }

  /**
   * Retorna apenas a parte inteira formatada com separadores de milhar
   */
  private formatInteger(intPart: string): string {
    if (intPart === '') {
      return '';
    }
    const num = parseInt(intPart, 10);
    if (isNaN(num)) {
      return intPart;
    }
    return new Intl.NumberFormat('pt-BR').format(num);
  }

  /**
   * Remove formatação para armazenar valor real
   */
  unformatNumber(value: string): string {
    return value.replace(/\./g, '').replace(',', '.');
  }

  /**
   * Adiciona um número ao display
   */
  addNumber(num: string): void {
    // tratar ponto digitado manualmente como vírgula decimal
    if (num === '.') {
      num = ',';
    }
    // Se é a vírgula decimal
    if (num === ',') {
      // já tem vírgula? não adiciona
      if (this.display.includes(',')) {
        return;
      }
      if (this.newNumber) {
        this.display = '0,';
        this.newNumber = false;
      } else {
        this.display += ',';
      }
    } else {
      // número normal
      if (this.newNumber) {
        this.display = num;
        this.newNumber = false;
      } else {
        this.display = this.display === '0' ? num : this.display + num;
      }
    }
    // aplicar formatação de milhar imediatamente, mas não sobre escrita da vírgula
    if (!this.display.endsWith(',')) {
      this.display = this.formatNumber(this.display);
    }
    this.error = '';
  }

  /**
   * Define o operador e prepara para o próximo número
   */
  setOperator(op: string): void {
    if (this.operator === null) {
      // Remove formatação antes de armazenar
      const cleanValue = this.unformatNumber(this.display);
      this.previousValue = parseFloat(cleanValue);
    }
    this.operator = op;
    this.newNumber = true;
    this.display = '0'; // limpa o display imediatamente para o usuário
    this.error = '';
  }

  /**
   * Calcula o resultado chamando a API do backend
   */
  calculate(): void {
    if (this.operator === null || this.previousValue === null) {
      return;
    }

    const cleanDisplay = this.unformatNumber(this.display);
    const currentValue = parseFloat(cleanDisplay);
    let expression = '';

    // Monta a expressão matemática
    switch (this.operator) {
      case '+':
        expression = `${this.previousValue}+${currentValue}`;
        break;
      case '-':
        expression = `${this.previousValue}-${currentValue}`;
        break;
      case '*':
        expression = `${this.previousValue}*${currentValue}`;
        break;
      case '/':
        expression = `${this.previousValue}/${currentValue}`;
        break;
    }

    this.isLoading = true;
    this.error = '';

    // Chama a API do backend
    this.calculatorService.calculate(expression).subscribe({
      next: (response) => {
        // converte ponto decimal do backend e formata o resultado
        const resultStr = response.result.toString().replace('.', ',');
        this.display = this.formatNumber(resultStr);
        this.previousValue = null;
        this.operator = null;
        this.newNumber = true;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erro ao calcular:', error);
        this.error = 'Erro ao calcular. Verifique a expressão.';
        this.isLoading = false;
      }
    });
  }

  /**
   * Limpa o display e reseta as variáveis
   */
  clear(): void {
    this.display = '0';
    this.previousValue = null;
    this.operator = null;
    this.newNumber = true;
    this.error = '';
  }

  /**
   * Remove o último caractere do display
   */
  backspace(): void {
    if (this.display.length > 1) {
      this.display = this.display.slice(0, -1);
    } else {
      this.display = '0';
    }
    this.error = '';
  }
}
