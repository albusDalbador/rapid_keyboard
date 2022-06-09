window.addEventListener('DOMContentLoaded', () => {

    //page elements
    var textWrapper = document.querySelector('.text_field')

    var textArray = 'Lorem ipsum dolor'.split('')

    //
    textArray.forEach(item => addNewDivElemWithClass(textWrapper,'letter_field',item))
    letterFields = document.querySelectorAll('.letter_field')


    currentLetterIndex = 0
    // console.log(currentLetter)
    document.addEventListener('keypress', (event) => {
        console.log(event.keyCode)
        if (event.keyCode == letterFields[currentLetterIndex].textContent.toLowerCase().charCodeAt(0)) {
            //update color
            letterFields[currentLetterIndex].classList.remove('text_field_error')
            letterFields[currentLetterIndex].classList.add('text_field_completed')
            ++currentLetterIndex
        } else {
            //error code
            letterFields[currentLetterIndex].classList.add('text_field_error')
        }

        // if (currentLetterIndex >= textArray.length) {
        //     document.removeEventListener('keypress')
        // }
    })

})

// function keyboardListenerLogic(event) {
//     console.log(event.keyCode)
//         if (event.keyCode == letterFields[currentLetterIndex].textContent.toLowerCase().charCodeAt(0)) {
//             //update color
//             letterFields[currentLetterIndex].classList.remove('text_field_error')
//             letterFields[currentLetterIndex].classList.add('text_field_completed')
//             ++currentLetterIndex
//         } else {
//             //error code
//             letterFields[currentLetterIndex].classList.add('text_field_error')
//         }

//         if (currentLetterIndex >= textArray.length) {
//             document.removeEventListener('keypress')
//         }
// }


function addNewDivElemWithClass(parent,className,textContent) {
    var div = document.createElement('div')
    div.classList.add(className)
    div.textContent = textContent
    // arrayOfElements.append(div)
    parent.append(div)
}
