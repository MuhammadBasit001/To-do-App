import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TodoInput from './assets/Components/Todo'  // ✅ Make sure the path is correct

function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoInput />} />
        </Routes>
      </BrowserRouter>
    </section>
  )
}

export default App

