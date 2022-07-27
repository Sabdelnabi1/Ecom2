import Navbar from "./Component/Nav"
import Products from "./Pages/Products"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import { Route, Routes, BrowserRouter } from "react-router-dom"

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Products" element={<Products />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;