import { Routes, Route } from 'react-router-dom'
import Index from './Index'
import About from './About'
import Contact from './Contact'
import Blog from './Blog'
import Recipe from './Recipe'
import Product from './Components/Products/Product'
// import LoginSignUp from './LogSystem/pages/loginSignUp'
import Login from './LogSystem/pages/Login'
import Register from './LogSystem/pages/Register'

const instructions = [
  "In a wok, heat sesame oil over medium-high heat.",
  "Add minced ginger and garlic, sauté until fragrant.",
  "Add cubed tofu and stir-fry until golden brown.",
  "Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp.",
  "Pour soy sauce over the stir-fry and toss to combine.",
  "Serve over cooked rice."
  ]

const ingredients = [
  "Tofu, cubed",
  "Broccoli florets",
  "Carrots, sliced",
  "Bell peppers, sliced",
  "Soy sauce",
  "Ginger, minced",
  "Garlic, minced",
  "Sesame oil",
  "Cooked rice for serving"
  ]

function App() {

  return (
    <Routes>
      <Route path='/' element={<Index />} ></Route>

      <Route path='/register' element={<Register />} ></Route>
      <Route path='/login' element={<Login />} ></Route>

      <Route path='/about' element={<About />} ></Route>
      <Route path='/contact' element={<Contact />} ></Route>
      <Route path='/blog' element={<Blog />} ></Route>
      <Route path='/blog/product' element={<Product name="La foudi" icon={"/images/koulibaly.jpg"} servings={4} instructions={instructions} ingredients={ingredients} prepTimeMinutes={20} cookTimeMinutes={15} difficulty={"Medium"} cuisine={"Italian"} calories={250} type={"Dinner"} />} ></Route>
      <Route path='/recipe' element={<Recipe />} ></Route>
    </Routes>
  )
}

export default App
