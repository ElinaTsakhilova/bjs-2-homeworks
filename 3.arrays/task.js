// Task 1
function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((element, i) => element === arr2[i])
}

//Task 2
function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(user => gender === user.gender).map(user => user.age).reduce((acc, age, index, arr) => acc + age / arr.length, 0)
    return result;
}