import { fromEvent, merge } from 'rxjs';

const click$ = fromEvent(document, 'click');
const input$ = fromEvent(document, 'input');

merge(click$, input$).subscribe(event => {
  console.log('Event: ', event);
});
