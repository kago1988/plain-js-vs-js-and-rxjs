import { fromEvent } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

const dragTarget = document.getElementById('dragTarget');
const mouseDown$ = fromEvent(dragTarget, 'mousedown');
const mouseMove$ = fromEvent(document, 'mousemove');
const mouseUp$ = fromEvent(document, 'mouseup');

mouseDown$.pipe(
  switchMap(() => mouseMove$.pipe(
    takeUntil(mouseUp$)
  ))
).subscribe(event => {
  dragTarget.style.left = `${event.clientX}px`;
  dragTarget.style.top = `${event.clientY}px`;
});
