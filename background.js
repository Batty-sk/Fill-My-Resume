chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Content script sent a message:', message);
  
    if (message.action === 'changeBackgroundColor') {
      document.body.style.backgroundColor = message.color;
      sendResponse({ result: 'Color changed successfully' });
    }
  });
  
  const onPageLoad =(tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
      console.log(`Tab ${tabId} has finished loading`,changeInfo,tab);
      chrome.tabs.sendMessage(tabId, { action: 'scriptExecuted' },(msg)=>{
        console.log('call back called',msg)
      });
      console.log('message sent...')
      }
  };
  const selectElementsInCurrentTab = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTabId = tabs[0].id;
  
      chrome.tabs.executeScript(activeTabId, { code: `
        const elements = document.querySelectorAll('input[type="text"]');
        console.log(elements)
        const elementData = Array.from(elements).map(element => {
          return {
            value: element?.value,
            name: element?.name,
            id: element?.id,
            // Add other properties as needed
          };
          
        });
        elementData;
      `}, (result) => {
        // Handle the result containing the selected elements
        console.log('Selected elements:', result);
  
        // Do something with the result...
      });
    });
  };
  
  // Call the function to select elements when needed
  
  const handleFetchInputs=()=>{
    console.log('handle Fetch Input is running....')
  
  
  
  
  }
  
  chrome.tabs.onUpdated.addListener(onPageLoad);
  
  
  console.log('background Script is Workingg......')