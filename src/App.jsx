import './App.css'
import { Router } from 'react-router-dom'
import Navbar from './conponents/navbar'
import BretHart from '/public/BretHart-Transperant.bmp'
import Wrestler from './conponents/infomatic'
function App() {
  

  return (
    <div>
      <Navbar />
      <Wrestler 
        Image={BretHart}
        Alt="Bret Hart"
        Nickname="The Hitman"
        Name="Bret Hart"
        Description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est natus, reiciendis voluptate omnis accusamus asperiores neque reprehenderit sit, minus vitae rem! Ducimus incidunt corporis quibusdam ratione deleniti accusantium voluptas suscipit modi saepe quaerat odit cum, nisi delectus enim sunt dolores temporibus culpa. Quis vitae esse dolores impedit. Enim, voluptate qui."
        />
    </div>
      
    
  )
}

export default App
