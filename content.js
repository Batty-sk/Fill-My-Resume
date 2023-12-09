
const handleMessage = (id,message,CallBackFun) => {
    console.log('Background script sent a message:', message);
    const inputElements= document.getElementsByTagName('input')
    console.log('input lements',inputElements)
    if(inputElements)
    {
        CallBackFun(`${inputElements[0]} here broh there `)
        console.log('sending this data to the bakcend as a callback',inputElements)
     //CallBackFun({data:[...inputElements]})

        const handleInputClick=(eve)=>{
            console.log('ys sir input sir',eve)
            handleCreateAndInsert(eve)
        }

     for(let i=0;i<inputElements.length;i++){
        inputElements[i].removeEventListener('focus',handleInputClick)
        }
     for(let i=0;i<inputElements.length;i++){
        inputElements[i].addEventListener('focus',handleInputClick)
/*         inputElements[i].addEventListener('focusout',handleClearingSuggestion)
 */        }
    
    }
}

const handleCreateAndInsert = (event) => {
    // Create a div element for the suggestions
    const suggestionContainer = document.createElement('div');
    suggestionContainer.className = 'suggestion-container';
  


    //handling the userselection
    const inputElement = event.target;


    // get the type of the input field if text and name then suggest the priority first then if user 
    //wants to input something else in the field so he can do it by clicking on moreoptions
    const handleUserSelection=(selection)=>{

        console.log('user has selected this',inputElement)
        if(inputElement.type === 'number'){
            console.log('not here buddy')
            inputElement.value=43252356
        }
        else{
        inputElement.value=selection
        }
        
    }   
  
    for (let i = 1; i <= 3; i++) {
      const suggestion = document.createElement('div');
      suggestion.onclick=()=>handleUserSelection(`Suggestion ${i}`)
      suggestion.style.cursor='pointer'
      suggestion.innerText = `Suggestion ${i}`;
      suggestionContainer.appendChild(suggestion);
    }
      //this function should return the array of suggestions on the basis of the type and name of the input
    // Create and append suggestion elements

  
    const inputRect = inputElement.getBoundingClientRect();
    console.log('createing bro',inputElement,inputRect)

    const parent=inputElement.parentElement
    suggestionContainer.style.position = 'absolute';
    suggestionContainer.style.top = `${inputRect.bottom}px`;
    
    suggestionContainer.style.left = `${inputRect.left}px`;
    parent.appendChild(suggestionContainer)
}

// now we have to attach the event listener here so it can process the request coming from the background Script..

chrome.runtime.onMessage.addListener(handleMessage);
console.log('event listenenre started...')