let x=42;
switch (typeof x) {
  case 'number':
    console.log('x является числом');
    break;
  case 'string':
    console.log ('x является строкой');
    break;
  case 'Boolean':
    console.log ('x является логическим типом');
    break;
  default:
    console.log ('Тип x не определен');
}