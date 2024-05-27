import { webSocket } from 'rxjs/webSocket';

const socket$ = webSocket('ws://example.com/socket');

socket$.subscribe(
  message => console.log('Message received: ', message),
  error => console.error('WebSocket error: ', error),
  () => console.log('WebSocket connection closed')
);

socket$.next({ action: 'ping' });
