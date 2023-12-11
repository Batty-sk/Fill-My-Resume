chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if(message === 'turnOFF')
  {
    console.log('message',message,'sender',sender,sendResponse)
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      if (tabs && tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, 'turnOFF', function(response) {
          console.log('sending turning off request');
        });
      }
    });
      }
  else if(message === 'turnON'){
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      if (tabs && tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id,CreateContainer(), function(response) {
          console.log('sending turning On Reuest');
        });
      }
    });
  }

});

const onPageLoad =(tabId, changeInfo, tab) => {
  const isSet=localStorage.getItem('fmf')
  if(isSet == null)
      return

  if (changeInfo.status === 'complete' && JSON.parse(isSet)) {
    chrome.tabs.sendMessage(tabId,CreateContainer(),(msg)=>{

    });
    }
};
const onUpdateValues=(tabId)=>{
  chrome.tabs.sendMessage(tabId,{suggestionContainer:CreateContainer()},(msg)=>{})
}

// Call the function to select elements when needed


const signlefields = [
  "name",
  "firstName",
  "lastName",
  "gender",
  "ethnicity",
  "email",
  "phoneNo",
  "jobTitle",
  "aboutMe",
];
const multifields = [
  "skills",
  "languages",
  "interPersonalSkills",
  "achivements",
  "hobbies",
  "address",
  "workexperience",
  "education",
  "projects",
  "socialMediaLinks",
  "whyDoWeHireYou",
];


const CreateContainer=()=>{
  const singleValuesObject={}
  const multiValuesObject={}


for (let i = 1; i <= 2; i++) {
  if (i == 1) {
    signlefields.map((x) => {
      const isValue = localStorage.getItem(x);
      if (isValue) {
          singleValuesObject[x]=isValue
      } else {
      }
      
    });
  } else {
    multifields.map((x, i) => {
      const isValue = JSON.parse(localStorage.getItem(x));
      if (isValue && isValue.length) {
        let arr=[]
        isValue.map((chips) => {
          arr.push(chips)
        });
        multiValuesObject[x]=arr

      } else {
      }
    });
  }

}
return {singleValues:singleValuesObject,multiValues:multiValuesObject}
}
chrome.tabs.onUpdated.addListener(onPageLoad);

console.log('background Script is Workingg......')