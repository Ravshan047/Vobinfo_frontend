export interface NewsItem {
  id: string;
  titleRu: string;
  titleUz: string;
  contentRu: string;
  contentUz: string;
  date: string;
  image: string;
  department?: string;
}

const newsData: NewsItem[] = [
  {
    id: '1',
    titleRu: 'Плановое отключение электроэнергии в центральном районе',
    titleUz: 'Markaziy tumanda rejalashtirilgan elektr uzilishi',
    contentRu: 'В связи с плановыми ремонтными работами, 15 июня с 9:00 до 17:00 будет произведено отключение электроэнергии в центральном районе города. Просим жителей заранее подготовиться к временным неудобствам.',
    contentUz: 'Rejalashtirilgan ta\'mirlash ishlari munosabati bilan 15-iyun kuni soat 9:00 dan 17:00 gacha shaharning markaziy tumanida elektr energiyasi o\'chiriladi. Aholidan vaqtinchalik noqulayliklarga oldindan tayyorlanishini so\'raymiz.',
    date: '2025-06-10',
    image: 'https://images.pexels.com/photos/8853537/pexels-photo-8853537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    department: 'electricity'
  },
  {
    id: '2',
    titleRu: 'Новая программа модернизации общественного транспорта',
    titleUz: 'Jamoat transportini modernizatsiya qilish yangi dasturi',
    contentRu: 'Городская администрация запускает новую программу модернизации общественного транспорта. В течение следующих двух лет планируется заменить 70% автобусного парка на современные экологичные модели. Это улучшит качество воздуха и комфорт пассажиров.',
    contentUz: 'Shahar ma\'muriyati jamoat transportini modernizatsiya qilish yangi dasturini ishga tushirmoqda. Keyingi ikki yil ichida avtobus parkining 70 foizini zamonaviy ekologik toza modellarga almashtirish rejalashtirilgan. Bu havo sifatini va yo\'lovchilar qulayligini yaxshilaydi.',
    date: '2025-06-08',
    image: 'https://images.pexels.com/photos/2147486/pexels-photo-2147486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    department: 'transport'
  },
  {
    id: '3',
    titleRu: 'Открытие нового медицинского центра',
    titleUz: 'Yangi tibbiyot markazining ochilishi',
    contentRu: 'В южном районе города открылся новый современный медицинский центр, оснащенный передовым оборудованием. Центр будет предоставлять широкий спектр медицинских услуг для взрослых и детей, включая диагностику, лечение и реабилитацию.',
    contentUz: 'Shaharning janubiy tumanida eng ilg\'or uskunalar bilan jihozlangan yangi zamonaviy tibbiyot markazi ochildi. Markaz kattalar va bolalar uchun diagnostika, davolash va reabilitatsiyani o\'z ichiga olgan keng ko\'lamli tibbiy xizmatlarni taqdim etadi.',
    date: '2025-06-05',
    image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    department: 'health'
  },
  {
    id: '4',
    titleRu: 'Модернизация системы водоснабжения',
    titleUz: 'Suv ta\'minoti tizimini modernizatsiya qilish',
    contentRu: 'Начинается масштабный проект по модернизации системы водоснабжения города. Проект включает замену устаревших труб, установку современных фильтров и внедрение автоматизированной системы контроля качества воды.',
    contentUz: 'Shahar suv ta\'minoti tizimini modernizatsiya qilish bo\'yicha keng qamrovli loyiha boshlanmoqda. Loyiha eskirgan quvurlarni almashtirish, zamonaviy filtrlarni o\'rnatish va suv sifatini nazorat qilishning avtomatlashtirilgan tizimini joriy etishni o\'z ichiga oladi.',
    date: '2025-06-01',
    image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    department: 'water'
  },
  {
    id: '5',
    titleRu: 'Программа поддержки молодых специалистов',
    titleUz: 'Yosh mutaxassislarni qo\'llab-quvvatlash dasturi',
    contentRu: 'Городская администрация запускает программу поддержки молодых специалистов. Программа включает льготное жилье, финансовую помощь и возможности для профессионального развития. Заявки принимаются до 30 июня.',
    contentUz: 'Shahar ma\'muriyati yosh mutaxassislarni qo\'llab-quvvatlash dasturini ishga tushirmoqda. Dastur imtiyozli uy-joy, moliyaviy yordam va kasbiy rivojlanish imkoniyatlarini o\'z ichiga oladi. Arizalar 30-iyungacha qabul qilinadi.',
    date: '2025-05-28',
    image: 'https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '6',
    titleRu: 'Новые меры безопасности в общественных местах',
    titleUz: 'Jamoat joylarida yangi xavfsizlik choralari',
    contentRu: 'Департамент полиции внедряет новые меры безопасности в общественных местах. Меры включают установку дополнительных камер видеонаблюдения, увеличение количества патрулей и создание мобильного приложения для экстренной связи с полицией.',
    contentUz: 'Politsiya departamenti jamoat joylarida yangi xavfsizlik choralarini joriy etmoqda. Choralar qo\'shimcha videokuzatuv kameralarini o\'rnatish, patrullar sonini ko\'paytirish va politsiya bilan favqulodda aloqa uchun mobil ilovani yaratishni o\'z ichiga oladi.',
    date: '2025-05-25',
    image: 'https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    department: 'police'
  }
];

export default newsData;