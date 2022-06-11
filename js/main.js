
function isUpper(str) {
    return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}



window.addEventListener('DOMContentLoaded', () => {

    //page elements selectors
    var textWrapper = document.querySelector('.text_field')


    //other variables
    var textArray = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi pariatur itaque, officiis et aut quo fugiat asperiores quia eum reprehenderit blanditiis eos voluptates, illo natus necessitatibus sequi possimus eius adipisci?'.split('')
    letterFields = []

    textArray.forEach(item => {
        var div = document.createElement('div')
        div.classList.add('letter_field')
        div.textContent = item
        letterFields.push(div)
        textWrapper.append(div)
    })
    letterFields[0].classList.add('text_field_current')
    currentLetterIndex = 0
    //for simplier notation
    //
    currentLetter = letterFields[0].textContent
    //
    errorCounter = 0


    //keyboard listener
    document.addEventListener('keypress',(event) => { 
        
        if (event.key == currentLetter) {
            //update color
            letterFields[currentLetterIndex].classList.remove('text_field_error')
            letterFields[currentLetterIndex].classList.remove('text_field_current')
            letterFields[currentLetterIndex].classList.add('text_field_completed')
            letterFields[++currentLetterIndex].classList.add('text_field_current')
            currentLetter = letterFields[currentLetterIndex].textContent
            // console.log(currentLetter)
        } else {
            //error code
            ++errorCounter
            letterFields[currentLetterIndex].classList.add('text_field_error')
        }

        if (currentLetterIndex >= textArray.length) { //error here

        }
    })

})






// function keyboardListenerLogic(event) {
//     console.log(event.keyCode)
//         if (event.keyCode == letterFields[currentLetterIndex].textContent.toLowerCase().charCodeAt(0)) {
//             //update color
//             letterFields[index].classList.remove('text_field_error')
//     letterFields[index].classList.add('text_field_completed')
//     ++index
//         } else {
//             //error code
//             letterFields[currentLetterIndex].classList.add('text_field_error')
//         }

//         if (currentLetterIndex >= textArray.length) { //error here

//             document.removeEventListener('keypress',keyboardListenerLogic)
//         }
// }

// function updateCompletedLetterField(letters,index) {
    
// }


// function addNewDivElemWithClass(parent,className,textContent) {
//     var div = document.createElement('div')
//     div.classList.add(className)
//     div.textContent = textContent
//     // arrayOfElements.append(div)
//     parent.append(div)
// }
