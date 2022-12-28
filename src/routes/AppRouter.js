import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import ProductDeatilsPage from '../pages/ProductDeatilsPage'
import SearchProductResultsPage from '../pages/SearchProductResultsPage'



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/items" element={<MainLayout><SearchProductResultsPage /></MainLayout>} />
        <Route path="/items/:id" element={<MainLayout><ProductDeatilsPage /></MainLayout>} />
        <Route path="/*" element={<MainLayout><HomePage /></MainLayout>} />
      </Routes>
    </BrowserRouter>

  )
}

export default AppRouter