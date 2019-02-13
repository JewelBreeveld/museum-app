function submitComment () {
    //stopt refreshen van de page
    event.preventDefault()
    // Gather data
    const inputField = document.getElementById('name')
    let name = inputField.value
            //console.log(name)
    const textArea = document.getElementById('msg')
    const msg = textArea.value
            //console.log(msg)

    if(doesNotPassAllValidations(name,msg)){
        return null
    }

    name = capitalizeName(name)

    //Create the elements
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
            //console.log(h3)
    const p = document.createElement('p')
            //console.log(p)
    
    // Adjust the elements you created        
    h3.innerHTML = `${name} said:`;
    p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)
    console.log(comment)
    
    //Display the elements on the page
    const commentSection = document.getElementById('comments')
    console.log(commentSection)
    commentSection.appendChild(comment)
    
    //Empty the form
   inputField.value = null
   textArea.value = null

    //No Empty Comments
    //console.log(!name)
    //console.log(!msg)
    //console.log(!name || !msg) 

};

function doesNotPassAllValidations (name, msg) {
    // Displays an error if name or message field is empty
    if (!name) {
        alert('You forgot to fill in your name! Who are you?')
        return true
    } else if (!msg){
        alert('You forgot to fill in your message! Please leave a comment in the comment box :)')
        return true
    }
    // Displays an error if message contains more than 280 characters
    if (msg.length > 280) {
        alert('Please write a shorter message')
        return true
    }
    return false
};

function capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1)
}


