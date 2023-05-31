import { Component } from '@angular/core';
import {
  AUTO_STYLE,
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

const DEFAULT_DURATION = 300;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('hideDetails', [
      state(
        'false',
        style({
          height: AUTO_STYLE,
          opacity: AUTO_STYLE,
        })
      ),
      state('true', style({ height: '0', opacity: '0' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out')),
    ]),
  ],
})
export class AppComponent {
  price = 285600;
  currentStep = 1;
  steps = 4;
  showInvoiceDetails = false;
  invoiceDetails = `<span class="text-gray-500">Detalle del servicio</span>

  <span class="font-medium">Bluehosting</span>
  Plan Emprendedores POWER
  13/04/2023 -12/04/2024
  ¿Requiere agendar capacitación? No
  Registro Dominio - ppsoss.cl - 1 año(s) 13/04/2023 -12/04/2024`;
}
