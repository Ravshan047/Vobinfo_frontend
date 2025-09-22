import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Button from '../components/ui/Button';

const NotFoundPage = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <h2 className="text-3xl font-bold mt-4 mb-6">{t('pageNotFound')}</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button variant="primary" size="lg">
            {t('backToHome')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;