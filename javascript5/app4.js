function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
  }
  
  
  const myObject = { a: 1, b: 2, c: 3 };
  const propName = 'b';
  
  console.log(`Does the object have property '${propName}'? ${hasProperty(myObject, propName)}`);
  