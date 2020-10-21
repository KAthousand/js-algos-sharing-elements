//SHARING ELEMENTS

const sharingElements = (arr, size) => {
  if (size != arr.length) {
    let arr2 = arr.splice(size);
    return [arr, arr2];
  }
  return [arr];
};

console.log(sharingElements(["a", "b", "c", "d"], 3));

module.exports = {
  sharingElements,
};
