import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

const searchBox = document.getElementById('searchBox');
const input$ = fromEvent(searchBox, 'input').pipe(
  debounceTime(300),
  map(event => event.target.value)
);

input$.subscribe(value => {
  // Make an API call or update UI
});
