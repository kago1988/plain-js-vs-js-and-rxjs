const socket = new WebSocket('ws://example.com/socket');

socket.addEventListener('open', () => {
  socket.send(JSON.stringify({ action: 'ping' }));
});

socket.addEventListener('message', event => {
  console.log('Message received:', event.data);
});

socket.addEventListener('error', error => {
  console.error('WebSocket error:', error);
});

socket.addEventListener('close', () => {
  console.log('WebSocket connection closed');
});
