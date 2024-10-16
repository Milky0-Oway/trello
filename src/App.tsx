import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { BoardPage } from './pages/BoardPage/BoardPage';
import { Sidebar } from './components/Sidebar/Sidebar';
import { main } from './index.css';

export function App() {
    return (
        <Router>
            <div className={main}>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/boards/:boardId" element={<BoardPage />} />
                </Routes>
            </div>
        </Router>
    );
}
