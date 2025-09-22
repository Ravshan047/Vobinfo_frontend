import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import NewsCard from '../components/news/NewsCard';
import departments from '../data/departmentsData';
import { fetchNews } from '../api/api';
import { NewsItem } from '../types/news';

const NewsPage = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<string | null>(null);
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchNews();
        const sorted = [...data].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setNewsList(sorted);
      } catch (err) {
        const errorMsg = err?.error || 'Yangiliklarni yuklab bo‘lmadi.';
        setError(errorMsg);
        console.error('News fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  const filteredNews = filter ? newsList.filter(n => n.department === filter) : newsList;

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header FONI */}
      <div className="h-20 bg-blue-800 shadow"></div>

      {/* Header Matni */}
      <div className="mx-auto flex items-center justify-center">
        <div className="text-center p-4 rounded">
          <p className="mt-2 text-sm text-gray-600"></p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${filter === null ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            All
          </button>
          {departments.map(dept => (
            <button
              key={dept.id}
              onClick={() => setFilter(dept.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${filter === dept.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              {t(dept.nameKey)}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="text-center text-gray-500">{t('loading')}...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map(news => <NewsCard key={news.id} news={news} />)}
          </div>
        ) : (
          <p className="text-center text-gray-500">{t('noNews')}</p>
        )}
      </div>
    </div>
  );
};

export default NewsPage;