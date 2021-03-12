function capitalizeWords(arr) {
  if(!arr.length) return [];
  return [arr[0].toUpperCase(), ...capitalizeWords(arr.slice(1))];
}
