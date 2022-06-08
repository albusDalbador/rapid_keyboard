window.addEventListener('DOMContentLoaded', () => {

    //page elements
    var textWrapper = document.querySelector('.text_field')

    var textArray = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis culpa in eveniet cum quam, deleniti dignissimos eligendi voluptatibus veniam maiores consequuntur voluptate assumenda dolore itaque minima autem quae perspiciatis doloremque?'.split('')

    currentLetter = textArray[0]

    var controlArray = []


    //
    textArray.forEach(item => addNewDivElemWithClass(textWrapper,'letter_field',item))




    document.addEventListener('keypress', (event) => {
        console.log(event.code.slice(3))
        if (event.code.slice(3).toLowerCase() == currentLetter) {
            //update color
        } else {
            //error code
        }
    })

    // const 


})


function addNewDivElemWithClass(parent,className,textContent) {
    var div = document.createElement('div')
    div.classList.add(className)
    div.textContent = textContent
    parent.append(div)
}
