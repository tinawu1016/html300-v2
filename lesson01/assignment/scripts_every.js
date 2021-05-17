// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const numberForm = document.querySelector('#number')

  numberForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data3 = [2, 3, 14]

    const inputField3 = document.querySelector('#number .input')
    const userInput3 = inputField3.value
    const userNumber3 = parseInt(userInput3)

    // Use every to test whether the number in array less than input//

      const isBelow = data3.every (evaluation = (currentValue => currentValue < userNumber3));
      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#number .output').innerHTML = isBelow


    // Clear the form field so the user can try again
    inputField3.value = ''
  })

})
