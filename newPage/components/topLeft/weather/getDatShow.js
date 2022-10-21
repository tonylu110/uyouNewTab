export function dayTo(str) {
  return str.match(/\（([^)]*)\）/)
}

export function dayTo2(str) {
  return str.split(/\（.*?\）/)
}
