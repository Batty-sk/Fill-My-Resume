
let singleFields=null
let multiFields=null
let FilledContainer=null
let isON=true
let isDragging = false;

const handleMessage = (Data, sender, CallBackFun) => { 
  const inputElements = document.getElementsByTagName("input");
  const textAreaElements = document.getElementsByTagName("textarea");

  const handleInputClick = (eve) => {
    console.log("ys sir input sir", eve);
    handleCreateAndInsert(eve);
  };
  console.log("Background script sent a message:", Data);
  if(Data === 'turnOFF')
  {
    console.log('turining off .....')
    if (inputElements) {
      for (let i = 0; i < inputElements.length; i++) {
        inputElements[i].removeEventListener("focus", handleInputClick);
      }
    }
    if (textAreaElements) {
      for (let i = 0; i < textAreaElements.length; i++) {
        textAreaElements[i]?.removeEventListener("focus", handleInputClick);
      }}
      isON=false


      return 
  }

  isON=true


  singleFields=Data.singleValues
  multiFields=Data.multiValues

    console.log('filled container ',FilledContainer)





  


  

  console.log(
    "input lements",
    inputElements,
    "textAreaelements",
    textAreaElements
  );
  if (inputElements) {
    for (let i = 0; i < inputElements.length; i++) {
      inputElements[i].removeEventListener("focus", handleInputClick);
      inputElements[i].addEventListener   ("focus", handleInputClick);
      
    }
  }

  if (textAreaElements) {
    for (let i = 0; i < textAreaElements.length; i++) {
      textAreaElements[i]?.removeEventListener("focus", handleInputClick);
      textAreaElements[i]?.addEventListener("focus", handleInputClick);

    }
  }
};





const handleCreateAndInsert = (event) => {
  // Create a div element for the suggestions


  const inputElement = event.target;
  //handling the userselection



  const handleUserSelection = (selection) => {

      let result = parseInt(selection, 10);

      if (isNaN(result)) {
        
        inputElement.value=inputElement.value+' '+selection+' '

      } else {
        inputElement.value=result

        }
    };


    
  const CreateContainer=()=>{
      const container=document.getElementById('suggestion-container')
      if(container)
          container.remove()

          const suggestionContainer = document.createElement("div");
          
          suggestionContainer.id = "suggestion-container";
          suggestionContainer.style.position = "fixed";
          suggestionContainer.style.borderRadius = "8px";
          suggestionContainer.style.boxShadow = "1px 4px 8px rgba(0, 0, 0, 0.5)";
          suggestionContainer.style.maxHeight = "350px";
          suggestionContainer.style.height = "250px";
          suggestionContainer.style.maxWidth = "400px";
          suggestionContainer.style.width = "300px";
          suggestionContainer.style.background = "linear-gradient(169deg, #f8cfff, skyblue)";
          suggestionContainer.style.color = "#ecf0f1";
          suggestionContainer.style.padding = "10px";
          suggestionContainer.style.zIndex = "999";
          suggestionContainer.style.overflowY='auto'
          
          suggestionContainer.style.scrollbarColor = "transparent transparent";

          // Add styles for WebKit browsers
          suggestionContainer.style.scrollbarWidth = "thin";
          suggestionContainer.style.scrollbarTrackColor = "#f0f0f0";
          suggestionContainer.style.scrollbarFaceColor = "linear-gradient(45deg, #4CAF50, #2196F3)";
          suggestionContainer.style.scrollbarHighlightColor = "transparent";
          suggestionContainer.style.scrollbarShadowColor = "transparent";

          // Apply scrollbar styles
          
          // Create the close button
          const closeButton = document.createElement("div");
          closeButton.style.textAlign = "right";
          closeButton.style.fontFamily='monospace'
          closeButton.style.position='sticky'
          closeButton.style.top='0px';
          closeButton.innerText = "X";
          closeButton.style.color = "#e74c3c";
          closeButton.style.fontSize = "38px";
          closeButton.style.cursor = "pointer";
  
      
      closeButton.onclick = () => {
          const container=document.getElementById('suggestion-container')
          if(container)
              container.remove()
      };
      
      suggestionContainer.appendChild(closeButton);
      
   let  tempSFields=Object.keys(singleFields)

   let multiSFields=Object.keys(multiFields)

   if(!tempSFields.length && !multiSFields.length)
          return false
    if(!isON)
        return false
    console.log('issss on brother ',isON)

   
    for (let i = 1; i <= 2; i++) {
      const suggestion = document.createElement("div");
      suggestion.style.paddingBottom='20px'
      suggestion.style.fontFamily='monospace'
      suggestion.style.width='100%'
      suggestion.style.color='black'
      suggestion.style.display = "flex";
      suggestion.style.flexWrap='wrap'
      suggestion.style.justifyContent = "space-around";
  
      if (i == 1) {
        tempSFields?.map((x,i) => {
          const container = document.createElement("div");
          container.style.margin='5px'
          container.style.textAlign='center'
                      const heading = document.createElement("h3");
                      heading.innerText=x
                      heading.style.margin='revert'
                      const item = document.createElement("span");
                      item.style.display='block'
                      item.style.padding='15px'
                      item.style.background='white'
                      item.style.borderRadius='20%'
                      item.style.cursor = "pointer";
                      item.innerText=singleFields[x]
                      container.appendChild(heading)
                      container.appendChild(item)
        
          
            item.onclick = () => {
              handleUserSelection(singleFields[x]);
              console.log('single fields',singleFields[x])
            }
            
            container.appendChild(heading);
            container.appendChild(item);
            suggestion.appendChild(container)
          
        });
      } else {
        const hr=document.createElement('hr')
        hr.style.border='1px outset black'
        hr.style.color='pink'

        hr.style.margin='10px'
        hr.style.width='100%'
        suggestion.appendChild(hr)

        
                multiSFields?.map((x, i) => {

                  
            const container = document.createElement("div");
            container.style.textAlign='center'
            container.style.margin='5px'
            const heading = document.createElement("h3");
              heading.innerText=x
            const containerChips = document.createElement("div");
            containerChips.style.display = "flex";
            containerChips.style.flexWrap = "wrap";  // Set flexWrap on containerChips instead of container
            container.style.padding='15px'
            container.style.background='white'
            container.style.borderRadius='20%'
            containerChips.style.justifyContent = "space-evenly";

            multiFields[x].map((v) => {
              const item = document.createElement("span");
              item.style.padding='5px'
              item.style.margin='2px'
              item.style.background='whitesmoke'
              item.style.width='fit'
              item.style.maxWidth='100px'
              item.style.borderRadius='30%'
              item.style.textOverflow='ellipsis'
              item.style.cursor = "pointer";              item.onclick = (x) => {
                handleUserSelection(','+v);
                
              };
              item.innerText = v;
              containerChips.appendChild(item);
            });
  
            container.appendChild(heading);
            container.appendChild(containerChips);
            suggestion.appendChild(container);
          })
      }
  
      suggestionContainer.appendChild(suggestion);
    }



    return suggestionContainer
    }


      FilledContainer=CreateContainer()
      if(!FilledContainer)
            return 


  const inputRect = inputElement.getBoundingClientRect();
  console.log("createing bro", inputElement, inputRect);

  const height = inputRect.height;

  const parent = inputElement.parentElement;

  console.log('children rectbound and parent',inputRect.top,parent.getBoundingClientRect().height)
  parent.style.position = "relative";
  FilledContainer.style.position = "absolute";

  FilledContainer.style.top = `${50}px`;

  FilledContainer.style.left = `${inputRect.left}px`;

  
  FilledContainer.style.display='block'
  console.log('rendering the filled container',FilledContainer)
parent.appendChild(FilledContainer)
};



// now we have to attach the event listener here so it can process the request coming from the background Script..

chrome.runtime.onMessage.addListener(handleMessage);
console.log("event listenenre started...");
