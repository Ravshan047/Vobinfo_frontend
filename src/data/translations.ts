const translations = {
  ru: {
    // Navigation
    home: 'Главная',
    departments: 'Департаменты',
    news: 'Новости',
    contact: 'Контакты',
    login: 'Вход',
    register: 'Регистрация',
    logout: 'Выход',
    adminDashboard: 'Панель администратора',
    
    // Homepage
    welcomeTitle: 'Добро пожаловать на официальный портал города',
    welcomeSubtitle: 'Полная информация о городских службах и услугах',
    viewDepartments: 'Просмотр департаментов',
    latestNews: 'Последние новости',
    readMore: 'Читать далее',
    
    // Departments
    departmentElectricity: 'Электроснабжение',
    departmentGas: 'Газоснабжение',
    departmentPolice: 'Полиция',
    departmentInternalAffairs: 'Внутренние дела',
    departmentWater: 'Водоснабжение',
    departmentEducation: 'Образование',
    departmentHealth: 'Здравоохранение',
    departmentTransport: 'Транспорт',
    departmentDetails: 'Подробная информация',
    services: 'Услуги',
    contactInfo: 'Контактная информация',
    workingHours: 'Рабочие часы',
    
    // Department Descriptions
    electricityDepartmentDescription: 'Департамент электроснабжения отвечает за бесперебойную подачу электроэнергии в городе, обслуживание электрических сетей и модернизацию инфраструктуры.',
    gasDepartmentDescription: 'Департамент газоснабжения обеспечивает безопасную и надежную подачу газа всем жителям и предприятиям города.',
    policeDepartmentDescription: 'Городская полиция обеспечивает общественную безопасность, предотвращает и расследует преступления, поддерживает общественный порядок.',
    internalAffairsDepartmentDescription: 'Департамент внутренних дел отвечает за гражданскую регистрацию, выдачу документов и защиту прав граждан.',
    waterDepartmentDescription: 'Департамент водоснабжения обеспечивает подачу чистой питьевой воды и управляет системой канализации и очистки воды.',
    educationDepartmentDescription: 'Департамент образования контролирует все образовательные учреждения города и реализует образовательные программы для всех возрастов.',
    healthDepartmentDescription: 'Департамент здравоохранения управляет городскими больницами, поликлиниками и программами профилактики заболеваний.',
    transportDepartmentDescription: 'Транспортный департамент отвечает за общественный транспорт, дорожную инфраструктуру и регулирование движения.',
    
    // Services
    electricityConnection: 'Подключение к электросети',
    electricityBilling: 'Оплата электроэнергии',
    electricityOutage: 'Сообщение об отключении',
    electricityConnectionDescription: 'Услуга по подключению новых объектов к городской электросети с оформлением всех необходимых документов.',
    electricityBillingDescription: 'Система оплаты счетов за электроэнергию, проверка задолженностей и история платежей.',
    electricityOutageDescription: 'Сервис для сообщения о перебоях в электроснабжении и отслеживания статуса ремонтных работ.',
    
    gasConnection: 'Подключение газоснабжения',
    gasBilling: 'Оплата за газ',
    gasSafety: 'Газовая безопасность',
    gasConnectionDescription: 'Услуга подключения к газоснабжению для жилых и коммерческих объектов.',
    gasBillingDescription: 'Система оплаты счетов за газ, проверка задолженностей и история платежей.',
    gasSafetyDescription: 'Информация о правилах безопасного использования газа и действиях при обнаружении утечки.',
    
    policeEmergency: 'Экстренные вызовы',
    policeReport: 'Подача заявлений',
    policePermits: 'Разрешения и лицензии',
    policeEmergencyDescription: 'Экстренная служба для немедленного реагирования на чрезвычайные ситуации и преступления.',
    policeReportDescription: 'Система подачи заявлений о правонарушениях и отслеживания их статуса.',
    policePermitsDescription: 'Услуги по выдаче разрешений на оружие, охранную деятельность и другие специальные лицензии.',
    
    documentServices: 'Оформление документов',
    residencyRegistration: 'Регистрация места жительства',
    citizenComplaints: 'Обращения граждан',
    documentServicesDescription: 'Оформление и выдача паспортов, удостоверений личности и других официальных документов.',
    residencyRegistrationDescription: 'Услуги по регистрации места жительства, временной регистрации и снятия с учета.',
    citizenComplaintsDescription: 'Система подачи жалоб и предложений, касающихся городской инфраструктуры и услуг.',
    
    waterConnection: 'Подключение водоснабжения',
    waterBilling: 'Оплата за воду',
    waterQuality: 'Качество воды',
    waterConnectionDescription: 'Услуга подключения к городской системе водоснабжения для новых объектов.',
    waterBillingDescription: 'Система оплаты счетов за воду, проверка задолженностей и история платежей.',
    waterQualityDescription: 'Информация о качестве питьевой воды, результаты тестирования и стандарты безопасности.',
    
    schoolEnrollment: 'Зачисление в школу',
    educationPrograms: 'Образовательные программы',
    studentServices: 'Услуги для учащихся',
    schoolEnrollmentDescription: 'Процедура зачисления детей в дошкольные учреждения, школы и другие образовательные организации.',
    educationProgramsDescription: 'Информация об образовательных программах, курсах повышения квалификации и профессиональной переподготовке.',
    studentServicesDescription: 'Услуги для учащихся, включая стипендии, транспорт, питание и психологическую поддержку.',
    
    emergencyServices: 'Экстренная помощь',
    hospitalAdmission: 'Госпитализация',
    vaccinations: 'Вакцинация',
    emergencyServicesDescription: 'Экстренная медицинская помощь при неотложных состояниях и травмах.',
    hospitalAdmissionDescription: 'Процедура плановой госпитализации, необходимые документы и подготовка.',
    vaccinationsDescription: 'Программы вакцинации для детей и взрослых, график прививок и информация о вакцинах.',
    
    publicTransport: 'Общественный транспорт',
    roadMaintenance: 'Обслуживание дорог',
    trafficManagement: 'Управление движением',
    publicTransportDescription: 'Информация о маршрутах общественного транспорта, расписании и стоимости проезда.',
    roadMaintenanceDescription: 'Программы ремонта и обслуживания дорог, информация о текущих работах и перекрытиях.',
    trafficManagementDescription: 'Система управления дорожным движением, информация о пробках и рекомендуемых маршрутах.',
    
    // Forms
    name: 'Имя',
    email: 'Электронная почта',
    password: 'Пароль',
    confirmPassword: 'Подтвердите пароль',
    submit: 'Отправить',
    subject: 'Тема',
    message: 'Сообщение',
    
    // Auth
    loginTitle: 'Вход в систему',
    registerTitle: 'Регистрация нового пользователя',
    forgotPassword: 'Забыли пароль?',
    noAccount: 'Нет аккаунта?',
    haveAccount: 'Уже есть аккаунт?',
    createAccount: 'Создать аккаунт',
    
    // Contact
    contactTitle: 'Связаться с нами',
    contactSubtitle: 'У вас есть вопросы? Мы готовы помочь!',
    address: 'Адрес',
    phone: 'Телефон',
    
    // Footer
    copyright: 'Все права защищены',
    terms: 'Условия использования',
    privacy: 'Политика конфиденциальности',
    
    // News
    newsTitle: 'Городские новости и объявления',
    newsSubtitle: 'Будьте в курсе последних событий города',
    
    // Other
    loading: 'Загрузка...',
    error: 'Произошла ошибка',
    pageNotFound: 'Страница не найдена',
    backToHome: 'Вернуться на главную',
  },
  
  uz: {
    // Navigation
    home: 'Bosh sahifa',
    departments: "Bo'limlar",
    news: 'Yangiliklar',
    contact: 'Aloqa',
    login: 'Kirish',
    register: "Ro'yxatdan o'tish",
    logout: 'Chiqish',
    adminDashboard: 'Admin boshqaruv paneli',
    
    // Homepage
    welcomeTitle: 'Tuman rasmiy portaliga xush kelibsiz',
    welcomeSubtitle: "Tuman xizmatlari va bo'limlari haqida to'liq ma'lumot",
    viewDepartments: "Bo'limlarni ko'rish",
    latestNews: "So'nggi yangiliklar",
    readMore: 'Batafsil',
    
    // Departments
    departmentElectricity: "Elektr ta'minoti",
    departmentGas: "Gaz ta'minoti",
    departmentPolice: 'Ichki ishlar',
    departmentInternalAffairs: 'Ichki ishlar',
    departmentWater: "Suv ta'minoti",
    departmentEducation: "Ta'lim",
    departmentHealth: "Sog'liqni saqlash",
    departmentTransport: 'Transport',
    departmentDetails: "Batafsil ma'lumot",
    services: 'Xizmatlar',
    contactInfo: "Aloqa ma'lumotlari",
    workingHours: 'Ish vaqti',
    
    // Department Descriptions
    electricityDepartmentDescription: "Elektr ta'minoti departamenti tumanning uzluksiz elektr energiyasi ta'minotini, elektr tarmoqlarining xizmat ko'rsatilishini va infratuzilmaning modernizatsiyasini ta'minlaydi.",
    gasDepartmentDescription: "Gaz ta'minoti departamenti tumanning barcha aholisi va korxonalariga xavfsiz va ishonchli gaz ta'minotini ta'minlaydi.",
    policeDepartmentDescription: "Tuman politsiyasi jamoat xavfsizligini ta'minlaydi, jinoyatlarning oldini oladi va tekshiradi, jamoat tartibini saqlaydi.",
    internalAffairsDepartmentDescription: "Ichki ishlar departamenti fuqarolik ro'yxatidan o'tkazish, hujjatlarni berish va fuqarolar huquqlarini himoya qilish uchun javobgardir.",
    waterDepartmentDescription: "Suv ta'minoti departamenti toza ichimlik suvi ta'minotini ta'minlaydi va kanalizatsiya va suv tozalash tizimini boshqaradi.",
    educationDepartmentDescription: "Ta'lim departamenti tuman barcha ta'lim muassasalarini nazorat qiladi va barcha yoshdagilar uchun ta'lim dasturlarini amalga oshiradi.",
    healthDepartmentDescription: "Sog'liqni saqlash departamenti tuman kasalxonalari, poliklinikalari va kasalliklarning oldini olish dasturlarini boshqaradi.",
    transportDepartmentDescription: "Transport departamenti jamoat transporti, yo'l infratuzilmasi va harakat tartibga solish uchun javobgardir.",
    
    // Services
    electricityConnection: "Elektr tarmog'iga ulanish",
    electricityBilling: "Elektr energiyasi to'lovi",
    electricityOutage: 'Elektr uzilishi haqida xabar berish',
    electricityConnectionDescription: "Yangi obyektlarni tuman elektr tarmog'iga ulash xizmati, barcha kerakli hujjatlarni rasmiylashtirish bilan.",
    electricityBillingDescription: "Elektr energiyasi uchun to'lovlar tizimi, qarzlarni tekshirish va to'lovlar tarixi.",
    electricityOutageDescription: "Elektr ta'minotidagi uzilishlar haqida xabar berish va ta'mirlash ishlari holatini kuzatish uchun xizmat.",
    
    gasConnection: "Gaz ta'minotiga ulanish",
    gasBilling: "Gaz uchun to'lov",
    gasSafety: 'Gaz xavfsizligi',
    gasConnectionDescription: 'Turar-joy va tijorat obyektlari uchun gaz ta\'minotiga ulanish xizmati.',
    gasBillingDescription: "Gaz uchun hisob-kitoblar tizimi, qarzlarni tekshirish va to'lovlar tarixi.",
    gasSafetyDescription: "Gazdan xavfsiz foydalanish qoidalari va gaz chiqishini aniqlashda qilinadigan harakatlar haqida ma'lumot.",
    
    policeEmergency: "Favqulodda qo'ng'iroqlar",
    policeReport: 'Arizalar topshirish',
    policePermits: 'Ruxsatnomalar va litsenziyalar',
    policeEmergencyDescription: 'Favqulodda vaziyatlar va jinoyatlarga tezkor javob berish uchun favqulodda xizmat.',
    policeReportDescription: "Huquqbuzarliklar to'g'risida arizalar berish va ularning holatini kuzatish tizimi.",
    policePermitsDescription: "Qurol, qo'riqlash faoliyati va boshqa maxsus litsenziyalar uchun ruxsatnomalar berish xizmatlari.",
    
    documentServices: 'Hujjatlarni rasmiylashtirish',
    residencyRegistration: "Yashash joyini ro'yxatga olish",
    citizenComplaints: 'Fuqarolar murojaatlari',
    documentServicesDescription: 'Pasportlar, shaxsiy guvohnomalar va boshqa rasmiy hujjatlarni rasmiylashtirish va berish.',
    residencyRegistrationDescription: "Yashash joyini ro'yxatga olish, vaqtinchalik ro'yxatga olish va hisobdan chiqarish xizmatlari.",
    citizenComplaintsDescription: "Tuman infratuzilmasi va xizmatlari bo'yicha shikoyatlar va takliflar berish tizimi.",
    
    waterConnection: "Suv ta'minotiga ulanish",
    waterBilling: "Suv uchun to'lov",
    waterQuality: 'Suv sifati',
    waterConnectionDescription: "Yangi obyektlar uchun tuman suv ta'minoti tizimiga ulanish xizmati.",
    waterBillingDescription: "Suv uchun hisob-kitoblar tizimi, qarzlarni tekshirish va to'lovlar tarixi.",
    waterQualityDescription: "Ichimlik suvi sifati, sinov natijalari va xavfsizlik standartlari haqida ma'lumot.",
    
    schoolEnrollment: 'Maktabga qabul qilish',
    educationPrograms: "Ta'lim dasturlari",
    studentServices: "O'quvchilar uchun xizmatlar",
    schoolEnrollmentDescription: "Bolalarni maktabgacha ta'lim muassasalari, maktablar va boshqa ta'lim tashkilotlariga qabul qilish tartibi.",
    educationProgramsDescription: "Ta'lim dasturlari, malaka oshirish kurslari va kasbiy qayta tayyorlash to'g'risida ma'lumot.",
    studentServicesDescription: "O'quvchilar uchun xizmatlar, jumladan stipendiyalar, transport, ovqatlanish va psixologik yordam.",
    
    emergencyServices: 'Shoshilinch yordam',
    hospitalAdmission: 'Kasalxonaga yotqizish',
    vaccinations: 'Emlash',
    emergencyServicesDescription: 'Shoshilinch tibbiy yordam favqulodda holatlar va jarohatlar uchun.',
    hospitalAdmissionDescription: 'Rejali kasalxonaga yotqizish tartibi, zarur hujjatlar va tayyorgarlik.',
    vaccinationsDescription: "Bolalar va kattalar uchun emlash dasturlari, emlash jadvali va emlashlar haqida ma'lumot.",
    
    publicTransport: 'Jamoat transporti',
    roadMaintenance: "Yo'llarni saqlash",
    trafficManagement: 'Harakatni boshqarish',
    publicTransportDescription: "Jamoat transporti yo'nalishlari, jadval va chipta narxlari haqida ma'lumot.",
    roadMaintenanceDescription: "Yo'llarni ta'mirlash va saqlash dasturlari, joriy ishlar va yopilishlar haqida ma'lumot.",
    trafficManagementDescription: "Yo'l harakatini boshqarish tizimi, tirbandliklar va tavsiya etilgan yo'nalishlar haqida ma'lumot.",
    
    // Forms
    name: 'Ism',
    email: 'Elektron pochta',
    password: 'Parol',
    confirmPassword: 'Parolni tasdiqlang',
    submit: 'Yuborish',
    subject: 'Mavzu',
    message: 'Xabar',
    
    // Auth
    loginTitle: 'Tizimga kirish',
    registerTitle: "Yangi foydalanuvchi ro'yxatdan o'tish",
    forgotPassword: 'Parolni unutdingizmi?',
    noAccount: "Hisobingiz yo'qmi?",
    haveAccount: 'Allaqachon hisobingiz bormi?',
    createAccount: 'Hisob yaratish',
    
    // Contact
    contactTitle: "Biz bilan bog'lanish",
    contactSubtitle: 'Savollaringiz bormi? Biz yordam berishga tayyormiz!',
    address: 'Manzil',
    phone: 'Telefon',
    
    // Footer
    copyright: 'Barcha huquqlar himoyalangan',
    terms: 'Foydalanish shartlari',
    privacy: 'Maxfiylik siyosati',
    
    // News
    newsTitle: "Tuman yangiliklari va e'lonlari",
    newsSubtitle: "Tumandagi so'nggi voqealardan xabardor bo'ling",
    
    // Other
    loading: 'Yuklanmoqda...',
    error: 'Xatolik yuz berdi',
    pageNotFound: 'Sahifa topilmadi',
    backToHome: 'Bosh sahifaga qaytish',
  }
};

export default translations;