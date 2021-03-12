function reverse(str){
  if(str.length <= 1) return str;
  return str[str.length - 1] + reverse(str.slice(0,-1));
}
