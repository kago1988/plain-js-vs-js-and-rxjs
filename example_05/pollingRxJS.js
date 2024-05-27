import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const poll$ = timer(0, 5000).pipe(
  switchMap(() => ajax.getJSON('https://api.example.com/data'))
);

poll$.subscribe(data => {
  // Update UI with new data
});
