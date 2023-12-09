import React from 'react'
import Form from './Form'
import Header from './components/Header'
import ToggleBar from './components/ToggleBar'

const App:React.FC=()=> {

    const handleSubmit = (event:any) => {
      event.preventDefault(); // Prevent the default form submission behavior
      // Your custom handling logic here
    };
  return (
    <div className='border'>
    <Header />
    <main>
      <div className='flex flex-col items-center justify-center p-3  '>
          <ToggleBar />
          <div className='mt-5 bg-[#13191E]  w-[90%]' style={{borderRadius:'30px',boxShadow:'0px 0px 3px white'}}>
            <form onSubmit={handleSubmit}>

              <Form />
              
            </form>

          </div>

      </div>
    </main>
    
    
    </div>
  )
}

export default App
