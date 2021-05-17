// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const mapForm = document.querySelector('#map')

  mapForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data4 = [2, 3, 5, 10]

    const inputField4 = document.querySelector('#map .input')
    const userInput4 = inputField4.value
    const userNumber4 = parseInt(userInput4)



      // Use map to let array * userinput//
      const newArray = data4.map(x => x * userNumber4)




      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#map .output').innerHTML = newArray


    // Clear the form field so the user can try again
    inputField4.value = ''
  })

})
