
let str1 = "abcdf";
let str2 = "dcbaa";
let isAnagram = (a, b) => {
  let isAnagram = true;
  let dict = {};
  let arrOfstr1 = a.split("");
  let arrOfstr2 = b.split("");
  for (let index = 0; index < arrOfstr1.length; index++) {
    if (dict[arrOfstr1[index]]) {
      dict[arrOfstr1[index]] = dict[arrOfstr1[index]] + 1;
    } else {
      dict[arrOfstr1[index]] = 1;
    }
  }

  for (let index = 0; index < arrOfstr2.length; index++) {
    if (dict[arrOfstr2[index]]) {
      const s = dict[arrOfstr2[index]] - 1;
      if (s < 0) {
        isAnagram = false;
        break;
      }
      dict[arrOfstr2[index]] = s;
    } else {
      isAnagram = false;
      break;
    }
  }

  for (const key in dict) {
    if (Object.hasOwnProperty.call(dict, key)) {
      if (dict[key] != 0) {
        isAnagram = false;
        break;
      }
    }
  }

  return isAnagram;
};

console.log(isAnagram(str1, str2));
