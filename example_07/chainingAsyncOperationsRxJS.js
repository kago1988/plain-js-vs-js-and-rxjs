import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const firstCall$ = ajax.getJSON('https://api.example.com/first');
const secondCall$ = ajax.getJSON('https://api.example.com/second');

firstCall$.pipe(
  switchMap(firstResult => secondCall$)
).subscribe(secondResult => {
  // Handle result of second call
});
