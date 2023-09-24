function getObjectValues(obj) {
    return Object.values(obj);
  }
  

  const myObject = { a: 1, b: 2, c: 3 };
  const valuesArray = getObjectValues(myObject);
  console.log(`Values of the object as an array: ${valuesArray}`);
  