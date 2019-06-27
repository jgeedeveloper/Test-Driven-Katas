// const wrap = (line, maxLen) => {
//   for (let i = 0; i < maxLen; i++){
//   let space = ' ';
//   let previous;

//   }
// }

// const wrap = (line, maxLen) => {
//   let splitLine = line.split(' ');

// }

const wrap = (line, maxLen) => {
  const splitLine = line.split(' ');
  let wrapped = [];
  let temp = '';
  let counter = 0;
  const index = splitLine.map(item => {
    return item.length + 1;
  });
  for (let i = 0; i < splitLine.length; i++) {
    if (i === splitLine.length - 1) {
      wrapped.push(temp);
      wrapped.push(splitLine[splitLine.length - 1]);
    }
    if (counter + index[i] < maxLen) {
      temp += splitLine[i] + ' ';
      counter += index[i];
      // console.log(index[i]);
      // console.log(temp);
      // console.log(counter);
    } else {
      temp += '/n';
      wrapped.push(temp);
      temp = splitLine[i] + ' ';
      counter = 0;
    }
  }
  console.log(wrapped.join(' '));
  // console.log(temp);
  return wrapped.join(' ');
};

module.exports = wrap;
