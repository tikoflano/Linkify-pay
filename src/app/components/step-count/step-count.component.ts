import { Component, Input } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Component({
  selector: 'linkify-step-count',
  templateUrl: './step-count.component.html',
})
export class StepCountComponent {
  @Input() set steps(steps: number) {
    this.steps$.next(Math.max(0, steps));
  }
  @Input() set currentStep(currentStep: number) {
    this.currentStep$.next(currentStep);
  }

  steps$ = new BehaviorSubject<number>(1);
  currentStep$ = new BehaviorSubject<number>(1);

  normalized_currentStep$ = combineLatest([
    this.steps$,
    this.currentStep$,
  ]).pipe(
    map(([steps, currentStep]) => Math.min(steps, Math.max(1, currentStep)) - 1)
  );
}
