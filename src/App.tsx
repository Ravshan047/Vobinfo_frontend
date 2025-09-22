import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
// import DepartmentPage from './pages/DepartmentPage';
import NewsPage from './pages/NewsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminDashboard from './pages/AdminDashboard';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import ElectricPage from './pages/ElectricPage';
import GasPage from './pages/GasPage';
import PolicePage from './pages/PolicePage';
import WaterPage from './pages/WaterPage';
import EducationPage from './pages/EducationPage';
import HealthcarePage from './pages/HealthcarePage';

// Context
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/department/:slug" element={<DepartmentPage />} /> slug deb o‘zgartirildi */}
                <Route path="/department/electricity" element={<ElectricPage />} />
                <Route path="/department/police" element={<PolicePage />} />
                <Route path="/department/water" element={<WaterPage />} />
                <Route path="/department/gas" element={<GasPage />} />
                <Route path="/department/education" element={<EducationPage /> } />
                <Route path="/department/health" element={<HealthcarePage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
