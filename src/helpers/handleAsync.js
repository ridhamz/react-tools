export default async function handleAsync(fn) {
  try {
    const result = await fn();
    return [result || true, null];
  } catch (error) {
    return [null, error];
  }
}
