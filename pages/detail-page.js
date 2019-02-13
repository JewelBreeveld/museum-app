function submitComment () {
    const inputFieldName = document.getElementById('name')
    const name = inputFieldName.value
    //console.log(name)
    const inputFieldMsg = document.getElementById('msg')
    const msg = inputFieldMsg.value
    //console.log(msg)
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    //console.log(h3)
    const p = document.createElement('p')
    //console.log(p)
    h3.innerHTML = `${name} said:`;
    p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)
    console.log(comment)
};