console.log('Here are all the available people:', people);

$(onReady);

function onReady(){
    console.log('jquery is working');
    renderPeople()
    renderName(selectedPerson)

    
    // click event listener
   $('#board').on('click', 'img', select)

}



// display people
function renderPeople(){
    for(let i = 0; i < people.length; i ++){
        $(`
        <img src=https://github.com/${people[i].githubUsername}.png?size=250 alt="Profile image of ${people[i].name}" data-name=${people[i].name} class="faces">
        `).appendTo('#board')
    }
}

//render name
function renderName(name){
    $('#name').text(`Click on: ${name}`);
}

// pick random person
function randomPerson(min = 0 , max = people.length - 1){
    let rand = Math.floor(Math.random() * (1 + max - min) + min);
    return people[rand].name
}


let selectedPerson = randomPerson()

// select function
function select(){
    console.log($(this).data("name"))
    if($(this).data("name") == selectedPerson){
        alert('Correct! Keep playing!');

        selectedPerson = randomPerson()
        renderName(selectedPerson)
    } else {
        alert('Incorrect. Keep playing!')
    }
}