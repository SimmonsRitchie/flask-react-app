/* This is a function for merging data, like combining map coordinates with a dataset */

const joinData = ({
  dataset1,
  dataset2,
  leftJoinOn,
  rightJoinOn,
  appendKey,
}) => {
  /* Takes two arrays of objects, returns a new array of objects where each object has been
  joined by a common key-value pair
  
  dataset1: Arr. Array of objects.
  dataset2: Arr. Array of objects.
  leftJoinOn: Str. Name of key in dataset1 that you want to join with
  rightJoinOn: Str. Name of key in dataset2 that you want to join with
  appendKey: Str. Name of key in dataset2 that should be added to an object if commonKey value
  matches.
  */

  const mergedData = [];
  dataset1.forEach((data1Item) => {
    let newItem;
    dataset2.forEach((data2Item) => {
      if (
        data1Item[leftJoinOn].toLowerCase() ===
        data2Item[rightJoinOn].toLowerCase()
      ) {
        newItem = { ...data1Item, [appendKey]: data2Item[appendKey] };
      }
    });
    newItem = newItem || { ...data1Item, [appendKey]: null };
    mergedData.push(newItem);
  });
  return mergedData;
};
export default joinData;
