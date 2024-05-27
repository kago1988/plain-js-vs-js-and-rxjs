import { BehaviorSubject } from 'rxjs';

const state$ = new BehaviorSubject({ count: 0 });

const increment$ = new Subject();
increment$.pipe(
  withLatestFrom(state$),
  map(([_, state]) => ({ ...state, count: state.count + 1 }))
).subscribe(state$);

state$.subscribe(state => {
  // Update UI based on new state
  console.log('New state: ', state);
});

// Increment state
increment$.next();
