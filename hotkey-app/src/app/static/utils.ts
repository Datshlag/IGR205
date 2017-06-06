export class Utils {
  static createNestedObject = function(base, names, value): void {
    let lastName = arguments.length === 3 ? names.pop() : false;
    for(let i=0; i<names.length; i++) {
      base = base[names[i]] = base [names[i]] || {};
    }
    if(lastName) {
      base = base[lastName] = value;
    }
    return base;
  }
}
