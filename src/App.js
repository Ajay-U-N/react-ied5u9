import { useState } from 'react'
import './App.css'
import Card from './Card'
import { faker } from '@faker-js/faker'

function App() {
  const [name, setName] = useState('Alan Smith')
  const [count, setCount] = useState(0);

   const bMarkup = (
    <div>
    <button>B1</button>
    <button>B2</button>
    </div>
   )
   const changeNameHandler = (name) => {
    setName(name)
   }
  return (
    <div className="app">
      
      <button onClick={changeNameHandler}>Change Name</button>
      <button onClick={() => setCount(count + 1)}>
    Click me {count}
  </button>
  
      <Card 
      name={faker.name.firstName()}
      title={faker.name.jobTitle()}
      img={'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/752.jpg'}
      onChangeName = {changeNameHandler}
      >
      {bMarkup}
      </Card>


      {/* <Card 
      name={faker.name.firstName()}
      title={faker.name.jobTitle()}
      img={faker.image.avatar()}
      >
      {bMarkup}
      </Card>
      <Card 
      name={faker.name.firstName()}
      title={faker.name.jobTitle()}
      img={faker.image.avatar()}
      >
      {bMarkup}
      </Card> */}
      
    </div>
  );
}

export default App;
