let dialogue = [];

let dialogueContainer = document.getElementById('dialogue-container');

// const myTimeout = setTimeout(Conversation, 2000);

function Conversation() {
    dialogue = "This story is purely fictional. Any relevance between this world and your own are purely coincidental. Please enjoy the experience." 

    dialogueContainer.textContent = dialogue;
    dialogueContainer.style.visibility = "visible";
}

Conversation();