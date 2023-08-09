export default function orderByProps(obj, array) {
  const result = [];
  const objectToSort = { ...obj };

  array.forEach((elem) => {
    result.push({ key: elem, value: objectToSort[elem] });
    delete objectToSort[elem];
  });

  const objectSorting = Object.keys(objectToSort).sort();
  objectSorting.forEach((elem) => {
    result.push({ key: elem, value: objectToSort[elem] });
  });

  return result;
}
