export function getWindow() {
  if (typeof window !== 'undefined') {
    return window;
  } else {
    return undefined;
  }
}

export function isDesktop() {
  if (getWindow()) {
    return getWindow()!.innerWidth > 768;
  }
  return false;
}
