chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Content script sent a message:', message);


});

const onPageLoad =(tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    console.log(`Tab ${tabId} has finished loading`,changeInfo,tab);
    console.log(CreateContainer())
    chrome.tabs.sendMessage(tabId,CreateContainer(),(msg)=>{

      console.log('call back called',msg)
    });
    console.log('message sent...')
    console.log('localstorage',localStorage.getItem('name'))
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
        console.log("isValues is false in singleArray", isValue);
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
        console.log("is value is  in multi-fields", isValue);
      }
    });
  }

}
return {singleValues:singleValuesObject,multiValues:multiValuesObject}
}
chrome.tabs.onUpdated.addListener(onPageLoad);

console.log('background Script is Workingg......')