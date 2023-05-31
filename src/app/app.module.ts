import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '@components/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { StepCountComponent } from './components/step-count/step-count.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AppComponent, StepCountComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
  ],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'CLP' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
