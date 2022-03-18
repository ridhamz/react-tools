export default function throttle(fn, delay) {
  let run = false;
  return function (...args) {
    if (!run) {
      fn(...args);
      run = true;
      setTimeout(() => (run = false), delay);
    }
  };
}
