var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var myArray = [1]

function addElementToBeginningOfArray(array, element) {
<<<<<<< HEAD
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.splice(0, 1) 
  return array
}

function removeElementFromBeginningOfArray(array) {
  var yourArray = array.slice(1) 
=======
  return ["foo", ...myArray]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  myArray.unshift("foo")
  return myArray
}

function addElementToEndOfArray(array, element) {
  return [...myArray, "foo"]
}

function destructivelyAddElementToEndOfArray(array, element) {
  myArray.push("foo")
  return myArray
}

function accessElementInArray(array, index) {
  return myArray[0]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  myArray = myArray.shift()
  return myArray
}

function removeElementFromBeginningOfArray(array) {
  var yourArray = myArray.slice(1) 
>>>>>>> bb812e98719745b7840a40c50704e9cc77329950
  return yourArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
<<<<<<< HEAD
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  var cutArray = array.slice(0, (array.length -1))
=======
  myArray = myArray.pop()
  return myArray
}

function removeElementFromEndOfArray(array) {
  var cutArray = myArray.slice(0, (myArray.length -1))
>>>>>>> bb812e98719745b7840a40c50704e9cc77329950
  return cutArray
}