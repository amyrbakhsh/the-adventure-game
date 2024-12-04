# Time Travel Adventure Game
This project is an interactive text-based adventure game where players explore the ruins of an ancient city and make choices that affect the storyline, leading them through time travel and encounters with various characters and events.

## How to play.
- Start the Game. 
[The Adventure Game](https://amyrbakhsh.github.io/the-adventure-game/)
- Make Choices: Read the text and click on the buttons to make choices. Each choice leads to different outcomes and advances the story.
- Explore Outcomes: Experience different storylines and endings based on your choices.

### Code Structure
- Variables: 
  - State 
 ```let state = {}```
  - textNodes 
  ```const textNodes = [```
        ```id: 1,```
        ```text: gametext,```
        ```choices: [```
            ```choice 1,```
           ``` choice 2,```
        ```]```
    ```}```
  ```]```

### Cached Element References: References to HTML elements that display text and choices.
```const textElement = document.querySelector('#board');```
```const choiceButtonsElement = document.getElementById('choice-buttons');```

### Functions:
***- Start Funtion:***
```function startGame() {```
    ```state = {}```
    ```showTextNode(1)```
  ```}```

***- ShowTextNode Function:***
```function showTextNode(textNodeIndex) {```
    ```const textNode = textNodes.find(textNode => ```
    ```textNode.id === textNodeIndex)```
    ```textElement.innerText = textNode.text```
    ```while (choiceButtonsElement.firstChild) {```
      ```choiceButtonsElement.removeChild```
      ```(choiceButtonsElement.firstChild)```
    ```}```
  
  ```  textNode.choices.forEach(choice => {```
      ```if (showChoice(choice)) {```
        ```const button = document.createElement```
        ```('button')```
        ```button.innerText = choice.text```
        ```button.classList.add('btn')```
        ```button.addEventListener('click', () => ```
        ```selectChoice(choice))```
        ```choiceButtonsElement.appendChild(button)```
      ```}```
    ```})```
  ```}```
  
***- SelectChoice:***
```function selectChoice(choice) {```
    ```const nextTextNodeId = choice.nextText;```
    ```if (nextTextNodeId <= 0) {```
        ```return startGame();```
    ```}```
    ```state = Object.assign(state, choice.setState);```
    ```showTextNode(nextTextNodeId);```
```}```

## Citations
This project was inspired by the interactive fiction genre and incorporates various elements from [Choose Your Own Adventure](https://en.wikipedia.org/wiki/Choose_Your_Own_Adventure) books.

### References

- [Choose Your Own Adventure](https://en.wikipedia.org/wiki/Choose_Your_Own_Adventure)
- [Interactive Storytelling: Techniques and Strategies](https://www.example.com/article)
