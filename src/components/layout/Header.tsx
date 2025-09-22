import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Building } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const { user, isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLanguageChange = () => {
    setLanguage(language === 'ru' ? 'uz' : 'ru');
  };

  // Add scroll listener to detect when header should change background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="rounded-full bg-blue-600 p-2 mr-2">
              <Building className="h-6 w-6 text-white" />
            </div>
            <span className={`font-bold text-xl ${isScrolled ? 'text-blue-800' : 'text-white'}`}>
              Vobinfo
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'} transition-colors`}>
              {t('home')}
            </Link>
            <Link to="/news" className={`${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'} transition-colors`}>
              {t('news')}
            </Link>
            <Link to="/contact" className={`${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'} transition-colors`}>
              {t('contact')}
            </Link>
            
            {isAuthenticated ? (
              <>
                {user?.role === 'admin' && (
                  <Link to="/admin" className={`${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'} transition-colors`}>
                    {t('adminDashboard')}
                  </Link>
                )}
                <button 
                  onClick={logout}
                  className={`${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'} transition-colors`}
                >
                  {t('logout')}
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className={`${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'} transition-colors`}>
                  {t('login')}
                </Link>
                <Link 
                  to="/register"
                  className={`${isScrolled ? 'bg-blue-600 hover:bg-blue-700' : 'bg-white hover:bg-gray-100'} px-4 py-2 rounded-md font-medium ${isScrolled ? 'text-white' : 'text-blue-600'} transition-colors`}
                >
                  {t('register')}
                </Link>
              </>
            )}
            
            <button 
              onClick={handleLanguageChange}
              className={`flex items-center ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'} transition-colors`}
              aria-label="Change language"
            >
              <Globe className="h-5 w-5 mr-1" />
              <span className="uppercase">{language === 'ru' ? 'UZ' : 'RU'}</span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={handleLanguageChange}
              className={`mr-4 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              aria-label="Change language"
            >
              <Globe className="h-6 w-6" />
            </button>
            <button 
              onClick={toggleMenu}
              className={`${isScrolled ? 'text-gray-700' : 'text-white'}`}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-4 py-6 space-y-4">
            <Link to="/" className="block text-gray-700 hover:text-blue-600">
              {t('home')}
            </Link>
            <Link to="/news" className="block text-gray-700 hover:text-blue-600">
              {t('news')}
            </Link>
            <Link to="/contact" className="block text-gray-700 hover:text-blue-600">
              {t('contact')}
            </Link>
            
            {isAuthenticated ? (
              <>
                {user?.role === 'admin' && (
                  <Link to="/admin" className="block text-gray-700 hover:text-blue-600">
                    {t('adminDashboard')}
                  </Link>
                )}
                <button 
                  onClick={logout}
                  className="block text-gray-700 hover:text-blue-600 w-full text-left"
                >
                  {t('logout')}
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block text-gray-700 hover:text-blue-600">
                  {t('login')}
                </Link>
                <Link to="/register" className="block text-gray-700 hover:text-blue-600">
                  {t('register')}
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;