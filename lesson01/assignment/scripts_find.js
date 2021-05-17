// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const findForm = document.querySelector('#find')

  findForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data5 = [2, 10, 33, 44, 77]

    const inputField5 = document.querySelector('#find .input')
    const userInput5 = inputField5.value
    const userNumber5 = parseInt(userInput5)

      // Use find//
      const answer = data5.find(element => element > userInput5);

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#find .output').innerHTML = answer

    // Clear the form field so the user can try again
    inputField5.value = ''
  })

})
