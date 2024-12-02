export function isValidUrl(s: string) {
  try {
    new URL(s); // Will throw if the string is not a valid URL
    return true;
  } catch {
    return false;
  }
}
