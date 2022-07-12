export function basename(str) {
  let idx = str.lastIndexOf("/");
  idx = idx > -1 ? idx : str.lastIndexOf("\\");
  if (idx < 0) {
    return str;
  }
  return str.substring(idx + 1);
}

export function shorten(url: string) {
  let limit = 45;
  if (url.length > limit) {
    return url.substring(0, limit) + "...";
  }
  return url;
}
