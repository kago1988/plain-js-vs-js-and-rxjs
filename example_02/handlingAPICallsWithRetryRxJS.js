import { ajax } from 'rxjs/ajax';
import { retry, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const apiCall$ = ajax.getJSON('https://api.example.com/data').pipe(
  retry(3),
  catchError(error => of({ error: 'Failed to fetch data' }))
);

apiCall$.subscribe(response => {
  // Handle response or error
});
