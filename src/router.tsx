import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexLayaout from './layouts/IndexLayaout'
import IndexPage from './pages/IndexPage'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<IndexLayaout />}>
                    <Route path="/" element={<IndexPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}