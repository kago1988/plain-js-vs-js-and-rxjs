import { fromEvent, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const email$ = fromEvent(emailInput, 'input').pipe(map(event => event.target.value));
const password$ = fromEvent(passwordInput, 'input').pipe(map(event => event.target.value));

combineLatest([email$, password$]).subscribe(([email, password]) => {
  const isValid = email.includes('@') && password.length > 6;
  console.log('Form is valid: ', isValid);
});
