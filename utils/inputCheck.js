// Will check that an object has the required properties: (object, 'prop1', 'prop2', 'etc')

module.exports = function(obj, ...props) {
    const errors = [];
  
    props.forEach(prop => {
      // if property is blank or doesn't exist, add to errors array
      if (obj[prop] === undefined || obj[prop] === '') {
        errors.push(`No ${prop} specified.`);
      }
    });
  
    if (errors.length) {
      return {
        error: errors.join(' ')
      };
    }
  
    return null;
  };
  