const groupByThree = (arr: Array<any>) => {
  let result = [];
  for (let i = 0; i < arr.length; i += 3) {
    let group = arr.slice(i, i + 3);
    result.push(group);
  }
  return result;
};

export { groupByThree };
