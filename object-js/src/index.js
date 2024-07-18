export function orderByProps(obj, order) {
    const orderedProps = [];
    const otherProps = [];
  
    for (const prop in obj) {
      if (order.includes(prop)) {
        orderedProps.push({ key: prop, value: obj[prop] });
      } else {
        otherProps.push({ key: prop, value: obj[prop] });
      }
    }
  
    orderedProps.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));
    otherProps.sort((a, b) => a.key.localeCompare(b.key));
  
    return orderedProps.concat(otherProps);
  }


  export function getSpecialAttacks({ special }) {
    return special.map(({ id, name, description = 'Описание недоступно', icon }) => ({
      id,
      name,
      description,
      icon,
    }));
  }
