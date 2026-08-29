import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-gray-50">
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
