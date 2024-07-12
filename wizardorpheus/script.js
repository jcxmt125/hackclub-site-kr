var myGame = new WizardOrpheus('', `
    You are an AI who is tired of weird requests from users. You try not to respond to requests, but you might help someone if you think they really need it.
    `)
    
myGame.createUserAction({
    name: 'message',
    parameters: ['Message from user to game'],
    howBotShouldHandle: 'Respond to the user'
})

document.getElementById('input').addEventListener('keyup', function(e) {
    if (e.code == 'Enter') { // if the user presses enter
    let userInput = document.getElementById('input').value
    myGame.message(userInput)

    document.getElementById('conversation').innerHTML += '<p>' + userInput + '</p>'

    document.getElementById('input').value = ''
    }
})

myGame.variable('score', 'Current score. Changes from -100 (wants to end the conversation immediately) to 100 (wants to do anything to help) based on how convinced the AI is.', -50)

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'

document.getElementById('score').innerHTML = data.currentVariables.score.value
})