/* Театр Олега Табакова — UX клик-прототип сайта. Charmer, 2026.
   Серый вайрфрейм: структура и логика, не дизайн.
   Контент перенесён с tabakov.ru (сентябрь 2026): репертуар, афиша, труппа,
   составы трёх спектаклей, публикации СМИ. Остальные описания и биографии
   переносятся программно на этапе «Перенос данных». */

/* ------------------------------ ДАННЫЕ ------------------------------ */

const SCENES = {
  suh:  { n: 'Сцена на Сухаревской', addr: 'Малая Сухаревская пл., 5', metro: 'м. Сухаревская' },
  ist:  { n: 'Историческая сцена', addr: 'ул. Чаплыгина, 1А, стр. 1', metro: 'м. Чистые пруды' },
  sovr: { n: 'Сцена театра «Современник»', addr: 'Чистопрудный бульвар, 19', metro: 'м. Чистые пруды' },
};
function scN(id) { return id && SCENES[id] ? SCENES[id].n : 'Сцена — см. tabakov.ru'; }
function scA(id) { return id && SCENES[id] ? SCENES[id].addr : ''; }

const PARTNERS = [
  { id: 'mosbilet',  n: 'Мосбилет',     m: 'билеты города Москвы' },
  { id: 'intickets', n: 'Intickets.ru', m: 'билетный оператор' },
  { id: 'ticketland',n: 'Ticketland.ru',m: 'билетный оператор' },
  { id: 'yandex',    n: 'Яндекс Афиша', m: 'билетный сервис' },
  { id: 'kassir',    n: 'Kassir.ru',    m: 'билетный оператор' },
  { id: 'mtslive',   n: 'live.mts.ru',  m: 'билетный сервис' },
];

const TRP = 'Труппа театра', GST = 'Приглашённые артисты', TST = 'Студенты ТШТ';
const ARTISTS = [
  { id:'mashkov', n:'Владимир Машков', grp:TRP, rank:'народный артист РФ', bio:'Народный артист РФ, художественный руководитель театра с 2018 года. Роль Абрама Шварца в «Матросской Тишине» играет более четверти века — со времён Театра-студии Табакова.' },
  { id:'zudina', n:'Марина Зудина', grp:TRP, rank:'народная артистка РФ' },
  { id:'ugrumov', n:'Сергей Угрюмов', grp:TRP, rank:'народный артист РФ' },
  { id:'brodetskiy', n:'Дмитрий Бродецкий', grp:TRP, rank:'заслуженный артист РФ' },
  { id:'egorov', n:'Виталий Егоров', grp:TRP, rank:'заслуженный артист РФ' },
  { id:'ilyin', n:'Павел Ильин', grp:TRP, rank:'заслуженный артист РФ' },
  { id:'lapteva', n:'Алёна Лаптева', grp:TRP, rank:'заслуженная артистка РФ' },
  { id:'miller_e', n:'Евгений Миллер', grp:TRP, rank:'заслуженный артист РФ' },
  { id:'salakova', n:'Марина Салакова', grp:TRP, rank:'заслуженная артистка РФ' },
  { id:'timokhina', n:'Надежда Тимохина', grp:TRP, rank:'заслуженная артистка РФ' },
  { id:'avtushenko', n:'Арина Автушенко', grp:TRP },
  { id:'bezsonova', n:'Дарья Безсонова', grp:TRP },
  { id:'beiman', n:'Софья Бейман', grp:TRP },
  { id:'bogatireva', n:'Анастасия Богатырева', grp:TRP },
  { id:'bru', n:'Милана Бру', grp:TRP },
  { id:'bulavina', n:'Диана Булавина', grp:TRP },
  { id:'dolgikh', n:'Арина Долгих', grp:TRP },
  { id:'kasimov', n:'Артур Касимов', grp:TRP },
  { id:'kachalova', n:'Наталия Качалова', grp:TRP },
  { id:'kiselev', n:'Аркадий Киселёв', grp:TRP },
  { id:'knazev', n:'Алексей Князев', grp:TRP },
  { id:'kryukova', n:'Александра Крюкова', grp:TRP },
  { id:'kuzmin', n:'Александр Кузьмин', grp:TRP },
  { id:'limin', n:'Александр Лимин', grp:TRP },
  { id:'miller_vlad', n:'Владислав Миллер', grp:TRP },
  { id:'naumov', n:'Владислав Наумов', grp:TRP },
  { id:'petrov', n:'Игорь Петров', grp:TRP },
  { id:'popova', n:'Наталья Попова', grp:TRP },
  { id:'rogachev', n:'Антон Рогачев', grp:TRP },
  { id:'sachkov', n:'Максим Сачков', grp:TRP },
  { id:'sekste', n:'Яна Сексте', grp:TRP },
  { id:'sitnikova', n:'Анастасия Ситникова', grp:TRP },
  { id:'smyshnikov', n:'Севастьян Смышников', grp:TRP },
  { id:'timushkova', n:'Анастасия Тимушкова', grp:TRP },
  { id:'usoltsev', n:'Алексей Усольцев', grp:TRP },
  { id:'utekhina', n:'Ксения Утехина', grp:TRP },
  { id:'ufimcev', n:'Никита Уфимцев', grp:TRP },
  { id:'fisenko', n:'Александр Фисенко', grp:TRP },
  { id:'khaperskaya', n:'Нелли Хапёрская', grp:TRP },
  { id:'xoxlov', n:'Егор Хохлов', grp:TRP },
  { id:'chernyshov', n:'Павел Чернышёв', grp:TRP },
  { id:'shevando', n:'Павел Шевандо', grp:TRP },
  { id:'shugarev', n:'Михаил Шугарёв', grp:TRP },
  { id:'yashin', n:'Гордей Яшин', grp:TRP },
  { id:'znamenskaya', n:'Яна Знаменская', grp:TRP },
  { id:'lavronenko', n:'Константин Лавроненко', grp:GST, rank:'народный артист РФ' },
  { id:'chursin', n:'Юрий Чурсин', grp:GST },
  { id:'arduhanyan', n:'Давид Ардуханян', grp:GST },
  { id:'klyamchuk', n:'Николай Клямчук', grp:GST },
  { id:'antonov', n:'Олег Антонов', grp:GST },
  { id:'elkin', n:'Алексей Ёлкин', grp:GST },
  { id:'masalkov', n:'Евгений Масалков', grp:GST },
  { id:'masalkova', n:'Екатерина Масалкова', grp:GST },
  { id:'petrova', n:'Алина Петрова', grp:GST },
  { id:'hazova', n:'Марина Хазова', grp:GST },
  { id:'ryaboy', n:'Евгений Рябой', grp:GST },
  { id:'manakov', n:'Егор Манаков', grp:TST },
  { id:'sazonova', n:'Валентина Сазонова', grp:TST },
  { id:'salomahin', n:'Глеб Саломахин', grp:TST },
];

const MOVE_NOTE = 'Полное описание, составы и фотографии переносятся с tabakov.ru программно — этап «Перенос данных».';

const SPECTS = [
  { id:'zv', t:'Звёздный час по местному времени', author:'Георгий Николаев', dir:'Владислав Миллер', genre:'Трагикомедия', age:'18+', dur:'1 час 30 минут', scene:'ist', prem:'28 августа 2026', price:'2500–8000 ₽', status:'rep', premiere:true,
    desc:'Одна фраза — и жизнь маленького города летит кувырком. «Уезжаю я…» — говорит Коля. Сгоряча, от скуки или просто так. Но слух об отъезде разрастается: соседи делят его вещи, близкие — его судьбу, а он сам ещё никуда не уехал.',
    long:'На сцене — смех и слёзы, абсурд и поэзия. История о каждом, кто хотя бы раз чувствовал себя лишним, и о том, как одна случайная фраза может стать резким поворотом на бездорожье.',
    roles:[ {r:'Коля', a:['manakov']}, {r:'Федя', a:['kuzmin']}, {r:'Валя', a:['sekste']}, {r:'Филомеев', a:['kiselev']}, {r:'Наталья', a:['bulavina']}, {r:'Татьяна, мать Натальи', a:['kachalova']}, {r:'Саратов', a:['naumov']}, {r:'Филипп Макарыч', a:['petrov']}, {r:'Василич', a:['usoltsev']}, {r:'Кореш', a:['shugarev','yashin']}, {r:'Скупщица', a:['znamenskaya']} ],
    team:[ ['Режиссёр','Владислав Миллер'], ['Художник','Филипп Шейн'], ['Художник по костюмам','Мария Боровская'], ['Музыкальный руководитель','Алексей Ёлкин'], ['Художник по свету','Мария Васильева'] ] },
  { id:'tot13', t:'ТОТ самый №13', author:'Рэй Куни', dir:'Владимир Машков', genre:'Комедия', age:'18+', dur:'2 часа, один антракт', scene:'sovr', prem:'17 января 2026', price:'1500–25000 ₽', rating:'9.2', status:'rep', premiere:true,
    desc:'Помощник британского премьер-министра Ричард Уилли уединяется в номере отеля с Джейн — юной секретаршей своего политического оппонента. Вечер перестаёт быть томным, когда герои обнаруживают бездыханное тело незнакомца.',
    long:'Третья версия легендарного спектакля: «№13» Владимир Машков впервые поставил в 2001 году, и на протяжении десятилетий это был самый кассовый спектакль Москвы. Премьера новой версии прошла 17 января 2026 года — в первый День Артиста.',
    roles:[ {r:'Ричард Уилли', a:['ugrumov']}, {r:'Джордж Пигден', a:['miller_vlad']}, {r:'Памела', a:['beiman','kryukova']}, {r:'Джейн Уорзингтон', a:['bulavina','utekhina']}, {r:'Ронни', a:['naumov','fisenko']}, {r:'Пиона', a:['bru','dolgikh']}, {r:'Мужское тело средних лет', a:['limin']}, {r:'Управляющий', a:['petrov']}, {r:'Официант', a:['knazev','shevando']} ],
    team:[ ['Режиссёр','Владимир Машков'], ['Художник, художник по костюмам','Александр Боровский'], ['Художник по свету','Дамир Исмагилов'], ['Хореография и пластика','Леонид Тимцуник'], ['Иллюзионные номера','Лерико и Михаил Цителашвили'] ] },
  { id:'mt', t:'Матросская Тишина', author:'Александр Галич', dir:'Владимир Машков', genre:'Трагедия', age:'16+', dur:'1 час 30 минут', scene:'sovr', prem:'27 января 2019', price:'3000–35000 ₽', rating:'9.4', status:'rep',
    desc:'Спектакль по одноимённой пьесе Александра Галича появился в репертуаре Театра-студии Табакова в 1990 году и десять лет оставался главным спектаклем «Табакерки». В 2019-м пьеса вернулась на сцену — в образе Абрама Шварца снова Владимир Машков.',
    long:'Визитная карточка Театра Олега Табакова. В основе — могучая сила требовательной, проницательной и безграничной родительской любви. «Наша „Матросская Тишина“ заслуживает жизни, а не забвения», — писал Олег Табаков.',
    roles:[ {r:'Абрам Шварц', a:['mashkov']}, {r:'Давид Шварц', a:['miller_vlad']}, {r:'Хана Гуревич', a:['sitnikova']}, {r:'Таня', a:['khaperskaya']}, {r:'Мейер Вольф', a:['egorov']}, {r:'Митя Жучков', a:['ugrumov']}, {r:'Роза', a:['sekste']}, {r:'Чернышев', a:['fisenko']}, {r:'Славка Лебедев', a:['ufimcev']}, {r:'Людмила Шутова', a:['dolgikh']}, {r:'Ариша, медсестра', a:['bogatireva','bezsonova']}, {r:'Одинцов', a:['kasimov']}, {r:'Лапшин', a:['usoltsev']}, {r:'Женька', a:['chernyshov']}, {r:'Кикнадзе', a:['knazev','yashin']}, {r:'Подполковник Захаров', a:['petrov','kuzmin']} ],
    team:[ ['Режиссёр восстановления','Владимир Машков'], ['Режиссёр восстановления','Александр Марин'], ['Художник, художник по костюмам','Александр Боровский'], ['Художники по свету','Айвар Салихов, Сергей Скорнецкий'], ['Музыкальное оформление','Сергей Никитин'] ] },
  { id:'oh', t:'Охота жить', author:'по рассказам Василия Шукшина', dir:'', genre:'Трагикомедия', age:'16+', status:'rep',
    desc:'Трагикомедия по рассказам Василия Шукшина.', roles:[], team:[] },
  { id:'sm', t:'Смертельный номер', author:'', dir:'Владимир Машков', genre:'Комедия', age:'16+', status:'rep',
    desc:'Комедия, режиссёр Владимир Машков.', roles:[], team:[] },
  { id:'na', t:'Наследники', author:'', dir:'', genre:'Трагикомедия', age:'16+', status:'rep',
    desc:'Трагикомедия, в главной роли Владимир Машков.', roles:[ {r:'Главная роль', a:['mashkov']} ], team:[] },
  { id:'ne', t:'Нежное сердце', author:'Владимир Соллогуб', dir:'', genre:'Водевиль', age:'16+', status:'rep', premiere:true,
    desc:'Водевиль по пьесе графа Владимира Соллогуба.', roles:[], team:[] },
  { id:'inns', t:'И никого не стало', author:'Агата Кристи', dir:'', genre:'Детективная драма', age:'16+', status:'rep',
    desc:'Детективная драма по пьесе Агаты Кристи.', roles:[], team:[] },
  { id:'rev', t:'Ревизор', author:'Николай Гоголь', dir:'Сергей Газаров', genre:'Комедия', age:'16+', status:'rep', sold:true,
    desc:'Комедия, режиссёр Сергей Газаров.', roles:[], team:[] },
  { id:'vs', t:'В списках не значился', author:'Борис Васильев', dir:'Владимир Машков', genre:'Военная драма', age:'12+', status:'rep', premiere:true,
    desc:'Военная драма, режиссёр Владимир Машков.', roles:[], team:[] },
  { id:'no', t:'Ночь в отеле', author:'', dir:'Владимир Машков', genre:'Комедия', age:'16+', status:'rep',
    desc:'Комедия, режиссёр Владимир Машков.', roles:[], team:[] },
  { id:'pt', t:'Позывной Тишина', author:'Олег Антонов', dir:'', genre:'Документальная драма', age:'16+', status:'rep', premiere:true,
    desc:'Документальная драма по пьесе Олега Антонова.', roles:[], team:[] },
  { id:'ss', t:'Старший сын', author:'Александр Вампилов', dir:'', genre:'Комедия', age:'16+', status:'rep',
    desc:'Комедия по пьесе Александра Вампилова.', roles:[], team:[] },
  { id:'bum', t:'Страсти по Бумбарашу', author:'', dir:'Владимир Машков', genre:'Музыкальная драма', age:'16+', status:'rep',
    desc:'Музыкальная драма, режиссёр Владимир Машков.', roles:[], team:[] },
  { id:'slnr', t:'С любимыми не расставайтесь', author:'Александр Володин', dir:'', genre:'Драма', age:'16+', status:'rep', premiere:true,
    desc:'Драма по пьесе Александра Володина.', roles:[], team:[] },
  { id:'vy', t:'Выбор', author:'', dir:'Алена Лаптева', genre:'Психологический триллер', age:'18+', status:'rep', premiere:true,
    desc:'Психологический триллер, режиссёр Алена Лаптева.', roles:[], team:[] },
];

/* Афиша сентября–октября 2026 — реальные даты с tabakov.ru */
const SHOWS = [
  { id:'e01', date:'2026-09-16', time:'19:00', spect:'oh' },
  { id:'e02', date:'2026-09-17', time:'19:00', spect:'inns' },
  { id:'e03', date:'2026-09-18', time:'19:00', spect:'tot13' },
  { id:'e04', date:'2026-09-19', time:'19:00', spect:'zv', soldout:true },
  { id:'e05', date:'2026-09-20', time:'19:00', spect:'vy' },
  { id:'e06', date:'2026-09-23', time:'19:00', spect:'ne' },
  { id:'e07', date:'2026-09-24', time:'19:00', spect:'slnr' },
  { id:'e08', date:'2026-09-25', time:'19:00', spect:'ss' },
  { id:'e09', date:'2026-09-26', time:'19:00', spect:'no' },
  { id:'e10', date:'2026-09-27', time:'19:00', spect:'zv', soldout:true },
  { id:'e11', date:'2026-09-29', time:'19:00', spect:'vy' },
  { id:'e12', date:'2026-09-30', time:'19:00', spect:'ne' },
  { id:'e13', date:'2026-10-01', time:'19:00', spect:'ne' },
  { id:'e14', date:'2026-10-03', time:'19:00', spect:'tot13' },
  { id:'e15', date:'2026-10-04', time:'19:00', spect:'slnr' },
  { id:'e16', date:'2026-10-05', time:'19:00', spect:'mt' },
  { id:'e17', date:'2026-10-07', time:'19:00', spect:'vy' },
  { id:'e18', date:'2026-10-08', time:'19:00', spect:'pt' },
  { id:'e19', date:'2026-10-09', time:'19:00', spect:'ss' },
  { id:'e20', date:'2026-10-10', time:'19:00', spect:'no' },
  { id:'e21', date:'2026-10-11', time:'19:00', spect:'zv' },
  { id:'e22', date:'2026-10-14', time:'19:00', spect:'ne' },
  { id:'e23', date:'2026-10-15', time:'19:00', spect:'na' },
  { id:'e24', date:'2026-10-16', time:'19:00', spect:'bum' },
  { id:'e25', date:'2026-10-17', time:'19:00', spect:'inns' },
  { id:'e26', date:'2026-10-18', time:'19:00', spect:'slnr' },
  { id:'e27', date:'2026-10-19', time:'19:00', spect:'vy' },
  { id:'e28', date:'2026-10-20', time:'19:00', spect:'no' },
  { id:'e29', date:'2026-10-21', time:'19:00', spect:'mt' },
  { id:'e30', date:'2026-10-22', time:'19:00', spect:'tot13' },
  { id:'e31', date:'2026-10-24', time:'19:00', spect:'vs' },
  { id:'e32', date:'2026-10-25', time:'19:00', spect:'zv' },
  { id:'e33', date:'2026-10-26', time:'19:00', spect:'ss' },
];

const NEWS = [
  { id:'n1', date:'2026-08-27', t:'Театр представил журналистам премьеру «Звёздный час по местному времени»', tx:'27 августа состоялся пресс-показ спектакля по пьесе Георгия Николаева. Журналисты одними из первых увидели постановку Владислава Миллера и пообщались с её создателями. Премьерные показы прошли 28 и 29 августа на Исторической сцене.', spect:'zv' },
  { id:'n2', date:'2026-08-06', t:'Гастроли в Севастополе: «Матросская Тишина» на фестивале «Херсонес»', tx:'Театр Олега Табакова приехал в Севастополь в третий раз — гастроли уже стали традиционными. Пресс-конференция прошла 6 августа в Детской школе искусств; театр участвует в фестивале оперы и балета «Херсонес».', spect:'mt' },
  { id:'n3', date:'2026-01-17', t:'«ТОТ самый №13»: премьера в День Артиста', tx:'Владимир Машков вернул на сцену легендарный спектакль «№13» в новом прочтении. Премьера прошла 17 января — в первый День Артиста, день рождения К. С. Станиславского. «ТОТ» в названии — сокращение от «Театр Олега Табакова».', spect:'tot13' },
];

const PRESS = [
  { id:'p1', src:'ТАСС', date:'2026-01-13', t:'Машков впервые представил зрителю третью версию своего спектакля «№13»', spect:'tot13' },
  { id:'p2', src:'Известия', date:'2026-01-14', t:'Владимир Машков вернул на сцену спектакль «№13» в новом прочтении', spect:'tot13' },
  { id:'p3', src:'Ведомости', date:'2026-01-19', t:'На клеточном уровне: премьера «ТОТ самый №13» в Театре Олега Табакова', spect:'tot13' },
  { id:'p4', src:'Комсомольская правда', t:'Рецензия на спектакль «ТОТ самый №13»: легенда возвращается', spect:'tot13' },
  { id:'p5', src:'Weekend', t:'«Толкаться локтями — это не мое». Сергей Угрюмов о ролях и марафонах', spect:'tot13' },
  { id:'p6', src:'ННТВ', t:'Спектакль «Матросская тишина» впервые покажут в Нижнем Новгороде', spect:'mt' },
];

const CHRONO = [
  { y:'1974', tx:'Олег Табаков набирает первую студию — драматический кружок, из которого вырастет будущий театр.' },
  { y:'1987', tx:'Официальное открытие театра-студии в подвале дома на улице Чаплыгина — легендарного «Подвала».' },
  { y:'1990', tx:'Премьера «Матросской Тишины» Александра Галича — главного спектакля «Табакерки» на десятилетие вперёд.' },
  { y:'2010', tx:'Основана Московская театральная школа Олега Табакова.' },
  { y:'2016', tx:'Открытие новой сцены на Малой Сухаревской площади.' },
  { y:'2018', tx:'Художественным руководителем театра становится Владимир Машков.' },
  { y:'2026', tx:'Сезон премьер: «ТОТ самый №13», «Звёздный час по местному времени», «В списках не значился».' },
];

const DOCS = [
  ['Устав театра', 'PDF'], ['Сведения об учредителе', 'PDF'],
  ['Правила посещения', 'PDF'], ['Политика обработки персональных данных', 'PDF'],
  ['Согласие на обработку персональных данных', 'PDF'], ['Информация о независимой оценке', 'ссылка'],
];

/* ------------------------------ ИНДЕКСЫ ------------------------------ */

const byId = {}; SPECTS.forEach(s => byId[s.id] = s); ARTISTS.forEach(a => byId[a.id] = a);
NEWS.forEach(n => byId[n.id] = n);

/* роли артиста строятся из спектаклей: сущность создаётся один раз, выводится везде */
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

function showsOf(spectId) { return SHOWS.filter(e => e.spect === spectId); }
function showsWith(artistId) {
  return SHOWS.filter(e => {
    const s = byId[e.spect]; if (!s) return false;
    return s.roles.some(role => {
      const onDate = e.cast && e.cast[role.r];
      return onDate ? onDate === artistId : role.a[0] === artistId;
    });
  });
}
function castOn(ev) {
  const s = byId[ev.spect];
  return s.roles.map(role => ({ role: role.r, artist: byId[(ev.cast && ev.cast[role.r]) || role.a[0]] }));
}

/* ------------------------------ КАРКАС ------------------------------ */

const NAV = [
  ['#/afisha', 'Афиша'], ['#/repertoire', 'Спектакли'], ['#/artists', 'Артисты'],
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
        <div style="margin-top:8px">Касса Исторической сцены — ул. Чаплыгина, 1А, стр. 1, ежедневно 11:00–21:00, +7 (495) 499-96-44<br>
        Касса в ГУМе — Красная площадь, 3, ежедневно 11:00–21:00, +7 (967) 089-84-71</div>
      </div>
      <div><a href="#/afisha">Афиша</a><br><a href="#/repertoire">Спектакли</a><br><a href="#/artists">Артисты</a></div>
      <div><a href="#/about">О театре</a><br><a href="#/about/chrono">Хронограф</a><br><a href="#/about/docs">Документы</a></div>
      <div><a href="#/press">Пресс-центр</a><br><a href="#/contacts">Контакты</a><br><a onclick="a11yOn()">Версия для слабовидящих</a></div>
    </div>
    <div class="protonote">UX-прототип сайта · Charmer · контент перенесён с tabakov.ru (сентябрь 2026), не для публичного использования · дизайн не является финальным</div>
  </div></footer>`;
}

function page(active, inner) { return header(active) + `<div class="wrap">${inner}</div>` + footer(); }

/* ------------------------------ СТРАНИЦЫ ------------------------------ */

function home() {
  const today = '2026-09-16';
  const next = SHOWS.filter(e => e.date >= today && !e.soldout).slice(0, 3);
  const prem = byId['zv'];
  return page('#/', `
  <section class="hero">
    <div class="kicker">Московский театр Олега Табакова · сезон 2026/27</div>
    <h1>Театр, который начался в подвале на Чаплыгина.</h1>
    <p class="lead">Историческая сцена на Чистых прудах, сцена на Сухаревской, большие спектакли на сцене «Современника». Афиша, репертуар, артисты и билеты — на одном сайте.</p>
    <div style="display:flex;gap:12px;margin-top:22px;flex-wrap:wrap">
      <a class="btn dark" href="#/afisha">Афиша и билеты</a>
      <a class="btn" href="#/repertoire">Спектакли</a>
      <a class="btn" href="#/spect/${prem.id}">Премьера: «${esc(prem.t)}»</a>
    </div>
  </section>

  <section class="hsec">
    <div class="hsec-h"><div class="hkick"><span class="hdot"></span>Ближайшие спектакли</div><a class="muted" href="#/afisha">Вся афиша →</a></div>
    <div class="grid g3">${next.map(e => { const s = byId[e.spect]; return `
      <a class="card tile" href="#/spect/${s.id}">
        <div class="img"><span class="imgtag">афишное фото</span></div>
        <div class="kicker">${fmtD(e.date)} · ${e.time} · ${scN(s.scene)}</div>
        <div class="t">«${esc(s.t)}»</div>
        <div class="muted" style="font-size:13px">${s.genre} · ${s.age}${s.premiere ? ' · премьера' : ''}</div>
        <div style="margin-top:12px"><span class="btn sm" onclick="event.preventDefault();ticket('${e.id}')">Купить билет</span></div>
      </a>`; }).join('')}
    </div>
  </section>

  <section class="hsec">
    <div class="hsec-h"><div class="hkick"><span class="hdot"></span>Премьера сезона</div></div>
    <a class="card" href="#/spect/${prem.id}" style="display:grid;grid-template-columns:1fr 1fr;gap:30px;align-items:center">
      <div class="media wide" style="aspect-ratio:16/9"><span class="imgtag">кадр из спектакля</span></div>
      <div>
        <div class="kicker">Премьера · ${scN(prem.scene)}</div>
        <h2 style="margin:.4em 0">«${esc(prem.t)}»</h2>
        <p class="muted">${esc(prem.desc)}</p>
        <span class="btn dark sm">О спектакле и билеты</span>
      </div>
    </a>
  </section>

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
      <a class="card" href="#/about/history"><h3 style="margin:0 0 6px">История</h3><div class="muted" style="font-size:13px">От студии 1974 года до трёх площадок</div></a>
      <a class="card" href="#/about/chrono"><h3 style="margin:0 0 6px">Хронограф</h3><div class="muted" style="font-size:13px">Ключевые даты театра</div></a>
      <a class="card" href="#/about/building"><h3 style="margin:0 0 6px">Здания и сцены</h3><div class="muted" style="font-size:13px">Чаплыгина и Сухаревская</div></a>
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
      <a class="fchip ${!scene ? 'on' : ''}" href="${link({ scene: '' })}">Все сцены</a>
      <a class="fchip ${scene === 'ist' ? 'on' : ''}" href="${link({ scene: 'ist' })}">Историческая</a>
      <a class="fchip ${scene === 'sovr' ? 'on' : ''}" href="${link({ scene: 'sovr' })}">Сцена «Современника»</a>
      <span style="width:14px"></span>
      <a class="fchip ${!genre ? 'on' : ''}" href="${link({ genre: '' })}">Все жанры</a>
      ${GENRES.map(g => `<a class="fchip ${genre === g ? 'on' : ''}" href="${link({ genre: g })}">${g}</a>`).join('')}
    </div>
    <div class="muted" style="font-size:13px">${evs.length} событий</div>
  </div>
  <div class="afdays">
  ${days.map(d => `<div class="afday"><div class="d">${fmtD(d, true)}</div>
    ${evs.filter(e => e.date === d).map(e => { const s = byId[e.spect]; return `
    <div class="afrow">
      <div class="tm">${e.time}</div>
      <div class="sp"><a href="#/spect/${s.id}"><span class="t">«${esc(s.t)}»</span></a>
        <div class="m">${s.author ? esc(s.author) + ' · ' : ''}${s.genre} · ${s.age}${s.premiere ? ' · <b>премьера</b>' : ''}</div></div>
      <div class="sc">${scN(s.scene)}${scA(s.scene) ? '<br>' + scA(s.scene) : ''}</div>
      <div class="cast">${s.roles.length ? 'В ролях: ' + s.roles.slice(0, 2).map(role => `<a href="#/artist/${role.a[0]}" style="text-decoration:underline">${esc(byId[role.a[0]].n)}</a>`).join(', ') + (s.roles.length > 2 ? ' и другие' : '') : ''}</div>
      <div>${e.soldout ? '<div class="soldout">Все билеты проданы</div>'
        : `<button class="btn dark sm" style="width:100%" onclick="ticket('${e.id}')">Билеты</button>`}</div>
    </div>`; }).join('')}
  </div>`).join('') || '<p class="muted">Нет событий по выбранным фильтрам.</p>'}
  </div>`);
}

/* -------- модалка покупки -------- */
function ticket(evId) {
  const e = SHOWS.find(x => x.id === evId); const s = byId[e.spect];
  const root = document.getElementById('modal-root');
  root.innerHTML = `
  <div class="mback" onclick="if(event.target===this)closeModal()">
    <div class="modal">
      <span class="mclose" onclick="closeModal()">✕</span>
      <h3>«${esc(s.t)}»</h3>
      <div class="sub">${fmtD(e.date, true)}, ${e.time} · ${scN(s.scene)}${s.price ? ' · ' + s.price : ''}</div>
      <div class="muted" style="font-size:13px;margin-bottom:6px">Выберите билетного оператора — покупка завершается на его сайте. Переход ведёт сразу на страницу этого события.</div>
      ${PARTNERS.map(p => `<div class="prow">
          <div><div class="pn">${p.n}</div><div class="pm">${p.m}</div></div>
          <button class="btn sm" onclick="toast('Переход к покупке: ${p.n} → «${esc(s.t)}», ${fmtD(e.date)} (deep link)')">Выбрать места →</button>
        </div>`).join('')}
      <div class="muted" style="font-size:12px;margin-top:14px">Наличие мест обновляется по данным партнёров. Новые операторы подключаются через админ-панель без доработки сайта.</div>
    </div>
  </div>`;
}
function closeModal() { document.getElementById('modal-root').innerHTML = ''; }
function toast(t) {
  const el = document.createElement('div'); el.className = 'toast'; el.textContent = t;
  document.body.appendChild(el); setTimeout(() => el.remove(), 2600);
}

/* -------- спектакли -------- */
function repertoire(q) {
  const arch = q.arch === '1';
  const genre = q.genre || '';
  const list = SPECTS.filter(s => (arch ? s.status === 'arch' : s.status === 'rep'))
    .filter(s => !genre || s.genre === genre);
  const link = (p) => '#/repertoire?' + new URLSearchParams(Object.assign({ arch: arch ? '1' : '', genre }, p)).toString();
  const GENRES = [...new Set(SPECTS.filter(s => s.status === 'rep').map(s => s.genre))];
  return page('#/repertoire', `
  <div class="crumbs"><a href="#/">Главная</a> / Спектакли</div>
  <h1>${arch ? 'Архив спектаклей' : 'Спектакли'}</h1>
  <div class="toolbar">
    <div class="tools">
      <a class="fchip ${!arch ? 'on' : ''}" href="${link({ arch: '' })}">Текущий репертуар</a>
      <a class="fchip ${arch ? 'on' : ''}" href="${link({ arch: '1' })}">Архив</a>
      <span style="width:14px"></span>
      <a class="fchip ${!genre ? 'on' : ''}" href="${link({ genre: '' })}">Все жанры</a>
      ${GENRES.map(g => `<a class="fchip ${genre === g ? 'on' : ''}" href="${link({ genre: g })}">${g}</a>`).join('')}
    </div>
    <div class="muted" style="font-size:13px">${list.length} спектаклей</div>
  </div>
  ${arch ? `<p class="lead" style="font-size:17px">Архивные спектакли — описания, составы, фотографии и пресса за все годы — переносятся с tabakov.ru программно на этапе «Перенос данных» и сохраняются в этом разделе.</p>` : `
  <div class="grid g4">${list.map(s => `
    <a class="card tile" href="#/spect/${s.id}">
      <div class="img p23"><span class="imgtag">афиша</span></div>
      <div class="kicker">${s.genre} · ${s.age}${s.premiere ? ' · премьера' : ''}</div>
      <div class="t">«${esc(s.t)}»</div>
      <div class="muted" style="font-size:13px">${s.author ? esc(s.author) : (s.dir ? 'реж. ' + esc(s.dir) : '')}${s.sold ? '<br><b>распродано</b>' : ''}</div>
    </a>`).join('')}
  </div>`}`);
}

/* -------- страница спектакля: девять блоков ТЗ -------- */
function spect(id) {
  const s = byId[id]; if (!s || !s.roles) return notFound();
  const today = '2026-09-16';
  const evsAll = showsOf(id).filter(e => e.date >= today);
  const evs = evsAll.filter(e => !e.soldout);
  const press = PRESS.filter(p => p.spect === id);
  let bn = 0; const B = (t) => `<div class="blockh"><h2>${t}</h2><span class="n">блок ${++bn} из 9</span></div>`;
  return page('#/repertoire', `
  <div class="crumbs"><a href="#/">Главная</a> / <a href="#/repertoire">Спектакли</a> / «${esc(s.t)}»</div>
  <section class="pad">
    <div class="two">
      <div>
        <div class="media"><span class="imgtag">афишная фотография</span></div>
        <div class="thumbs" style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:12px">
          ${[0,1,2,3].map(i => `<div style="background:var(--img);border-radius:6px;aspect-ratio:3/2;cursor:zoom-in" onclick="lightbox(${i})"></div>`).join('')}
        </div>
      </div>
      <div>
        <div class="kicker">${s.premiere ? 'Премьера' : 'В репертуаре'}${s.sold ? ' · распродано' : ''}</div>
        <h1 style="font-size:34px">«${esc(s.t)}»</h1>
        <p class="lead" style="font-size:18px">${esc(s.desc)}</p>
        <div class="metabox" style="margin-top:18px">
          ${s.author ? `<div class="r"><span class="k">Автор</span><span class="v">${esc(s.author)}</span></div>` : ''}
          ${s.dir ? `<div class="r"><span class="k">Режиссёр</span><span class="v">${esc(s.dir)}</span></div>` : ''}
          <div class="r"><span class="k">Жанр</span><span class="v">${s.genre}</span></div>
          <div class="r"><span class="k">Возраст</span><span class="v">${s.age}</span></div>
          ${s.dur ? `<div class="r"><span class="k">Длительность</span><span class="v">${s.dur}</span></div>` : ''}
          <div class="r"><span class="k">Место</span><span class="v">${scN(s.scene)}</span></div>
          ${s.prem ? `<div class="r"><span class="k">Премьера</span><span class="v">${s.prem}</span></div>` : ''}
          ${s.price ? `<div class="r"><span class="k">Стоимость билетов</span><span class="v">${s.price}</span></div>` : ''}
          ${s.rating ? `<div class="r"><span class="k">Рейтинг Яндекс Афиши</span><span class="v">★ ${s.rating}</span></div>` : ''}
        </div>
        ${evs.length ? `<div style="margin-top:16px"><button class="btn dark" onclick="ticket('${evs[0].id}')">Купить билет — ${fmtD(evs[0].date)}</button></div>` : ''}
      </div>
    </div>

    ${B('О спектакле')}
    <p style="max-width:760px">${esc(s.desc)}</p>
    ${s.long ? `<p class="muted" style="max-width:760px">${esc(s.long)}</p>` : `<p class="muted" style="max-width:760px">${MOVE_NOTE}</p>`}

    ${B('Даты и билеты')}
    ${evsAll.length ? evsAll.map(e => `
      <div class="afrow">
        <div class="tm">${e.time}</div>
        <div class="sp"><span class="t">${fmtD(e.date, true)}</span>
          <div class="m">${scN(s.scene)}</div></div>
        <div class="cast" style="grid-column:span 2">${s.roles.length ? castOn(e).slice(0, 3).map(c => `<a href="#/artist/${c.artist.id}" style="text-decoration:underline">${esc(c.artist.n)}</a> — ${esc(c.role)}`).join(', ') : ''}</div>
        <div>${e.soldout ? '<div class="soldout">Продано</div>' : `<button class="btn dark sm" style="width:100%" onclick="ticket('${e.id}')">Билеты</button>`}</div>
      </div>`).join('') : '<p class="muted">Ближайших показов в афише сентября–октября нет.</p>'}

    ${B('Артисты и роли')}
    ${s.roles.length ? `
    <div class="muted" style="font-size:13px;margin-bottom:6px">У ролей с двумя исполнителями состав объявляется на дату.</div>
    ${s.roles.map(role => `
      <div class="castgrp"><div class="lbl">${esc(role.r)}${role.a.length > 1 ? ' · два состава' : ''}</div>
      <div class="grid g3">${role.a.map(aid => { const a = byId[aid]; return `
        <a class="person" href="#/artist/${a.id}"><span class="ava"></span>
          <span><span class="nm">${esc(a.n)}</span><br><span class="rl">${a.rank || a.grp}</span></span></a>`; }).join('')}
      </div></div>`).join('')}` : `<p class="muted">${MOVE_NOTE}</p>`}

    ${B('Создатели спектакля')}
    ${s.team.length ? `<div class="metabox" style="max-width:560px">
      ${s.team.map(([k, v]) => `<div class="r"><span class="k">${k}</span><span class="v">${esc(v)}</span></div>`).join('')}
    </div>` : `<p class="muted">${MOVE_NOTE}</p>`}

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
    <p class="muted">Отзывов пока нет — оставьте первый.</p>
    <div style="margin-top:14px"><button class="btn" onclick="toast('Прототип: форма отзыва отправлена на модерацию')">Оставить отзыв</button>
    <button class="btn" onclick="toast('Прототип: загрузка видеоотзыва → модерация')">Записать видеоотзыв</button></div>

    ${B('СМИ о спектакле')}
    ${press.length ? press.map(p => `
      <div class="pressrow"><a class="lnk" onclick="toast('Прототип: переход на сайт издания')" style="text-decoration:underline">${esc(p.t)}</a>
      <span class="src">${p.src}${p.date ? ' · ' + fmtD(p.date) : ''}</span></div>`).join('') : `<p class="muted">${MOVE_NOTE}</p>`}

    ${B('Смотрите также')}
    <div class="grid g4">${SPECTS.filter(x => x.id !== id && x.status === 'rep' && (x.genre === s.genre || x.premiere === s.premiere)).slice(0, 4).map(x => `
      <a class="card tile" href="#/spect/${x.id}"><div class="img p23"><span class="imgtag">афиша</span></div>
      <div class="t">«${esc(x.t)}»</div><div class="muted" style="font-size:13px">${x.genre} · ${x.age}</div></a>`).join('')}
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
  const block = (g) => {
    const list = ARTISTS.filter(a => a.grp === g);
    return `
    <h2>${g} <span class="muted" style="font-weight:400;font-size:15px">${list.length}</span></h2>
    <div class="grid g4">${list.map(a => `
      <a class="card tile arttile" href="#/artist/${a.id}">
        <div class="img"></div>
        ${a.rank ? `<div class="kicker">${a.rank}</div>` : ''}
        <div class="t">${esc(a.n)}</div>
        <div class="muted" style="font-size:13px">${a.plays.length ? a.plays.slice(0, 2).map(p => '«' + esc(byId[p.spect].t) + '»').join(', ') : ''}</div>
      </a>`).join('')}
    </div>`;
  };
  return page('#/artists', `
  <div class="crumbs"><a href="#/">Главная</a> / Артисты</div>
  <h1>Артисты</h1>
  <p class="lead" style="font-size:17px">Фотографии в каталоге — чёрно-белые, при наведении становятся цветными.</p>
  ${block(TRP)}
  ${block(GST)}
  ${block(TST)}`);
}

function artist(id) {
  const a = byId[id]; if (!a || !a.grp) return notFound();
  const upcoming = showsWith(id).filter(e => e.date >= '2026-09-16');
  return page('#/artists', `
  <div class="crumbs"><a href="#/">Главная</a> / <a href="#/artists">Артисты</a> / ${esc(a.n)}</div>
  <section class="pad"><div class="two" style="grid-template-columns:380px 1fr">
    <div class="arttile"><div class="img media" style="aspect-ratio:3/4"></div></div>
    <div>
      <div class="kicker">${a.grp}${a.rank ? ' · ' + a.rank : ''}</div>
      <h1>${esc(a.n)}</h1>
      <p class="lead" style="font-size:17px">${a.bio ? esc(a.bio) : 'Биография переносится с tabakov.ru программно — этап «Перенос данных».'}</p>

      <h2>Роли в репертуаре</h2>
      <div class="grid g2">${a.plays.map(p => { const s = byId[p.spect]; return `
        <a class="card" href="#/spect/${s.id}"><div class="kicker">${scN(s.scene)}</div>
        <div class="t" style="font-weight:500">«${esc(s.t)}»</div><div class="muted" style="font-size:13px">роль: ${esc(p.role)}</div></a>`; }).join('') || '<p class="muted">Составы этого артиста переносятся с tabakov.ru — в прототипе роли заполнены для трёх спектаклей.</p>'}
      </div>

      <h2>Ближайшие выходы на сцену</h2>
      ${upcoming.slice(0, 5).map(e => { const s = byId[e.spect]; return `
        <div class="afrow" style="grid-template-columns:64px 1fr 130px">
          <div class="tm">${e.time}</div>
          <div class="sp"><span class="t">${fmtD(e.date, true)} — «${esc(s.t)}»</span><div class="m">${scN(s.scene)}</div></div>
          <div>${e.soldout ? '<div class="soldout">Продано</div>' : `<button class="btn sm" style="width:100%" onclick="ticket('${e.id}')">Билеты</button>`}</div>
        </div>`; }).join('') || '<p class="muted">В афише сентября–октября выходов нет (или составы ещё не перенесены).</p>'}
    </div>
  </div></section>`);
}

/* -------- о театре -------- */
const ABOUT_SUBS = [
  ['history', 'История'], ['building', 'История здания'], ['chrono', 'Хронограф'],
  ['archive', 'Архивные спектакли'], ['tours', 'Гастроли'], ['awards', 'Награды'],
  ['prize', 'Премия Олега Табакова'], ['founders', 'Создатели спектаклей'], ['staff', 'Сотрудники'], ['docs', 'Документы'],
];

function about(sub) {
  sub = sub || 'history';
  const inner = {
    history: `<h1>История театра</h1>
      <p class="lead">Театр вырос из студии, которую Олег Табаков набрал в 1974 году. В 1987-м студия официально открылась в подвале дома на улице Чаплыгина — так появился театр, который зрители называют «Табакеркой».</p>
      <p style="max-width:760px">С 2016 года у театра есть сцена на Малой Сухаревской площади, с 2018-го художественный руководитель — Владимир Машков. Большие спектакли последних сезонов играются также на сцене театра «Современник».</p>
      <p style="max-width:760px" class="muted">Подробная история по десятилетиям, с фотографиями и документами эпохи, переносится с текущего сайта и дополняется материалами архива театра.</p>
      <div class="media wide" style="max-width:760px;margin-top:20px"><span class="imgtag">историческая фотография</span></div>`,
    building: `<h1>История здания</h1>
      <div class="grid g2" style="margin-top:20px">
        <div class="card"><div class="media wide" style="margin-bottom:14px"><span class="imgtag">фото здания</span></div>
          <h3 style="margin:0">${SCENES.ist.n}</h3><p class="muted">${SCENES.ist.addr} · ${SCENES.ist.metro}. Легендарный подвал на Чистых прудах, где театр открылся в 1987 году.</p></div>
        <div class="card"><div class="media wide" style="margin-bottom:14px"><span class="imgtag">фото здания</span></div>
          <h3 style="margin:0">${SCENES.suh.n}</h3><p class="muted">${SCENES.suh.addr} · ${SCENES.suh.metro}. Новое здание театра, открыто в 2016 году.</p></div>
      </div>
      <p class="muted" style="margin-top:14px">Большие спектакли сезона — «Матросская Тишина», «ТОТ самый №13» — идут также на сцене театра «Современник» (Чистопрудный бульвар, 19).</p>`,
    chrono: `<h1>Хронограф</h1>
      <p class="lead" style="font-size:17px">Ключевые даты истории театра. В полной версии — интерактивная шкала с фотографиями и документами.</p>
      <div class="chrono">${CHRONO.map(c => `<div class="chev"><div class="y">${c.y}</div><div class="tx">${esc(c.tx)}</div></div>`).join('')}</div>`,
    archive: `<h1>Архивные спектакли</h1>
      <p class="lead" style="font-size:17px">Спектакли прошлых лет: описания, составы, фотографии и пресса за все годы существования театра.</p>
      <p class="muted" style="max-width:700px">${MOVE_NOTE} Раздел наполняется автоматически при импорте, карточки сохраняют связи с артистами и публикациями.</p>
      <div class="grid g4" style="margin-top:18px">${[0,1,2,3].map(() => `<div class="card tile"><div class="img p23"><span class="imgtag">архивная афиша</span></div><div class="t muted">Карточка архивного спектакля</div></div>`).join('')}</div>`,
    tours: `<h1>Гастроли</h1>
      <p class="lead" style="font-size:17px">География гастролей театра. Раздел переносится с tabakov.ru.</p>
      <div class="afrow" style="grid-template-columns:130px 1fr 200px"><div class="tm">Август 2026</div>
        <div class="sp"><span class="t">Севастополь — фестиваль «Херсонес»</span><div class="m">«Матросская Тишина»</div></div>
        <div class="muted" style="font-size:13px"><a href="#/news/n2" style="text-decoration:underline">новость о гастролях</a></div></div>
      <div class="afrow" style="grid-template-columns:130px 1fr 200px"><div class="tm">2026</div>
        <div class="sp"><span class="t">Нижний Новгород, Грозный</span><div class="m">«Матросская Тишина»</div></div>
        <div class="muted" style="font-size:13px">по публикациям СМИ</div></div>`,
    awards: `<h1>Награды</h1>
      <p class="lead" style="font-size:17px">Премии и номинации театра и артистов за все годы.</p>
      <p class="muted" style="max-width:700px">${MOVE_NOTE}</p>`,
    prize: `<h1>Премия Олега Табакова</h1>
      <p class="lead" style="font-size:17px">Премия вручается артистам, педагогам и деятелям театра. На странице — положение о премии и лауреаты по годам.</p>
      <p class="muted" style="max-width:700px">${MOVE_NOTE}</p>`,
    founders: `<h1>Создатели спектаклей</h1>
      <p class="lead" style="font-size:17px">Режиссёры, художники, композиторы, хореографы — постановочные команды всех спектаклей театра.</p>
      <div class="grid g4" style="margin-top:18px">
        ${[['Владимир Машков','режиссёр'],['Александр Боровский','художник'],['Владислав Миллер','режиссёр'],['Дамир Исмагилов','художник по свету'],['Александр Марин','режиссёр'],['Филипп Шейн','художник'],['Леонид Тимцуник','хореограф'],['Сергей Никитин','музыкальное оформление']].map(([n, r]) => `
        <div class="card tile arttile"><div class="img" style="aspect-ratio:1"></div><div class="t">${n}</div><div class="muted" style="font-size:13px">${r}</div></div>`).join('')}
      </div>`,
    staff: `<h1>Сотрудники</h1>
      <p class="lead" style="font-size:17px">Администрация, постановочная часть, службы театра.</p>
      <p class="muted" style="max-width:700px">${MOVE_NOTE}</p>
      <div class="metabox" style="max-width:680px;margin-top:16px">
        <div class="r"><span class="k">Художественный руководитель</span><span class="v">Владимир Машков</span></div>
        <div class="r"><span class="k">Дирекция</span><span class="v">карточки с контактами</span></div>
        <div class="r"><span class="k">Пресс-служба</span><span class="v">контакты — в пресс-центре</span></div>
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
    <a class="fchip ${tab === 'smi' ? 'on' : ''}" href="#/press?tab=smi">СМИ о нас</a>
    <a class="fchip" onclick="toast('Прототип: пресс-кит (логотипы, фото, справка) — скачивание архива')">Пресс-кит ↓</a>
  </div></div>
  ${tab === 'news' ? `
  <p class="muted" style="font-size:13px;margin-bottom:14px">Новости за все годы переносятся с tabakov.ru программно — здесь три из последних для примера структуры.</p>
  <div class="grid g3">${NEWS.map(n => `
    <a class="card" href="#/news/${n.id}">
      <div class="kicker">${fmtD(n.date)}</div>
      <div class="t" style="font-weight:500;margin-top:6px">${esc(n.t)}</div>
      <div class="muted" style="font-size:13px;margin-top:8px">${esc(n.tx.slice(0, 110))}…</div>
    </a>`).join('')}</div>`
  : PRESS.map(p => `
    <div class="pressrow">
      <div><a class="lnk" style="text-decoration:underline" onclick="toast('Прототип: переход на сайт издания')">${esc(p.t)}</a>
      ${p.spect ? ` <a class="chip" style="font-size:12px;padding:3px 10px" href="#/spect/${p.spect}">«${esc(byId[p.spect].t)}»</a>` : ''}</div>
      <span class="src">${p.src}${p.date ? ' · ' + fmtD(p.date) : ''}</span>
    </div>`).join('')}`);
}

function newsPage(id) {
  const n = byId[id]; if (!n || !n.tx) return notFound();
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
  <h2>Кассы</h2>
  <div class="grid g2" style="margin-top:8px">
    <div class="card">
      <div class="media wide" style="margin-bottom:14px;display:flex;align-items:center;justify-content:center;color:#999">карта проезда</div>
      <h3 style="margin:0">Касса Исторической сцены</h3>
      <div class="metabox" style="margin-top:12px">
        <div class="r"><span class="k">Адрес</span><span class="v">ул. Чаплыгина, д. 1А, стр. 1</span></div>
        <div class="r"><span class="k">Метро</span><span class="v">«Чистые пруды», «Красные ворота»</span></div>
        <div class="r"><span class="k">Часы работы</span><span class="v">ежедневно 11:00–21:00</span></div>
        <div class="r"><span class="k">Телефон</span><span class="v">+7 (495) 499-96-44</span></div>
      </div>
    </div>
    <div class="card">
      <div class="media wide" style="margin-bottom:14px;display:flex;align-items:center;justify-content:center;color:#999">карта проезда</div>
      <h3 style="margin:0">Касса в ГУМе</h3>
      <div class="metabox" style="margin-top:12px">
        <div class="r"><span class="k">Адрес</span><span class="v">Красная площадь, д. 3</span></div>
        <div class="r"><span class="k">Метро</span><span class="v">«Театральная», «Охотный Ряд»</span></div>
        <div class="r"><span class="k">Часы работы</span><span class="v">ежедневно 11:00–21:00</span></div>
        <div class="r"><span class="k">Телефон</span><span class="v">+7 (967) 089-84-71</span></div>
      </div>
    </div>
  </div>
  <h2>Сцены</h2>
  <div class="metabox" style="max-width:680px">
    ${Object.values(SCENES).map(sc => `<div class="r"><span class="k">${sc.n}</span><span class="v">${sc.addr} · ${sc.metro}</span></div>`).join('')}
  </div>
  <h2>Возврат билетов</h2>
  <p class="muted" style="max-width:680px">Правила и форма возврата билетов — отдельная страница; в прототипе раздел показан в структуре меню «Билеты».</p>`);
}

/* -------- поиск -------- */
function search(q) {
  const query = (q.q || '').trim().toLowerCase();
  let res = '';
  if (query) {
    const sp = SPECTS.filter(s => (s.t + ' ' + (s.author || '') + ' ' + (s.dir || '')).toLowerCase().includes(query));
    const ar = ARTISTS.filter(a => a.n.toLowerCase().includes(query));
    const nw = NEWS.filter(n => (n.t + ' ' + n.tx).toLowerCase().includes(query));
    res = `
    ${sp.length ? `<h2>Спектакли <span class="muted" style="font-weight:400;font-size:15px">${sp.length}</span></h2>
      <div class="grid g4">${sp.map(s => `<a class="card tile" href="#/spect/${s.id}"><div class="img p23"><span class="imgtag">афиша</span></div><div class="t">«${esc(s.t)}»</div><div class="muted" style="font-size:13px">${s.genre}</div></a>`).join('')}</div>` : ''}
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
