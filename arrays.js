var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array, element){
return [element, ...array];
}



function destructivelyAddElementToBeginningOfArray(array, element){
   array.unshift(element)
   return array
 }
  function destructivelyRemoveElementToEndOfArray(array, element){
   array.shift(element)
   return array
 }
 
 
 

 function destructivelyAddElementToEndOfArray(array, element){
   array.push(element)
   return array
 }

  function destructivelyRemoveElementFromEndOfArray(array){
   array.pop()
   return array
 }
   function destructivelyRemoveElementFromBeginningOfArray(array){
   array.shift()
   return array
   
 }
 

 
 function addElementToEndOfArray(array, element){
   return [...array, element]
 }
 
 function accessElementInArray(array, index) {
     return array[index]
 }
 
 
 function removeElementFromEndOfArray(array) {
   return array.slice(0,array.length - 1)
 }
 
 function removeElementFromBeginningOfArray(array) {
   return array.slice(1)
   
 }
 