import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Button from '../components/ui/Button';
import DepartmentCard from '../components/departments/DepartmentCard';
import NewsCard from '../components/news/NewsCard';
import departments from '../data/departmentsData';
import { fetchNews } from '../api/api';

const HomePage = () => {
  const { t } = useLanguage();
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Yangiliklarni backenddan olish
    fetchNews()
      .then(response => {
        console.log(response);
        setNewsList(response);
      })
      .catch(error => {
        console.error('Xatolik:', error);
      });
  }, []);

  // Eng so‘nggi 3 ta yangilikni olish
  const latestNews = [...newsList]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-r from-blue-900 to-blue-700 text-white relative overflow-hidden"
        style={{
          backgroundImage: `url(/minor.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
              {t('welcomeTitle')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in-up animation-delay-200">
              {t('welcomeSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              {/* <Link to="/department">
                <Button size="lg" variant="primary">
                  {t('viewDepartments')}
                </Button>
              </Link> */}
              {/* <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  {t('contact')}
                </Button>
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">{t('departments')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('welcomeSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((department) => (
              <DepartmentCard
                key={department.id}
                id={department.id}
                nameKey={department.nameKey}
                Icon={department.icon}
                color={department.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">{t('latestNews')}</h2>
              <p className="text-gray-600 max-w-2xl">
                {t('newsSubtitle')}
              </p>
            </div>
            <Link to="/news" className="mt-4 md:mt-0 inline-flex items-center text-blue-600 hover:text-blue-800">
              {t('readMore')}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.length > 0 ? (
              latestNews.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))
            ) : (
              <p>Hozircha yangiliklar mavjud emas.</p>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('contactTitle')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('contactSubtitle')}
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              {t('contact')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;