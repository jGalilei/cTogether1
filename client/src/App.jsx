import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Toast from "./components/toast/Toast"
import HomePage from "./pages/HomePage"
import EditorPage from "./pages/EditorPage"

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/editor/:roomId" element={<EditorPage />} />
                </Routes>
            </Router>
            <Toast /> {/* Toast component from react-hot-toast */}
        </>
    )
}

export default App
