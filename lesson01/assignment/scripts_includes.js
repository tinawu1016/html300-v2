// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){


  //Find the form//
  const colorArray = document.querySelector('#color');
  colorArray.addEventListener ('submit', function (event){
    event.preventDefault()

    //An array to compared with the input//
    let data2 = ["red", "blue", "green"]

    const inputField2 = document.querySelector('#color .input')
    const userInput2 = inputField2.value


    //used includes to see color is in the array or not//
    const isIn = data2.includes(userInput2);
    console.log(data2.includes(userInput2));
    //return true or fales//
    document.querySelector('#color .output').innerHTML = isIn;

    //clear the form to the user to try again//
    inputField2.value = '';
  })

})
