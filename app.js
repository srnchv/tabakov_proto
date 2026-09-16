/* Театр Олега Табакова — UX клик-прототип сайта. Charmer, 2026.
   Серый вайрфрейм: структура и логика, не дизайн. Данные тестовые. */

/* ------------------------------ ДАННЫЕ ------------------------------ */

const SCENES = {
  main:   { n: 'Основная сцена', addr: 'Малая Сухаревская пл., 5', metro: 'м. Сухаревская' },
  podval: { n: 'Историческая сцена «Подвал»', addr: 'ул. Чаплыгина, 1А', metro: 'м. Чистые пруды' },
};

const PARTNERS = [
  { id: 'mosbilet',  n: 'Мосбилет',     m: 'билеты города Москвы' },
  { id: 'intickets', n: 'Intickets',    m: 'официальный оператор' },
  { id: 'ticketland',n: 'Ticketland',   m: 'билетный оператор' },
  { id: 'yandex',    n: 'Яндекс Афиша', m: 'билетный сервис' },
  { id: 'kassir',    n: 'Kassir.ru',    m: 'билетный оператор' },
  { id: 'mtslive',   n: 'МТС Live',     m: 'билетный сервис' },
];

const ARTISTS = [
  { id:'tr1',  n:'Сергей Ваганов',   grp:'Труппа', since:2008, bio:'Окончил Школу-студию МХАТ. В труппе театра с 2008 года. Лауреат премии «Золотой лист». Занят в ведущем репертуаре обеих сцен.' },
  { id:'tr2',  n:'Анна Литвинова',   grp:'Труппа', since:2012, bio:'Выпускница Театральной школы Олега Табакова. В труппе с 2012 года. Играет главные роли в «Чайке» и «Двенадцатой ночи».' },
  { id:'tr3',  n:'Павел Ершов',      grp:'Труппа', since:2005, bio:'Заслуженный артист. В труппе с 2005 года. Педагог по сценической речи Театральной школы.' },
  { id:'tr4',  n:'Мария Костина',    grp:'Труппа', since:2016, bio:'Выпускница ГИТИСа. В труппе с 2016 года. Номинант «Золотой маски» за роль в спектакле «На дне».' },
  { id:'tr5',  n:'Дмитрий Луконин',  grp:'Труппа', since:2010, bio:'Окончил Щукинское училище. В труппе с 2010 года. Также снимается в кино и сериалах.' },
  { id:'tr6',  n:'Ольга Вершинина',  grp:'Труппа', since:2019, bio:'Выпускница Театральной школы Олега Табакова. В труппе с 2019 года.' },
  { id:'tr7',  n:'Игорь Салтыков',   grp:'Труппа', since:2003, bio:'Народный артист. В труппе с 2003 года. Ведущий мастер сцены.' },
  { id:'tr8',  n:'Ксения Ромашина',  grp:'Труппа', since:2021, bio:'Выпускница Школы-студии МХАТ. В труппе с 2021 года.' },
  { id:'tr9',  n:'Артём Белов',      grp:'Труппа', since:2018, bio:'Выпускник Театральной школы Олега Табакова. В труппе с 2018 года.' },
  { id:'tr10', n:'Вера Одинцова',    grp:'Труппа', since:2014, bio:'Окончила ВГИК. В труппе с 2014 года. Играет в «Ревизоре» и «Женитьбе».' },
  { id:'g1',   n:'Николай Багров',   grp:'Приглашённые артисты', bio:'Актёр театра и кино. Занят в спектакле «Утиная охота».' },
  { id:'g2',   n:'Елена Шталь',      grp:'Приглашённые артисты', bio:'Актриса, приглашённая на роль в премьере «Снегопад».' },
];

const SPECTS = [
  { id:'s1', t:'Ревизор', author:'Николай Гоголь', dir:'Кирилл Атаманов', genre:'Комедия', age:'12+', dur:'2 ч 50 мин, один антракт', scene:'main', prem:2023, status:'rep',
    desc:'Городничий получает известие о тайном визите ревизора — и уездный город приходит в движение. Хрестоматийная комедия, поставленная как стремительный механизм: два действия без единой паузы, оркестр чиновников и один очень удачливый проезжий.',
    long:'Спектакль идёт на Основной сцене. Сценография строится вокруг вращающегося круга: кабинеты, гостиные и трактир сменяют друг друга без остановки действия. Хлестакова играют два артиста в очередь — составы объявляются на конкретную дату.',
    roles:[ {r:'Хлестаков', a:['tr9','tr5']}, {r:'Городничий', a:['tr7']}, {r:'Анна Андреевна', a:['tr10']}, {r:'Осип', a:['tr3']} ],
    team:[ ['Режиссёр','Кирилл Атаманов'], ['Художник-постановщик','Дарья Мельник'], ['Художник по свету','Антон Раух'], ['Композитор','Фёдор Гладков'] ],
    reviews:[ {who:'Зритель, октябрь 2025', tx:'Три часа пролетают на одном дыхании. Отдельное спасибо за живой оркестр.'}, {who:'Зритель, март 2026', tx:'Смешно и страшно одновременно — как и должно быть у Гоголя.', video:true} ],
  },
  { id:'s2', t:'Чайка', author:'Антон Чехов', dir:'Наталья Ким', genre:'Драма', age:'16+', dur:'3 ч 10 мин, один антракт', scene:'main', prem:2021, status:'rep',
    desc:'История о людях, которые говорят об искусстве и любви, но не слышат друг друга. Постановка без колдовского озера и усадебного быта: пустая сцена, крупные планы, вынесенные на экраны собственного видеоплеера театра.',
    long:'Заречную и Аркадину в очередь играют актрисы разных поколений труппы — это два разных спектакля, и зрители приходят на оба состава.',
    roles:[ {r:'Нина Заречная', a:['tr2','tr8']}, {r:'Аркадина', a:['tr4']}, {r:'Треплев', a:['tr9']}, {r:'Тригорин', a:['tr5']} ],
    team:[ ['Режиссёр','Наталья Ким'], ['Художник-постановщик','Лев Шагин'], ['Видеохудожник','Марта Ельцова'], ['Композитор','Фёдор Гладков'] ],
    reviews:[ {who:'Зритель, январь 2026', tx:'Лучшая «Чайка», которую я видела. Видео на сцене не мешает, а помогает.'} ],
  },
  { id:'s3', t:'Старший сын', author:'Александр Вампилов', dir:'Олег Ставров', genre:'Драма', age:'12+', dur:'2 ч 30 мин, один антракт', scene:'podval', prem:2019, status:'rep',
    desc:'Двое опоздали на электричку и выдали одного из них за сына незнакомого человека. Обман, который становится правдой. Камерная постановка исторической сцены — зритель сидит в полутора метрах от артистов.',
    roles:[ {r:'Сарафанов', a:['tr7']}, {r:'Бусыгин', a:['tr9']}, {r:'Сильва', a:['tr5']}, {r:'Нина', a:['tr6']} ],
    team:[ ['Режиссёр','Олег Ставров'], ['Художник-постановщик','Дарья Мельник'], ['Художник по свету','Антон Раух'] ],
    reviews:[ {who:'Зритель, май 2026', tx:'В «Подвале» этот спектакль звучит по-особенному: кажется, что всё происходит с тобой.'} ],
  },
  { id:'s4', t:'Двенадцатая ночь', author:'Уильям Шекспир', dir:'Ян Гурский', genre:'Комедия', age:'12+', dur:'2 ч 40 мин, один антракт', scene:'main', prem:2024, status:'rep',
    desc:'Кораблекрушение, близнецы, переодевания и любовь, которая не разбирает адресов. Музыкальная комедия с живым ансамблем и хореографией на всю глубину Основной сцены.',
    roles:[ {r:'Виола', a:['tr2']}, {r:'Оливия', a:['tr4']}, {r:'Мальволио', a:['tr3']}, {r:'Шут Фесте', a:['tr9']} ],
    team:[ ['Режиссёр','Ян Гурский'], ['Художник-постановщик','Лев Шагин'], ['Хореограф','Ирина Малер'], ['Композитор','Фёдор Гладков'] ],
    reviews:[ {who:'Зритель, февраль 2026', tx:'Идеальный спектакль, чтобы влюбиться в театр. Уходили, напевая.', video:true} ],
  },
  { id:'s5', t:'На дне', author:'Максим Горький', dir:'Наталья Ким', genre:'Драма', age:'16+', dur:'2 ч 50 мин, один антракт', scene:'podval', prem:2018, status:'rep',
    desc:'Ночлежка как модель мира. Постановка исторической сцены, в которой зритель оказывается внутри пространства пьесы — на расстоянии вытянутой руки от её обитателей.',
    roles:[ {r:'Лука', a:['tr7']}, {r:'Сатин', a:['tr5']}, {r:'Настя', a:['tr4']}, {r:'Барон', a:['tr3']} ],
    team:[ ['Режиссёр','Наталья Ким'], ['Художник-постановщик','Дарья Мельник'], ['Художник по свету','Антон Раух'] ],
    reviews:[],
  },
  { id:'s6', t:'Утиная охота', author:'Александр Вампилов', dir:'Андрей Верников', genre:'Драма', age:'18+', dur:'3 ч, один антракт', scene:'main', prem:2022, status:'rep',
    desc:'Один день Зилова, собранный из осколков памяти. Спектакль-воспоминание с приглашённым артистом в главной роли.',
    roles:[ {r:'Зилов', a:['g1']}, {r:'Галина', a:['tr2']}, {r:'Саяпин', a:['tr9']}, {r:'Официант Дима', a:['tr5']} ],
    team:[ ['Режиссёр','Андрей Верников'], ['Художник-постановщик','Лев Шагин'], ['Композитор','Фёдор Гладков'] ],
    reviews:[ {who:'Зритель, апрель 2026', tx:'Тяжело, точно, безжалостно. Именно за этим и ходишь в театр.'} ],
  },
  { id:'s7', t:'Женитьба', author:'Николай Гоголь', dir:'Олег Ставров', genre:'Комедия', age:'12+', dur:'2 ч 20 мин, один антракт', scene:'podval', prem:2020, status:'rep',
    desc:'Подколесин никак не может решиться, Кочкарёв решает за него. Камерная комедия о страхе перемен, сыгранная в шаге от зрителя.',
    roles:[ {r:'Подколесин', a:['tr3']}, {r:'Кочкарёв', a:['tr5']}, {r:'Агафья Тихоновна', a:['tr10']} ],
    team:[ ['Режиссёр','Олег Ставров'], ['Художник-постановщик','Дарья Мельник'] ],
    reviews:[ {who:'Зритель, июнь 2026', tx:'Неожиданно современная история. Смеялись всем залом.'} ],
  },
  { id:'s8', t:'Снегопад', author:'Современная пьеса — Ада Вольская', dir:'Ян Гурский', genre:'Драма', age:'16+', dur:'1 ч 50 мин, без антракта', scene:'main', prem:2026, status:'rep', premiere:true,
    desc:'Премьера сезона. Город засыпает снегом, аэропорт закрыт, шесть незнакомых людей застревают в одном терминале на одну ночь. Пьеса — победитель драматургической лаборатории театра.',
    long:'Премьерные показы — 24 и 25 октября. Продажа открыта у всех билетных партнёров.',
    roles:[ {r:'Ольга', a:['g2']}, {r:'Диспетчер', a:['tr7']}, {r:'Костя', a:['tr9']}, {r:'Лера', a:['tr8']} ],
    team:[ ['Режиссёр','Ян Гурский'], ['Художник-постановщик','Лев Шагин'], ['Художник по свету','Антон Раух'], ['Композитор','Фёдор Гладков'] ],
    reviews:[],
  },
  /* архив */
  { id:'a1', t:'Гроза', author:'Александр Островский', dir:'Андрей Верников', genre:'Драма', age:'16+', dur:'2 ч 40 мин', scene:'main', prem:2012, closed:2019, status:'arch',
    desc:'Спектакль шёл на Основной сцене с 2012 по 2019 год, сыграно 214 представлений.', roles:[ {r:'Катерина', a:['tr4']}, {r:'Кабаниха', a:['tr10']} ], team:[ ['Режиссёр','Андрей Верников'] ], reviews:[] },
  { id:'a2', t:'Вишнёвый сад', author:'Антон Чехов', dir:'Игорь Данилевич', genre:'Драма', age:'12+', dur:'3 ч', scene:'main', prem:2010, closed:2017, status:'arch',
    desc:'Спектакль шёл с 2010 по 2017 год, участник международных фестивалей.', roles:[ {r:'Раневская', a:['tr10']}, {r:'Лопахин', a:['tr7']} ], team:[ ['Режиссёр','Игорь Данилевич'] ], reviews:[] },
  { id:'a3', t:'Обыкновенная история', author:'Иван Гончаров', dir:'Игорь Данилевич', genre:'Драма', age:'12+', dur:'2 ч 30 мин', scene:'podval', prem:2008, closed:2015, status:'arch',
    desc:'Камерный спектакль исторической сцены, сыграно 176 представлений.', roles:[ {r:'Адуев-младший', a:['tr5']}, {r:'Адуев-старший', a:['tr7']} ], team:[ ['Режиссёр','Игорь Данилевич'] ], reviews:[] },
  { id:'a4', t:'Женитьба Фигаро', author:'Пьер Бомарше', dir:'Кирилл Атаманов', genre:'Комедия', age:'12+', dur:'2 ч 50 мин', scene:'main', prem:2014, closed:2021, status:'arch',
    desc:'Музыкальная комедия, шла с 2014 по 2021 год.', roles:[ {r:'Фигаро', a:['tr5']}, {r:'Сюзанна', a:['tr2']} ], team:[ ['Режиссёр','Кирилл Атаманов'] ], reviews:[] },
];

/* Афиша: события с составом на дату и статусом продаж по партнёрам.
   soldout:true — всё продано; few:true — мало мест; no:[...] — нет мест у конкретных партнёров */
const SHOWS = [
  { id:'e1',  date:'2026-09-18', time:'19:00', spect:'s1', cast:{ 'Хлестаков':'tr9' }, no:['mosbilet'] },
  { id:'e2',  date:'2026-09-19', time:'18:00', spect:'s4', cast:{}, few:true },
  { id:'e3',  date:'2026-09-19', time:'19:00', spect:'s3', cast:{}, soldout:true },
  { id:'e4',  date:'2026-09-20', time:'19:00', spect:'s2', cast:{ 'Нина Заречная':'tr2' } },
  { id:'e5',  date:'2026-09-23', time:'19:00', spect:'s5', cast:{}, few:true },
  { id:'e6',  date:'2026-09-24', time:'19:00', spect:'s6', cast:{} },
  { id:'e7',  date:'2026-09-25', time:'19:00', spect:'s1', cast:{ 'Хлестаков':'tr5' } },
  { id:'e8',  date:'2026-09-26', time:'18:00', spect:'s7', cast:{}, soldout:true },
  { id:'e9',  date:'2026-09-26', time:'19:00', spect:'s4', cast:{} },
  { id:'e10', date:'2026-09-27', time:'19:00', spect:'s2', cast:{ 'Нина Заречная':'tr8' }, no:['yandex','kassir'] },
  { id:'e11', date:'2026-09-30', time:'19:00', spect:'s3', cast:{} },
  { id:'e12', date:'2026-10-02', time:'19:00', spect:'s1', cast:{ 'Хлестаков':'tr9' } },
  { id:'e13', date:'2026-10-03', time:'18:00', spect:'s4', cast:{} },
  { id:'e14', date:'2026-10-04', time:'19:00', spect:'s5', cast:{} },
  { id:'e15', date:'2026-10-08', time:'19:00', spect:'s2', cast:{ 'Нина Заречная':'tr2' } },
  { id:'e16', date:'2026-10-09', time:'19:00', spect:'s6', cast:{}, few:true },
  { id:'e17', date:'2026-10-10', time:'18:00', spect:'s7', cast:{} },
  { id:'e18', date:'2026-10-11', time:'19:00', spect:'s3', cast:{} },
  { id:'e19', date:'2026-10-16', time:'19:00', spect:'s1', cast:{ 'Хлестаков':'tr5' } },
  { id:'e20', date:'2026-10-17', time:'19:00', spect:'s2', cast:{ 'Нина Заречная':'tr8' } },
  { id:'e21', date:'2026-10-24', time:'19:00', spect:'s8', cast:{}, few:true },
  { id:'e22', date:'2026-10-25', time:'19:00', spect:'s8', cast:{} },
  { id:'e23', date:'2026-10-30', time:'19:00', spect:'s4', cast:{} },
  { id:'e24', date:'2026-10-31', time:'18:00', spect:'s5', cast:{} },
];

const NEWS = [
  { id:'n1', date:'2026-09-01', t:'Театр открыл новый сезон', tx:'Сбор труппы прошёл на Основной сцене. В планах сезона — премьера «Снегопад», гастроли в Санкт-Петербурге и новая лаборатория молодой режиссуры.', spect:'s8' },
  { id:'n2', date:'2026-09-10', t:'Премьера «Снегопад» — 24 и 25 октября', tx:'Пьеса Ады Вольской, победитель драматургической лаборатории театра, выходит на Основной сцене. Режиссёр — Ян Гурский. Продажа билетов открыта у всех партнёров.', spect:'s8' },
  { id:'n3', date:'2026-09-05', t:'Гастроли в Санкт-Петербурге', tx:'В ноябре театр покажет «Чайку» и «Старшего сына» на сцене БДТ. Даты и билеты — в разделе гастролей.', spect:'s2' },
  { id:'n4', date:'2026-08-20', t:'Лаборатория молодой режиссуры: приём заявок', tx:'Театр открывает четвёртый набор лаборатории. Эскизы будут показаны на исторической сцене в декабре.', spect:null },
  { id:'n5', date:'2026-08-12', t:'Изменение состава в «Чайке» 27 сентября', tx:'27 сентября роль Нины Заречной исполнит Ксения Ромашина. Билеты действительны, возврат не требуется.', spect:'s2' },
  { id:'n6', date:'2026-07-30', t:'Выпуск Театральной школы Олега Табакова', tx:'Дипломные спектакли выпускного курса прошли при полных залах. Двое выпускников приняты в труппу театра.', spect:null },
];

const PRESS = [
  { id:'p1', src:'Афиша Daily', date:'2026-06-14', t:'«Ревизор» без ревизора: как театр разгоняет Гоголя до скорости фарса', spect:'s1' },
  { id:'p2', src:'Ведомости',   date:'2026-05-30', t:'Камерный Вампилов: почему в «Подвал» не достать билетов', spect:'s3' },
  { id:'p3', src:'Коммерсантъ', date:'2026-04-22', t:'«Чайка» с крупным планом: видео на сцене как новый язык', spect:'s2' },
  { id:'p4', src:'The City',    date:'2026-03-18', t:'Куда идти в марте: «Двенадцатая ночь» и ещё пять спектаклей', spect:'s4' },
  { id:'p5', src:'Театръ',      date:'2026-02-09', t:'Интервью с художественным руководством театра о планах сезона', spect:null },
];

const CHRONO = [
  { y:'1974', tx:'Олег Табаков набирает первую студию — драматический кружок, из которого вырастет будущий театр.' },
  { y:'1987', tx:'Официальное открытие театра-студии в подвале дома на улице Чаплыгина — легендарного «Подвала».' },
  { y:'1990-е', tx:'Первые большие гастроли, спектакли-долгожители, формирование постоянной труппы.' },
  { y:'2010', tx:'Основана Московская театральная школа Олега Табакова.' },
  { y:'2016', tx:'Открытие новой Основной сцены на Малой Сухаревской площади.' },
  { y:'2018', tx:'Художественным руководителем театра становится Владимир Машков.' },
  { y:'2026', tx:'Текущий сезон: премьеры, гастроли, лаборатория молодой режиссуры.' },
];

const DOCS = [
  ['Устав театра', 'PDF · 1,2 МБ'], ['Сведения об учредителе', 'PDF · 0,3 МБ'],
  ['Правила посещения', 'PDF · 0,5 МБ'], ['Политика обработки персональных данных', 'PDF · 0,4 МБ'],
  ['Реквизиты', 'PDF · 0,1 МБ'], ['Информация о закупках', 'ссылка'],
];

/* ------------------------------ ИНДЕКСЫ ------------------------------ */

const byId = {}; SPECTS.forEach(s => byId[s.id] = s); ARTISTS.forEach(a => byId[a.id] = a);
NEWS.forEach(n => byId[n.id] = n);

/* роли артиста: строятся из спектаклей — сущность создаётся один раз, выводится везде */
ARTISTS.forEach(a => a.plays = []);
SPECTS.forEach(s => s.roles.forEach(role => role.a.forEach(aid => {
  if (byId[aid]) byId[aid].plays.push({ spect: s.id, role: role.r });
})));

SHOWS.sort((x, y) => (x.date + x.time).localeCompare(y.date + y.time));

const MONTHS = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
const WDAYS = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'];
function fmtD(iso, wd) {
  const d = new Date(iso + 'T12:00:00');
  return d.getDate() + ' ' + MONTHS[d.getMonth()] + (wd ? ', ' + WDAYS[d.getDay()] : '');
}
function esc(s) { return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }

/* показы спектакля / артиста */
function showsOf(spectId) { return SHOWS.filter(e => e.spect === spectId); }
function showsWith(artistId) {
  return SHOWS.filter(e => {
    const s = byId[e.spect]; if (!s) return false;
    return s.roles.some(role => {
      const onDate = e.cast[role.r];
      return onDate ? onDate === artistId : role.a[0] === artistId; /* без назначения играет первый состав */
    });
  });
}
function castOn(ev) { /* состав на дату: назначение из события или первый состав */
  const s = byId[ev.spect];
  return s.roles.map(role => ({ role: role.r, artist: byId[ev.cast[role.r] || role.a[0]] }));
}

/* ------------------------------ КАРКАС ------------------------------ */

const NAV = [
  ['#/afisha', 'Афиша'], ['#/repertoire', 'Репертуар'], ['#/artists', 'Артисты'],
  ['#/about', 'О театре'], ['#/press', 'Пресс-центр'], ['#/contacts', 'Контакты'],
];

function header(active) {
  return `
  <div class="a11ybar"><div class="wrap">
    <span>Версия для слабовидящих</span>
    <button onclick="a11yFont()">Крупнее шрифт</button>
    <button onclick="a11yOff()">Обычная версия</button>
    <span class="muted" style="color:#aaa">Изображения скрыты, контраст усилен — WCAG 2.1 AA</span>
  </div></div>
  <header class="top"><div class="row">
    <a href="#/" class="logo">Театр Олега Табакова<span class="sub">Московский театр · прототип сайта</span></a>
    <nav class="main">
      ${NAV.map(([h, t]) => `<a href="${h}" class="${active === h ? 'active' : ''}">${t}</a>`).join('')}
      <a href="#/search" title="Поиск">Поиск</a>
    </nav>
    <div style="display:flex;gap:10px;align-items:center">
      <span class="eye" onclick="a11yOn()" title="Версия для слабовидящих">👁 Для слабовидящих</span>
      <a class="btn dark sm" href="#/afisha">Купить билет</a>
    </div>
  </div></header>`;
}

function footer() {
  return `<footer><div class="wrap">
    <div class="cols">
      <div>
        <div style="font-weight:600;color:var(--ink)">Театр Олега Табакова</div>
        <div style="margin-top:8px">${SCENES.main.n} — ${SCENES.main.addr}<br>${SCENES.podval.n} — ${SCENES.podval.addr}</div>
        <div style="margin-top:8px">Касса: +7 (495) 000-00-00 · info@tabakov.ru</div>
      </div>
      <div><a href="#/afisha">Афиша</a><br><a href="#/repertoire">Репертуар</a><br><a href="#/artists">Артисты</a></div>
      <div><a href="#/about">О театре</a><br><a href="#/about/chrono">Хронограф</a><br><a href="#/about/docs">Документы</a></div>
      <div><a href="#/press">Пресс-центр</a><br><a href="#/contacts">Контакты</a><br><a onclick="a11yOn()">Версия для слабовидящих</a></div>
    </div>
    <div class="protonote">UX-прототип сайта · Charmer · данные тестовые, составы и имена условные · дизайн не является финальным</div>
  </div></footer>`;
}

function page(active, inner) { return header(active) + `<div class="wrap">${inner}</div>` + footer(); }

/* ------------------------------ СТРАНИЦЫ ------------------------------ */

function home() {
  const next = SHOWS.filter(e => !e.soldout).slice(0, 3);
  const prem = SPECTS.find(s => s.premiere);
  return page('#/', `
  <section class="hero">
    <div class="kicker">Московский театр Олега Табакова · сезон 2026/27</div>
    <h1>Две сцены. Один театр.</h1>
    <p class="lead">Основная сцена на Малой Сухаревской и историческая сцена «Подвал» на Чаплыгина. Афиша, репертуар, артисты и билеты — на одном сайте.</p>
    <div style="display:flex;gap:12px;margin-top:22px;flex-wrap:wrap">
      <a class="btn dark" href="#/afisha">Афиша и билеты</a>
      <a class="btn" href="#/repertoire">Репертуар</a>
      ${prem ? `<a class="btn" href="#/spect/${prem.id}">Премьера: «${esc(prem.t)}»</a>` : ''}
    </div>
  </section>

  <section class="hsec">
    <div class="hsec-h"><div class="hkick"><span class="hdot"></span>Ближайшие спектакли</div><a class="muted" href="#/afisha">Вся афиша →</a></div>
    <div class="grid g3">${next.map(e => { const s = byId[e.spect]; return `
      <a class="card tile" href="#/spect/${s.id}">
        <div class="img"><span class="imgtag">афишное фото</span></div>
        <div class="kicker">${fmtD(e.date)} · ${e.time} · ${SCENES[s.scene].n}</div>
        <div class="t">${esc(s.t)}</div>
        <div class="muted" style="font-size:13px">${esc(s.author)} · ${s.genre} · ${s.age}</div>
        <div style="margin-top:12px"><span class="btn sm" onclick="event.preventDefault();ticket('${e.id}')">Купить билет</span>${e.few ? '<span class="fewleft">мало мест</span>' : ''}</div>
      </a>`; }).join('')}
    </div>
  </section>

  ${prem ? `<section class="hsec">
    <div class="hsec-h"><div class="hkick"><span class="hdot"></span>Премьера сезона</div></div>
    <a class="card" href="#/spect/${prem.id}" style="display:grid;grid-template-columns:1fr 1fr;gap:30px;align-items:center">
      <div class="media wide" style="aspect-ratio:16/9"><span class="imgtag">кадр из спектакля</span></div>
      <div>
        <div class="kicker">Премьера · 24–25 октября · ${SCENES[prem.scene].n}</div>
        <h2 style="margin:.4em 0">«${esc(prem.t)}»</h2>
        <p class="muted">${esc(prem.desc)}</p>
        <span class="btn dark sm">О спектакле и билеты</span>
      </div>
    </a>
  </section>` : ''}

  <section class="hsec">
    <div class="hsec-h"><div class="hkick"><span class="hdot"></span>Новости</div><a class="muted" href="#/press">Все новости →</a></div>
    <div class="grid g3">${NEWS.slice(0, 3).map(n => `
      <a class="card" href="#/news/${n.id}">
        <div class="kicker">${fmtD(n.date)}</div>
        <div class="t" style="font-weight:500;margin-top:6px">${esc(n.t)}</div>
        <div class="muted" style="font-size:13px;margin-top:8px">${esc(n.tx.slice(0, 90))}…</div>
      </a>`).join('')}
    </div>
  </section>

  <section class="hsec">
    <div class="hsec-h"><div class="hkick"><span class="hdot"></span>О театре</div><a class="muted" href="#/about">Подробнее →</a></div>
    <div class="grid g4">
      <a class="card" href="#/about/history"><h3 style="margin:0 0 6px">История</h3><div class="muted" style="font-size:13px">От студии 1974 года до двух сцен</div></a>
      <a class="card" href="#/about/chrono"><h3 style="margin:0 0 6px">Хронограф</h3><div class="muted" style="font-size:13px">Ключевые даты театра</div></a>
      <a class="card" href="#/about/building"><h3 style="margin:0 0 6px">Здания и сцены</h3><div class="muted" style="font-size:13px">Сухаревская и «Подвал»</div></a>
      <a class="card" href="#/about/prize"><h3 style="margin:0 0 6px">Премия Табакова</h3><div class="muted" style="font-size:13px">Лауреаты и положение</div></a>
    </div>
  </section>`);
}

/* -------- афиша -------- */
function afisha(q) {
  const month = q.month || '2026-09';
  const scene = q.scene || '';
  const genre = q.genre || '';
  const evs = SHOWS.filter(e => e.date.startsWith(month))
    .filter(e => !scene || byId[e.spect].scene === scene)
    .filter(e => !genre || byId[e.spect].genre === genre);
  const days = [...new Set(evs.map(e => e.date))];
  const link = (p) => '#/afisha?' + new URLSearchParams(Object.assign({ month, scene, genre }, p)).toString();
  const GENRES = [...new Set(SPECTS.filter(s => s.status === 'rep').map(s => s.genre))];
  return page('#/afisha', `
  <div class="crumbs"><a href="#/">Главная</a> / Афиша</div>
  <h1>Афиша</h1>
  <div class="toolbar">
    <div class="tools">
      <a class="fchip ${month === '2026-09' ? 'on' : ''}" href="${link({ month: '2026-09' })}">Сентябрь 2026</a>
      <a class="fchip ${month === '2026-10' ? 'on' : ''}" href="${link({ month: '2026-10' })}">Октябрь 2026</a>
      <span style="width:14px"></span>
      <a class="fchip ${!scene ? 'on' : ''}" href="${link({ scene: '' })}">Обе сцены</a>
      <a class="fchip ${scene === 'main' ? 'on' : ''}" href="${link({ scene: 'main' })}">Основная</a>
      <a class="fchip ${scene === 'podval' ? 'on' : ''}" href="${link({ scene: 'podval' })}">«Подвал»</a>
      <span style="width:14px"></span>
      <a class="fchip ${!genre ? 'on' : ''}" href="${link({ genre: '' })}">Все жанры</a>
      ${GENRES.map(g => `<a class="fchip ${genre === g ? 'on' : ''}" href="${link({ genre: g })}">${g}</a>`).join('')}
    </div>
    <div class="muted" style="font-size:13px">${evs.length} событий</div>
  </div>
  <div class="afdays">
  ${days.map(d => `<div class="afday"><div class="d">${fmtD(d, true)}</div>
    ${evs.filter(e => e.date === d).map(e => { const s = byId[e.spect]; const cast = Object.entries(e.cast); return `
    <div class="afrow">
      <div class="tm">${e.time}</div>
      <div class="sp"><a href="#/spect/${s.id}"><span class="t">«${esc(s.t)}»</span></a>
        <div class="m">${esc(s.author)} · ${s.genre} · ${s.age}${s.premiere ? ' · <b>премьера</b>' : ''}</div></div>
      <div class="sc">${SCENES[s.scene].n}<br>${SCENES[s.scene].addr}</div>
      <div class="cast">${cast.length ? 'В этот вечер: ' + cast.map(([r, a]) => `<a href="#/artist/${a}" style="text-decoration:underline">${esc(byId[a].n)}</a> — ${esc(r)}`).join(', ') : ''}</div>
      <div>${e.soldout ? '<div class="soldout">Все билеты проданы</div>'
        : `<button class="btn dark sm" style="width:100%" onclick="ticket('${e.id}')">Билеты</button>${e.few ? '<div class="fewleft" style="display:inline-block;margin:6px 0 0">осталось мало мест</div>' : ''}`}</div>
    </div>`; }).join('')}
  </div>`).join('') || '<p class="muted">Нет событий по выбранным фильтрам.</p>'}
  </div>`);
}

/* -------- модалка покупки: единый механизм билетных партнёров -------- */
function ticket(evId) {
  const e = SHOWS.find(x => x.id === evId); const s = byId[e.spect];
  const root = document.getElementById('modal-root');
  root.innerHTML = `
  <div class="mback" onclick="if(event.target===this)closeModal()">
    <div class="modal">
      <span class="mclose" onclick="closeModal()">✕</span>
      <h3>«${esc(s.t)}»</h3>
      <div class="sub">${fmtD(e.date, true)}, ${e.time} · ${SCENES[s.scene].n}</div>
      <div class="muted" style="font-size:13px;margin-bottom:6px">Выберите билетного оператора — покупка завершается на его сайте. Переход ведёт сразу на страницу этого события.</div>
      ${PARTNERS.map(p => {
        const no = (e.no || []).includes(p.id);
        return `<div class="prow">
          <div><div class="pn">${p.n}</div><div class="pm">${p.m}</div></div>
          ${no ? '<span class="muted" style="font-size:13px">мест нет</span>'
               : `<button class="btn sm" onclick="toast('Переход к покупке: ${p.n} → событие «${esc(s.t)}», ${fmtD(e.date)} (deep link)')">Выбрать места →</button>`}
        </div>`; }).join('')}
      <div class="muted" style="font-size:12px;margin-top:14px">Наличие мест обновляется по данным партнёров. Новые операторы подключаются через админ-панель без доработки сайта.</div>
    </div>
  </div>`;
}
function closeModal() { document.getElementById('modal-root').innerHTML = ''; }
function toast(t) {
  const el = document.createElement('div'); el.className = 'toast'; el.textContent = t;
  document.body.appendChild(el); setTimeout(() => el.remove(), 2600);
}

/* -------- репертуар -------- */
function repertoire(q) {
  const arch = q.arch === '1';
  const scene = q.scene || '';
  const list = SPECTS.filter(s => (arch ? s.status === 'arch' : s.status === 'rep'))
    .filter(s => !scene || s.scene === scene);
  const link = (p) => '#/repertoire?' + new URLSearchParams(Object.assign({ arch: arch ? '1' : '', scene }, p)).toString();
  return page('#/repertoire', `
  <div class="crumbs"><a href="#/">Главная</a> / Репертуар</div>
  <h1>${arch ? 'Архив спектаклей' : 'Репертуар'}</h1>
  <div class="toolbar">
    <div class="tools">
      <a class="fchip ${!arch ? 'on' : ''}" href="${link({ arch: '' })}">Текущий репертуар</a>
      <a class="fchip ${arch ? 'on' : ''}" href="${link({ arch: '1' })}">Архив</a>
      <span style="width:14px"></span>
      <a class="fchip ${!scene ? 'on' : ''}" href="${link({ scene: '' })}">Обе сцены</a>
      <a class="fchip ${scene === 'main' ? 'on' : ''}" href="${link({ scene: 'main' })}">Основная</a>
      <a class="fchip ${scene === 'podval' ? 'on' : ''}" href="${link({ scene: 'podval' })}">«Подвал»</a>
    </div>
    <div class="muted" style="font-size:13px">${list.length} спектаклей</div>
  </div>
  <div class="grid g4">${list.map(s => `
    <a class="card tile" href="#/spect/${s.id}">
      <div class="img p23"><span class="imgtag">афиша</span></div>
      <div class="kicker">${s.genre} · ${s.age}${s.premiere ? ' · премьера' : ''}${s.status === 'arch' ? ` · ${s.prem}–${s.closed}` : ''}</div>
      <div class="t">«${esc(s.t)}»</div>
      <div class="muted" style="font-size:13px">${esc(s.author)}<br>${SCENES[s.scene].n}</div>
    </a>`).join('')}
  </div>`);
}

/* -------- страница спектакля: девять блоков ТЗ -------- */
function spect(id) {
  const s = byId[id]; if (!s) return notFound();
  const evs = showsOf(id).filter(e => !e.soldout);
  const evsAll = showsOf(id);
  const press = PRESS.filter(p => p.spect === id);
  let bn = 0; const B = (t) => `<div class="blockh"><h2>${t}</h2><span class="n">блок ${++bn} из 9</span></div>`;
  return page('#/repertoire', `
  <div class="crumbs"><a href="#/">Главная</a> / <a href="#/repertoire">Репертуар</a> / «${esc(s.t)}»</div>
  <section class="pad">
    <div class="two">
      <div>
        <div class="media"><span class="imgtag">афишная фотография</span></div>
        <div class="thumbs" style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:12px">
          ${[0,1,2,3].map(i => `<div style="background:var(--img);border-radius:6px;aspect-ratio:3/2;cursor:zoom-in" onclick="lightbox(${i})"></div>`).join('')}
        </div>
      </div>
      <div>
        <div class="kicker">${s.status === 'arch' ? 'Архивный спектакль' : (s.premiere ? 'Премьера сезона' : 'В репертуаре')}</div>
        <h1>«${esc(s.t)}»</h1>
        <p class="lead" style="font-size:18px">${esc(s.desc)}</p>
        <div class="metabox" style="margin-top:18px">
          <div class="r"><span class="k">Автор</span><span class="v">${esc(s.author)}</span></div>
          <div class="r"><span class="k">Режиссёр</span><span class="v">${esc(s.dir)}</span></div>
          <div class="r"><span class="k">Жанр</span><span class="v">${s.genre}</span></div>
          <div class="r"><span class="k">Возраст</span><span class="v">${s.age}</span></div>
          <div class="r"><span class="k">Продолжительность</span><span class="v">${s.dur}</span></div>
          <div class="r"><span class="k">Сцена</span><span class="v">${SCENES[s.scene].n}</span></div>
          <div class="r"><span class="k">Премьера</span><span class="v">${s.prem}${s.closed ? ` · снят в ${s.closed}` : ''}</span></div>
        </div>
        ${evs.length ? `<div style="margin-top:16px"><button class="btn dark" onclick="ticket('${evs[0].id}')">Купить билет — ${fmtD(evs[0].date)}</button></div>` : ''}
      </div>
    </div>

    ${B('О спектакле')}
    <p style="max-width:760px">${esc(s.desc)}</p>
    ${s.long ? `<p class="muted" style="max-width:760px">${esc(s.long)}</p>` : ''}

    ${B('Даты и билеты')}
    ${evsAll.length ? evsAll.map(e => `
      <div class="afrow">
        <div class="tm">${e.time}</div>
        <div class="sp"><span class="t">${fmtD(e.date, true)}</span>
          <div class="m">${SCENES[byId[e.spect].scene].n}</div></div>
        <div class="cast" style="grid-column:span 2">${castOn(e).slice(0, 3).map(c => `<a href="#/artist/${c.artist.id}" style="text-decoration:underline">${esc(c.artist.n)}</a> — ${esc(c.role)}`).join(', ')}</div>
        <div>${e.soldout ? '<div class="soldout">Продано</div>' : `<button class="btn dark sm" style="width:100%" onclick="ticket('${e.id}')">Билеты</button>`}</div>
      </div>`).join('') : '<p class="muted">Ближайших показов нет' + (s.status === 'arch' ? ' — спектакль снят с репертуара.' : '.') + '</p>'}

    ${B('Артисты и роли')}
    <div class="muted" style="font-size:13px;margin-bottom:6px">У ролей с двумя исполнителями состав объявляется на дату — см. блок «Даты и билеты».</div>
    ${s.roles.map(role => `
      <div class="castgrp"><div class="lbl">${esc(role.r)}${role.a.length > 1 ? ' · два состава' : ''}</div>
      <div class="grid g3">${role.a.map(aid => { const a = byId[aid]; return `
        <a class="person" href="#/artist/${a.id}"><span class="ava"></span>
          <span><span class="nm">${esc(a.n)}</span><br><span class="rl">${a.grp}</span></span></a>`; }).join('')}
      </div></div>`).join('')}

    ${B('Постановочная группа')}
    <div class="metabox" style="max-width:560px">
      ${s.team.map(([k, v]) => `<div class="r"><span class="k">${k}</span><span class="v">${esc(v)}</span></div>`).join('')}
    </div>

    ${B('Фотогалерея')}
    <div class="gal">${[0,1,2,3,4,5,6,7].map(i => `<div onclick="lightbox(${i})"><span class="imgtag">фото ${i + 1}</span></div>`).join('')}</div>

    ${B('Видео')}
    <div class="muted" style="font-size:13px;margin-bottom:10px">Собственный видеоплеер театра — трейлеры и видеоотзывы размещаются на инфраструктуре театра, без внешних видеосервисов.</div>
    <div class="player" style="max-width:760px">
      <div class="scene">трейлер спектакля · MP4 / WebM · 1080p</div>
      <div class="bar"><span class="pp" onclick="toast('Прототип: воспроизведение в собственном плеере')">▶</span>
        <span>01:12</span><span class="tl"><span class="pr"></span></span><span>03:40</span>
        <span class="meta">HD · субтитры · ⛶</span></div>
    </div>

    ${B('Отзывы зрителей')}
    <div class="muted" style="font-size:13px;margin-bottom:10px">Текстовые и видеоотзывы публикуются после модерации.</div>
    <div class="grid g2" style="max-width:900px">
      ${s.reviews.map(r => `<div class="review">
        ${r.video ? `<div class="player" style="margin-bottom:12px"><div class="scene">видеоотзыв</div><div class="bar"><span class="pp">▶</span><span class="tl"><span class="pr" style="width:12%"></span></span><span class="meta">00:42</span></div></div>` : ''}
        <div>${esc(r.tx)}</div><div class="who">${esc(r.who)}</div></div>`).join('') || '<p class="muted">Отзывов пока нет — оставьте первый.</p>'}
    </div>
    <div style="margin-top:14px"><button class="btn" onclick="toast('Прототип: форма отзыва отправлена на модерацию')">Оставить отзыв</button>
    <button class="btn" onclick="toast('Прототип: загрузка видеоотзыва → модерация')">Записать видеоотзыв</button></div>

    ${B('СМИ о спектакле')}
    ${press.length ? press.map(p => `
      <div class="pressrow"><a class="lnk" onclick="toast('Прототип: переход на сайт издания')" style="text-decoration:underline">${esc(p.t)}</a>
      <span class="src">${p.src} · ${fmtD(p.date)}</span></div>`).join('') : '<p class="muted">Публикаций пока нет.</p>'}

    ${B('Смотрите также')}
    <div class="grid g4">${SPECTS.filter(x => x.id !== id && x.status === 'rep' && (x.scene === s.scene || x.genre === s.genre)).slice(0, 4).map(x => `
      <a class="card tile" href="#/spect/${x.id}"><div class="img p23"><span class="imgtag">афиша</span></div>
      <div class="t">«${esc(x.t)}»</div><div class="muted" style="font-size:13px">${x.genre} · ${SCENES[x.scene].n}</div></a>`).join('')}
    </div>
  </section>`);
}

function lightbox(i) {
  const root = document.getElementById('modal-root');
  root.innerHTML = `<div class="lb" onclick="if(event.target===this)closeModal()">
    <div class="fr">фото ${i + 1} · полноэкранный просмотр</div>
    <div class="nav"><span onclick="lightbox(${(i + 7) % 8})">← предыдущее</span><span onclick="closeModal()">закрыть ✕</span><span onclick="lightbox(${(i + 1) % 8})">следующее →</span></div>
  </div>`;
}

/* -------- артисты -------- */
function artists() {
  const grp = (g) => ARTISTS.filter(a => a.grp === g);
  const block = (g) => `
    <h2>${g}</h2>
    <div class="grid g4">${grp(g).map(a => `
      <a class="card tile arttile" href="#/artist/${a.id}">
        <div class="img"></div>
        <div class="t">${esc(a.n)}</div>
        <div class="muted" style="font-size:13px">${a.plays.length ? a.plays.slice(0, 2).map(p => '«' + esc(byId[p.spect].t) + '»').join(', ') : ''}</div>
      </a>`).join('')}
    </div>`;
  return page('#/artists', `
  <div class="crumbs"><a href="#/">Главная</a> / Артисты</div>
  <h1>Артисты</h1>
  <p class="lead" style="font-size:17px">Фотографии в каталоге — чёрно-белые, при наведении становятся цветными.</p>
  ${block('Труппа')}
  ${block('Приглашённые артисты')}`);
}

function artist(id) {
  const a = byId[id]; if (!a) return notFound();
  const upcoming = showsWith(id);
  return page('#/artists', `
  <div class="crumbs"><a href="#/">Главная</a> / <a href="#/artists">Артисты</a> / ${esc(a.n)}</div>
  <section class="pad"><div class="two" style="grid-template-columns:380px 1fr">
    <div class="arttile"><div class="img media" style="aspect-ratio:3/4"></div></div>
    <div>
      <div class="kicker">${a.grp}${a.since ? ' · в театре с ' + a.since + ' года' : ''}</div>
      <h1>${esc(a.n)}</h1>
      <p class="lead" style="font-size:17px">${esc(a.bio)}</p>

      <h2>Роли в репертуаре</h2>
      <div class="grid g2">${a.plays.map(p => { const s = byId[p.spect]; return `
        <a class="card" href="#/spect/${s.id}"><div class="kicker">${s.status === 'arch' ? 'архив' : SCENES[s.scene].n}</div>
        <div class="t" style="font-weight:500">«${esc(s.t)}»</div><div class="muted" style="font-size:13px">роль: ${esc(p.role)}</div></a>`; }).join('') || '<p class="muted">Нет ролей в текущем репертуаре.</p>'}
      </div>

      <h2>Ближайшие выходы на сцену</h2>
      ${upcoming.slice(0, 5).map(e => { const s = byId[e.spect]; return `
        <div class="afrow" style="grid-template-columns:64px 1fr 130px">
          <div class="tm">${e.time}</div>
          <div class="sp"><span class="t">${fmtD(e.date, true)} — «${esc(s.t)}»</span><div class="m">${SCENES[s.scene].n}</div></div>
          <div>${e.soldout ? '<div class="soldout">Продано</div>' : `<button class="btn sm" style="width:100%" onclick="ticket('${e.id}')">Билеты</button>`}</div>
        </div>`; }).join('') || '<p class="muted">В афише ближайших месяцев выходов нет.</p>'}
    </div>
  </div></section>`);
}

/* -------- о театре -------- */
const ABOUT_SUBS = [
  ['history', 'История'], ['building', 'Здания и сцены'], ['chrono', 'Хронограф'],
  ['archive', 'Архив спектаклей'], ['tours', 'Гастроли'], ['awards', 'Награды'],
  ['prize', 'Премия Табакова'], ['founders', 'Создатели'], ['staff', 'Сотрудники'], ['docs', 'Документы'],
];

function about(sub) {
  sub = sub || 'history';
  const inner = {
    history: `<h1>История театра</h1>
      <p class="lead">Театр вырос из студии, которую Олег Табаков набрал в 1974 году. В 1987-м студия официально открылась в подвале дома на улице Чаплыгина — так появился театр, который зрители до сих пор называют «Табакеркой».</p>
      <p style="max-width:760px">С 2016 года у театра две сцены: историческая — «Подвал» на Чаплыгина — и новая Основная сцена на Малой Сухаревской площади. С 2018 года художественный руководитель театра — Владимир Машков.</p>
      <p style="max-width:760px" class="muted">Подробная история по десятилетиям, с фотографиями и документами эпохи, переносится с текущего сайта и дополняется материалами архива театра.</p>
      <div class="media wide" style="max-width:760px;margin-top:20px"><span class="imgtag">историческая фотография</span></div>`,
    building: `<h1>Здания и сцены</h1>
      <div class="grid g2" style="margin-top:20px">
        <div class="card"><div class="media wide" style="margin-bottom:14px"><span class="imgtag">фото здания</span></div>
          <h3 style="margin:0">${SCENES.main.n}</h3><p class="muted">${SCENES.main.addr} · ${SCENES.main.metro}. Зал на 400 мест, открыта в 2016 году. Большая форма, музыкальные спектакли, премьеры.</p></div>
        <div class="card"><div class="media wide" style="margin-bottom:14px"><span class="imgtag">фото здания</span></div>
          <h3 style="margin:0">${SCENES.podval.n}</h3><p class="muted">${SCENES.podval.addr} · ${SCENES.podval.metro}. Легендарный подвал, где театр открылся в 1987 году. Камерные спектакли, зал на 120 мест.</p></div>
      </div>`,
    chrono: `<h1>Хронограф</h1>
      <p class="lead" style="font-size:17px">Ключевые даты истории театра. В полной версии — интерактивная шкала с фотографиями и документами.</p>
      <div class="chrono">${CHRONO.map(c => `<div class="chev"><div class="y">${c.y}</div><div class="tx">${esc(c.tx)}</div></div>`).join('')}</div>`,
    archive: `<h1>Архив спектаклей</h1>
      <p class="lead" style="font-size:17px">Спектакли прошлых лет: описания, составы, фотографии и пресса сохраняются в архиве сайта.</p>
      <div class="grid g4" style="margin-top:20px">${SPECTS.filter(s => s.status === 'arch').map(s => `
        <a class="card tile" href="#/spect/${s.id}"><div class="img p23"><span class="imgtag">афиша</span></div>
        <div class="kicker">${s.prem}–${s.closed}</div><div class="t">«${esc(s.t)}»</div>
        <div class="muted" style="font-size:13px">${esc(s.author)}</div></a>`).join('')}</div>`,
    tours: `<h1>Гастроли</h1>
      <p class="lead" style="font-size:17px">Ближайшие гастроли и история выездов театра.</p>
      <div class="afrow" style="grid-template-columns:130px 1fr 200px"><div class="tm">Ноябрь 2026</div>
        <div class="sp"><span class="t">Санкт-Петербург, сцена БДТ</span><div class="m">«Чайка», «Старший сын»</div></div>
        <div class="muted" style="font-size:13px">билеты — на сайте площадки</div></div>
      <div class="afrow" style="grid-template-columns:130px 1fr 200px"><div class="tm">Март 2027</div>
        <div class="sp"><span class="t">Екатеринбург</span><div class="m">«Ревизор»</div></div>
        <div class="muted" style="font-size:13px">даты уточняются</div></div>`,
    awards: `<h1>Награды</h1>
      <p class="lead" style="font-size:17px">Премии и номинации театра и артистов. Раздел наполняется из архива театра.</p>
      <div class="metabox" style="max-width:680px;margin-top:16px">
        <div class="r"><span class="k">2026</span><span class="v">Номинация «Золотая маска» — «На дне», лучшая женская роль</span></div>
        <div class="r"><span class="k">2025</span><span class="v">Премия города — спектакль «Ревизор»</span></div>
        <div class="r"><span class="k">2024</span><span class="v">Фестиваль «Черешневый лес» — участие с «Двенадцатой ночью»</span></div>
      </div>`,
    prize: `<h1>Премия Олега Табакова</h1>
      <p class="lead" style="font-size:17px">Премия вручается артистам, педагогам и деятелям театра. На странице — положение о премии, состав жюри и лауреаты по годам.</p>
      <div class="metabox" style="max-width:680px;margin-top:16px">
        <div class="r"><span class="k">2026</span><span class="v">Список лауреатов — переносится с текущего сайта</span></div>
        <div class="r"><span class="k">2025</span><span class="v">Список лауреатов — переносится с текущего сайта</span></div>
      </div>`,
    founders: `<h1>Создатели театра</h1>
      <div class="grid g3" style="margin-top:18px">
        <div class="card tile arttile"><div class="img"></div><div class="t">Олег Табаков</div>
          <div class="muted" style="font-size:13px">1935–2018. Основатель театра, народный артист СССР. Биография, фотографии и видеоархив.</div></div>
        <div class="card tile arttile"><div class="img"></div><div class="t">Первая студия</div>
          <div class="muted" style="font-size:13px">Артисты и педагоги, начинавшие театр в 1970–80-е.</div></div>
        <div class="card tile arttile"><div class="img"></div><div class="t">Художественное руководство</div>
          <div class="muted" style="font-size:13px">С 2018 года театр возглавляет Владимир Машков.</div></div>
      </div>`,
    staff: `<h1>Сотрудники</h1>
      <p class="lead" style="font-size:17px">Администрация, постановочная часть, службы театра.</p>
      <div class="metabox" style="max-width:680px;margin-top:16px">
        <div class="r"><span class="k">Художественное руководство</span><span class="v">карточки с контактами</span></div>
        <div class="r"><span class="k">Дирекция</span><span class="v">карточки с контактами</span></div>
        <div class="r"><span class="k">Пресс-служба</span><span class="v">press@tabakov.ru</span></div>
        <div class="r"><span class="k">Постановочная часть</span><span class="v">карточки подразделений</span></div>
      </div>`,
    docs: `<h1>Документы</h1>
      <p class="lead" style="font-size:17px">Официальные документы театра.</p>
      <div style="max-width:680px;margin-top:8px">${DOCS.map(([t, m]) => `
        <div class="doc"><a class="lnk" style="text-decoration:underline" onclick="toast('Прототип: скачивание документа')">${t}</a><span class="sz">${m}</span></div>`).join('')}</div>`,
  }[sub] || '<h1>Раздел</h1>';
  return page('#/about', `
  <div class="crumbs"><a href="#/">Главная</a> / О театре</div>
  <div class="abgrid" style="margin-top:14px">
    <div class="abmenu">${ABOUT_SUBS.map(([k, t]) => `<a href="#/about/${k}" class="${k === sub ? 'on' : ''}">${t}</a>`).join('')}</div>
    <div>${inner}</div>
  </div>`);
}

/* -------- пресс-центр -------- */
function press(q) {
  const tab = q.tab || 'news';
  return page('#/press', `
  <div class="crumbs"><a href="#/">Главная</a> / Пресс-центр</div>
  <h1>Пресс-центр</h1>
  <div class="toolbar"><div class="tools">
    <a class="fchip ${tab === 'news' ? 'on' : ''}" href="#/press?tab=news">Новости театра</a>
    <a class="fchip ${tab === 'smi' ? 'on' : ''}" href="#/press?tab=smi">СМИ о театре</a>
    <a class="fchip" onclick="toast('Прототип: пресс-кит (логотипы, фото, справка) — скачивание архива')">Пресс-кит ↓</a>
  </div></div>
  ${tab === 'news' ? `<div class="grid g3">${NEWS.map(n => `
    <a class="card" href="#/news/${n.id}">
      <div class="kicker">${fmtD(n.date)}</div>
      <div class="t" style="font-weight:500;margin-top:6px">${esc(n.t)}</div>
      <div class="muted" style="font-size:13px;margin-top:8px">${esc(n.tx.slice(0, 110))}…</div>
    </a>`).join('')}</div>`
  : PRESS.map(p => `
    <div class="pressrow">
      <div><a class="lnk" style="text-decoration:underline" onclick="toast('Прототип: переход на сайт издания')">${esc(p.t)}</a>
      ${p.spect ? ` <a class="chip" style="font-size:12px;padding:3px 10px" href="#/spect/${p.spect}">«${esc(byId[p.spect].t)}»</a>` : ''}</div>
      <span class="src">${p.src} · ${fmtD(p.date)}</span>
    </div>`).join('')}`);
}

function newsPage(id) {
  const n = byId[id]; if (!n) return notFound();
  return page('#/press', `
  <div class="crumbs"><a href="#/">Главная</a> / <a href="#/press">Пресс-центр</a> / Новость</div>
  <section class="pad" style="max-width:760px">
    <div class="kicker">${fmtD(n.date)}</div>
    <h1 style="font-size:32px">${esc(n.t)}</h1>
    <div class="media wide" style="margin:18px 0"><span class="imgtag">фотография к новости</span></div>
    <p class="lead" style="font-size:17px">${esc(n.tx)}</p>
    ${n.spect ? `<p>Связанный спектакль: <a class="chip" href="#/spect/${n.spect}">«${esc(byId[n.spect].t)}»</a></p>` : ''}
  </section>`);
}

/* -------- контакты -------- */
function contacts() {
  return page('#/contacts', `
  <div class="crumbs"><a href="#/">Главная</a> / Контакты</div>
  <h1>Контакты</h1>
  <div class="grid g2" style="margin-top:18px">
    ${Object.values(SCENES).map(sc => `
    <div class="card">
      <div class="media wide" style="margin-bottom:14px;display:flex;align-items:center;justify-content:center;color:#999">карта проезда</div>
      <h3 style="margin:0">${sc.n}</h3>
      <div class="metabox" style="margin-top:12px">
        <div class="r"><span class="k">Адрес</span><span class="v">${sc.addr}</span></div>
        <div class="r"><span class="k">Метро</span><span class="v">${sc.metro}</span></div>
        <div class="r"><span class="k">Касса</span><span class="v">ежедневно 12:00–19:00</span></div>
        <div class="r"><span class="k">Телефон</span><span class="v">+7 (495) 000-00-00</span></div>
      </div>
    </div>`).join('')}
  </div>
  <h2>Службы театра</h2>
  <div class="metabox" style="max-width:680px">
    <div class="r"><span class="k">Пресс-служба</span><span class="v">press@tabakov.ru</span></div>
    <div class="r"><span class="k">Организованные группы</span><span class="v">group@tabakov.ru</span></div>
    <div class="r"><span class="k">Аренда пространств</span><span class="v">event@tabakov.ru</span></div>
    <div class="r"><span class="k">Общие вопросы</span><span class="v">info@tabakov.ru</span></div>
  </div>`);
}

/* -------- поиск -------- */
function search(q) {
  const query = (q.q || '').trim().toLowerCase();
  let res = '';
  if (query) {
    const sp = SPECTS.filter(s => (s.t + ' ' + s.author + ' ' + s.dir).toLowerCase().includes(query));
    const ar = ARTISTS.filter(a => a.n.toLowerCase().includes(query));
    const nw = NEWS.filter(n => (n.t + ' ' + n.tx).toLowerCase().includes(query));
    res = `
    ${sp.length ? `<h2>Спектакли <span class="muted" style="font-weight:400;font-size:15px">${sp.length}</span></h2>
      <div class="grid g4">${sp.map(s => `<a class="card tile" href="#/spect/${s.id}"><div class="img p23"><span class="imgtag">афиша</span></div><div class="t">«${esc(s.t)}»</div><div class="muted" style="font-size:13px">${esc(s.author)}</div></a>`).join('')}</div>` : ''}
    ${ar.length ? `<h2>Артисты <span class="muted" style="font-weight:400;font-size:15px">${ar.length}</span></h2>
      <div class="grid g4">${ar.map(a => `<a class="card tile arttile" href="#/artist/${a.id}"><div class="img"></div><div class="t">${esc(a.n)}</div></a>`).join('')}</div>` : ''}
    ${nw.length ? `<h2>Новости <span class="muted" style="font-weight:400;font-size:15px">${nw.length}</span></h2>
      ${nw.map(n => `<div class="pressrow"><a href="#/news/${n.id}" style="text-decoration:underline">${esc(n.t)}</a><span class="src">${fmtD(n.date)}</span></div>`).join('')}` : ''}
    ${!sp.length && !ar.length && !nw.length ? '<p class="muted">Ничего не найдено. Попробуйте изменить запрос.</p>' : ''}`;
  }
  return page('#/search', `
  <div class="crumbs"><a href="#/">Главная</a> / Поиск</div>
  <h1>Поиск</h1>
  <div style="display:flex;gap:10px;max-width:640px;margin:10px 0 20px">
    <input class="inp" id="sq" value="${esc(q.q || '')}" placeholder="Спектакль, артист, новость…"
      onkeydown="if(event.key==='Enter')location.hash='#/search?q='+encodeURIComponent(this.value)">
    <button class="btn dark" onclick="location.hash='#/search?q='+encodeURIComponent(document.getElementById('sq').value)">Найти</button>
  </div>
  ${query ? `<div class="muted" style="font-size:13px;margin-bottom:8px">По запросу «${esc(q.q)}»:</div>` : '<p class="muted">Поиск работает по спектаклям, артистам и новостям.</p>'}
  ${res}`);
}

function notFound() { return page('', '<section class="pad"><h1>Страница не найдена</h1><p><a class="chip" href="#/">На главную</a></p></section>'); }

/* ------------------------------ РОУТЕР ------------------------------ */

function parseHash(h) {
  h = h || '#/';
  const [path, qs] = h.split('?');
  const q = {}; new URLSearchParams(qs || '').forEach((v, k) => q[k] = v);
  const seg = path.replace(/^#\//, '').split('/').filter(Boolean);
  return { seg, q };
}

function render(h) {
  const { seg, q } = parseHash(h);
  const app = document.getElementById('app');
  let html;
  if (!seg.length) html = home();
  else if (seg[0] === 'afisha') html = afisha(q);
  else if (seg[0] === 'repertoire') html = repertoire(q);
  else if (seg[0] === 'spect') html = spect(seg[1]);
  else if (seg[0] === 'artists') html = artists();
  else if (seg[0] === 'artist') html = artist(seg[1]);
  else if (seg[0] === 'about') html = about(seg[1]);
  else if (seg[0] === 'press') html = press(q);
  else if (seg[0] === 'news') html = newsPage(seg[1]);
  else if (seg[0] === 'contacts') html = contacts();
  else if (seg[0] === 'search') html = search(q);
  else html = notFound();
  app.innerHTML = html;
  closeModal();
  window.scrollTo(0, 0);
}

/* ------------------------------ A11Y ------------------------------ */

function a11yOn() { document.body.classList.add('a11y'); try { localStorage.setItem('tot_a11y', '1'); } catch (e) {} }
function a11yOff() { document.body.classList.remove('a11y', 'fsz2'); try { localStorage.removeItem('tot_a11y'); localStorage.removeItem('tot_a11y_f'); } catch (e) {} }
function a11yFont() { document.body.classList.toggle('fsz2'); try { localStorage.setItem('tot_a11y_f', document.body.classList.contains('fsz2') ? '1' : ''); } catch (e) {} }

/* ------------------------------ SPLASH ------------------------------ */

function splash() {
  let seen = false; try { seen = !!sessionStorage.getItem('tot_splash'); } catch (e) {}
  if (seen || (location.hash && location.hash !== '#/')) return;
  const el = document.createElement('div');
  el.id = 'splash';
  el.innerHTML = `<div class="sq">Театр Олега Табакова</div>
    <div class="skip">анимированная заставка · клик — пропустить</div>
    <div class="note">В финальной версии здесь короткий брендированный ролик при первом заходе (5–7 секунд по ТЗ, с возможностью пропустить). Показывается один раз за визит.</div>`;
  const hide = () => { el.classList.add('hide'); setTimeout(() => el.remove(), 550); };
  el.onclick = hide;
  document.body.appendChild(el);
  try { sessionStorage.setItem('tot_splash', '1'); } catch (e) {}
  setTimeout(hide, 2600);
}

/* ------------------------------ INIT ------------------------------ */

window.addEventListener('hashchange', () => render(location.hash));
try {
  if (localStorage.getItem('tot_a11y')) document.body.classList.add('a11y');
  if (localStorage.getItem('tot_a11y_f')) document.body.classList.add('fsz2');
} catch (e) {}
render(location.hash);
splash();
