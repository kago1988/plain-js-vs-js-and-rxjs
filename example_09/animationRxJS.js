import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const animation$ = interval(1000).pipe(take(5));

animation$.subscribe(step => {
  // Update animation frame
  console.log('Animation step: ', step);
});
