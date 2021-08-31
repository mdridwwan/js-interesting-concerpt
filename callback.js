function welcomeMessage(name, greetHandler) {
    console.log(greetHandler);
    greetHandler(name);
}

function greetMorning(name) {
    console.log('good morning', name);
}

function greetAfternoon(name) {
    console.log('good Afternoon', name);
}

function greetEvenig(name) {
    console.log('good eveing', name);
}
welcomeMessage('Toom Haanks', greetMorning);
welcomeMessage('Sakib Haanks', greetAfternoon);
welcomeMessage('Baapa Raj', greetEvenig);