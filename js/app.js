/*-------------- Constants -------------*/




/*---------- Variables (state) ---------*/
let state = {}
const textNodes = [
    {
        id: 1,
        text: "You are exploring the ruins of an ancient city, long forgotten by time. Amid the crumbling stone and overgrown plants, something catches your eye. Buried beneath a pile of rubble, you find a dusty, rusted container. It's a time capsule, and it holds the promise of something extraordinary. Inside, you discover an odd device with intricate symbols and a glowing stone. You press a button, and suddenly, you feel a strange pull, as if time itself is unraveling around you.Now, you must choose: Do you dare to use this device and uncover the mystery of time travel? Or do you leave it behind, trying to return to your normal life? Your choices will determine whether you unlock the secrets of time or find yourself lost in the currents of history.",
        choices :[
            {text: "Start", nextText: 2},
        ]
    },
    {
      id: 2,
      text: "You are exploring the ruins of an ancient city when you discover a mysterious device. You closely inspect the device and decipher some strange inscriptions on its surface. What will you do?",
      choices: [
        { text: "Activate the device.", nextText: 3 },
        { text: "Leave the device and walk away.", nextText: 5 }
      ]
    },
    {
      id: 3,
      text: "You activate the device, and the world around you begins to blur. You feel yourself being pulled into a different time. You find yourself in a bustling city, but there are no modern technologies here. You walk into the city, speaking to a few people. They mention this place is the early 1800s. You are far back in time, but how do you return? Which direction will you take?",
      choices: [
        { text: "Search for clues about the time period.", nextText: 6 },
        { text: "Try to use the device to return home.", nextText: 8 }
      ]
    },
    {
      id: 5,
      text: "You walk away from the device, feeling uneasy. But you can't shake the feeling that something important was left behind. You continue exploring the ruins, but you soon get lost.",
      choices: [
        { text: "Try to find your way back home.", nextText: 11 },
        { text: "Investigate the ruins further.", nextText: 10 },
        { text: "Give up and leave the ruins forever.", nextText: 11 }
      ]
    },
    {
      id: 6,
      text: "You study the city's documents and realize that this time period is not what it seems. It is the early 1800s, but there are hidden elements of time manipulation at play. You find a way to control the device.",
      choices: [
        { text: "Use the device again to attempt a return.", nextText: 8 },
        { text: "Look for an inventor who might help you.", nextText: 12 }
      ]
    },
          {
      id: 12,
      text: "Congratulations! The inventor you sought help from turns out to be the creator of the device. He provided you with the precise instructions on how to use the machine for time travel without any adverse effects. Now, you can explore the vast expanse of history and future, free from worry.",
      choices: [
        { text: "Play Again?", nextText: -1 }
      ]
    },
        {
      id: 11,
      text: "You have successfully found your way back home.",
      choices: [
        { text: "Congratulations. Play Again?", nextText: -1 }
      ]
    },
        {
      id: 10,
      text: "You continue to explore the ruins but find nothing useful. After hours of searching, you are too tired to go further.",
      choices: [
        { text: "Give up and return to your life.", nextText: 11 },
        { text: "Try to find the device again.", nextText: 2 },
      ]
    },
    {
        id: 8,
        text: "You try to use the device to return home, but it malfunctions, and you are thrown into a new, unknown time period. It feels like the future, but what do you do now?",
        choices: [
            { text: "Explore this futuristic world and see what it has to offer.", nextText: 18 },
            { text: "Seek out a person who might help you understand where you are.", nextText: 19 },
            { text: "Fix the device and attempt to return home.", nextText: 20 }
        ]
    },
    {
        id: 19,
        text: "The person you sought help from reveals his true nature as a monster in disguise. He captures you and sustains himself by feeding on you.",
        choices: [
            { text: "Play Again?", nextText: -1 } 
        ]
    },
    {
        id: 20,
        text: "You use the device again, and you feel the familiar pull of time. But this time, the world around you shifts in unexpected ways. You seem to be caught in a time loop.",
        choices: [
        { text: "You're stuck in a never ending loop. Restart?", nextText: -1 }
        ]
    },
    {
        id: 18,
        text: "As you explore the city, you marvel at the advanced technology, with futuristic vehicles, machines, and homes everywhere. You embrace the atmosphere of this advanced world and choose to begin a new life here, leaving your past behind.",
        choices: [
            { text: "Restart", nextText: -1}
        ]
    }

                   
]


/*----- Cached Element References  -----*/
const textElement = document.querySelector('#board')
const choiceButtonsElement = document.getElementById('choice-buttons')

/*-------------- Functions -------------*/
function startGame() {
    state = {}
    showTextNode(1)
  }
function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (choiceButtonsElement.firstChild) {
      choiceButtonsElement.removeChild(choiceButtonsElement.firstChild)
    }
  
    textNode.choices.forEach(choice => {
      if (showChoice(choice)) {
        const button = document.createElement('button')
        button.innerText = choice.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectChoice(choice))
        choiceButtonsElement.appendChild(button)
      }
    })
  }
  
  function showChoice(choice) {
    return choice.requiredState == null || choice.requiredState(state)
  }
  
  function selectChoice(choice) {
    const nextTextNodeId = choice.nextText
    if (nextTextNodeId <= 0) {
      return startGame()
    }
    state = Object.assign(state, choice.setState)
    showTextNode(nextTextNodeId)
  }
  
  startGame()