import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { NewsItem } from '../../types/news';

interface Props {
  news: NewsItem;
}

const NewsCard = ({ news }: Props) => {
  const { t, language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFullText, setShowFullText] = useState(false); // Qo'shildi

  // Media array’ini tayyorlash (har doim video birinchi bo‘lsin)
  const mediaItems = [];
  if (news.video) mediaItems.push({ type: 'video', src: news.video }); // Video har doim birinchi
  if (news.image) mediaItems.push({ type: 'image', src: news.image }); // Rasm keyin

  // Avtomatik o‘tkazish (masalan, 15 soniya keyin rasmga o‘tish)
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (mediaItems.length > 1 && currentSlide === 0 && news.video) {
      timer = setTimeout(() => setCurrentSlide(1), 15000); // 15 soniya
    }
    return () => clearTimeout(timer);
  }, [currentSlide, mediaItems.length, news.video]);

  // Oldinga yoki orqaga o‘tkazish
  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % mediaItems.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  // Matnni 4 qator bilan cheklash uchun tekshirish
  const content = language === 'uz' ? news.contentUz : news.contentRu;
  const isLongContent = content.split('\n').length > 4 || content.length > 200; // Taxminiy uzunlik
  const truncatedContent = isLongContent
    ? content.split('\n').slice(0, 4).join('\n').substring(0, 200) + '...'
    : content;

  // To‘liq matnga o‘tish (endi navigate emas, o‘zgaruvchini yangilash)
  const handleReadMore = () => {
    setShowFullText(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {mediaItems.length > 0 ? (
        <div className="relative">
          <div className="w-full h-48 overflow-hidden">
            {mediaItems[currentSlide].type === 'video' && (
              <video
                controls
                className="w-full h-full object-cover rounded-t-lg"
              >
                <source src={mediaItems[currentSlide].src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            {mediaItems[currentSlide].type === 'image' && (
              <img
                src={mediaItems[currentSlide].src}
                alt={language === 'uz' ? news.titleUz : news.titleRu}
                className="w-full h-full object-cover rounded-t-lg"
              />
            )}
          </div>
          {/* Navigatsiya tugmalari */}
          {mediaItems.length > 1 && (
            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-2 transform -translate-y-1/2">
              <button
                onClick={goToPrev}
                className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
              >
                &lt;
              </button>
              <button
                onClick={goToNext}
                className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
              >
                &gt;
              </button>
            </div>
          )}
          {/* Slider nuqtalar */}
          {mediaItems.length > 1 && (
            <div className="flex justify-center mt-2 space-x-2">
              {mediaItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-t-lg">
          No media available
        </div>
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">
          {language === 'uz' ? news.titleUz : news.titleRu}
        </h2>
        <p
          className={`text-gray-600 text-sm ${isLongContent && !showFullText ? 'line-clamp-4 overflow-hidden' : ''}`}
          style={{ maxHeight: isLongContent && !showFullText ? '6rem' : 'none', whiteSpace: 'pre-line' }}
        >
          {showFullText ? content : truncatedContent}
        </p>
        {isLongContent && !showFullText && (
          <button
            onClick={handleReadMore}
            className="mt-2 text-blue-500 hover:text-blue-700 underline"
          >
            To‘liq matn
          </button>
        )}
        <p className="text-xs text-gray-400 mt-2">{new Date(news.date).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default NewsCard;