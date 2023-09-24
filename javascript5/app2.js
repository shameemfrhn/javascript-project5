function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  
  
  const emptyObject = {};
  const nonEmptyObject = { key: 'value' };
  
  console.log(`Is emptyObject empty? ${isObjectEmpty(emptyObject)}`);
  console.log(`Is nonEmptyObject empty? ${isObjectEmpty(nonEmptyObject)}`);
  