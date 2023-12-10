
let singleFields=null
let multiFields=null
let FilledContainer=null

const handleMessage = (Data, sender, CallBackFun) => { //isme sida suggestion contatiner bhejneka 
  console.log("Background script sent a message:", Data);

  singleFields=Data.singleValues
  multiFields=Data.multiValues

    const CreateContainer=()=>{
      const suggestionContainer = document.createElement("div");
      suggestionContainer.id = "suggestion-container";
      suggestionContainer.className = "suggestion-container";
      suggestionContainer.style.display = "none";
      suggestionContainer.style.position = "fixed";
      suggestionContainer.style.top = "50%";
      suggestionContainer.style.left = "50%";
      suggestionContainer.style.transform = "translate(-50%, -50%)";
      suggestionContainer.style.borderRadius = "8px";
      suggestionContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      suggestionContainer.style.maxHeight = "350px";
      suggestionContainer.style.height = "250px";
      suggestionContainer.style.maxWidth = "200px";
      suggestionContainer.style.width = "150px";
      suggestionContainer.style.overflowY = "auto";
      suggestionContainer.style.background = "#3498db";
      suggestionContainer.style.color = "#ecf0f1";
      suggestionContainer.style.display = "flex";
      suggestionContainer.style.flexWrap = "wrap";
      suggestionContainer.style.justifyContent = "space-evenly";
      suggestionContainer.style.padding = "10px";
      
      const closeButton = document.createElement("div");
      closeButton.innerText = "X";
      closeButton.style.color = "#e74c3c";
      closeButton.style.fontSize = "18px";
      closeButton.style.cursor = "pointer";
      closeButton.style.position = "absolute";
      closeButton.style.top = "8px";
      closeButton.style.right = "8px";
      
      closeButton.onclick = () => {
          suggestionContainer.style.display = "none";
      };
      
      suggestionContainer.appendChild(closeButton);
      
   let  tempSFields=Object.keys(singleFields)

   let multiSFields=Object.keys(multiFields)

      console.log('temps and multis',tempSFields,multiSFields)



   const handleUserSelection = (selection) => {
      console.log("on click", selection);
    };



    for (let i = 1; i <= 2; i++) {
      const suggestion = document.createElement("div");

      suggestion.style.display = "flex";
      suggestion.style.justifyContent = "space-evenly";
  
      if (i == 1) {
        tempSFields?.map((x,i) => {
            const container = document.createElement("div");
            const heading = document.createElement("h3");
            const item = document.createElement("span");
            item.style.cursor = "pointer";
            item.onclick = () => {
              handleUserSelection(singleFields[x]);
            }
            
            heading.innerText = x;
            item.innerText = singleFields[x];
  
            suggestion.appendChild(container);
  
            container.appendChild(heading);
            container.appendChild(item);
            suggestion.appendChild(container)
          
        });
      } else {
          suggestion.appendChild(document.createElement('hr'))
        multiSFields?.map((x, i) => {
            const container = document.createElement("div");
            const heading = document.createElement("h1");
            heading.innerText=x
            const containerChips = document.createElement("div");
            containerChips.style.display = "flex";
            container.style.flexWrap = "wrap";
            containerChips.style.justifyContent = "space-evenly";


            multiFields[x].map((v) => {
              const item = document.createElement("span");
              item.style.cursor = "pointer";
              item.onclick = () => {
                handleUserSelection(v);
              };
              item.innerText = x;
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

    console.log('filled container ',FilledContainer)





  const inputElements = document.getElementsByTagName("input");
  const textAreaElements = document.getElementsByTagName("textarea");




  const handleInputClick = (eve) => {
    console.log("ys sir input sir", eve);
    handleCreateAndInsert(eve);
  };

  console.log(
    "input lements",
    inputElements,
    "textAreaelements",
    textAreaElements
  );
  if (inputElements) {
    for (let i = 0; i < inputElements.length; i++) {
      inputElements[i].removeEventListener("focus", handleInputClick);
      inputElements[i].addEventListener("focus", handleInputClick);

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

  //handling the userselection
  const inputElement = event.target;

  const keys = Object.keys(localStorage);
  console.log('local storage babay',keys,localStorage.getItem('name'))

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
 setTimeout(()=>parent.appendChild(FilledContainer),400)
};



// now we have to attach the event listener here so it can process the request coming from the background Script..

chrome.runtime.onMessage.addListener(handleMessage);
console.log("event listenenre started...");
