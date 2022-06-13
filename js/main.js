
function isUpper(str) {
    return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}



window.addEventListener('DOMContentLoaded', () => {

    //page elements selectors
    var textField = document.querySelector('.text_field'),
    startButton = document.querySelector('.start_button')

    var textArray = 'Lorem ipsum dolor'.split('')
    letterFields = []

    var letterWrapper = document.createElement('div')
    letterWrapper.classList.add('letter_wrapper')
    textArray.forEach(item => {
        var div = document.createElement('div')
        div.classList.add('letter_field')
        div.textContent = item
        letterFields.push(div)
        letterWrapper.append(div)
    })
    textField.append(letterWrapper)
    letterFields[0].classList.add('text_field_current')
    currentLetterIndex = 0
    //
    currentLetter = letterFields[0].textContent
    //
    errorCounter = 0
    var startTime = -1


    startButton.addEventListener('click', (event) => {

        startButton.textContent = 'Game starts in 5s'
        startButton.style.border = 'none'

        const updateCounter = () => startButton.textContent = `Game starts in ${+startButton.textContent.split('').reverse()[1]-1}s`

        const starter = setInterval(updateCounter,1000)
        setTimeout(() => {
            clearInterval(starter)
            startButton.textContent = 'Go!'
            startTime = new Date().getTime()
            console.log(startTime)
            setTimeout(() => {
                startButton.remove()
            }, 2000)
        },6000)
    })


    document.addEventListener('keypress',(event) => { 
        
        if (event.key == currentLetter) {
            letterFields[currentLetterIndex].classList.remove('text_field_error')
            letterFields[currentLetterIndex].classList.remove('text_field_current')
            letterFields[currentLetterIndex].classList.add('text_field_completed')
            
            if (currentLetterIndex == textArray.length-1) { 
                document.dispatchEvent(new Event('textCompleted'))
            } else {
                letterFields[++currentLetterIndex].classList.add('text_field_current')
                currentLetter = letterFields[currentLetterIndex].textContent
            }
            
        } else {
            ++errorCounter
            letterFields[currentLetterIndex].classList.add('text_field_error')
        }

        
    })

    document.addEventListener('textCompleted',()=> {
        stopTime = (new Date()).getTime()
        console.log(stopTime)
        alert(`${stopTime - startTime}ms`)
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
