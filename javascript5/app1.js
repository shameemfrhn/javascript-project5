function getObjectLength(obj) {
    return Object.keys(obj).length;
  }
  
  
  const myObject = { a: 1, b: 2, c: 3 };
  const length = getObjectLength(myObject);
  console.log(`Number of keys in the object: ${length}`);
  