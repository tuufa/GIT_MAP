document.addEventListener('DOMContentLoaded', function() {
  // Встроенные данные карты
const mapData = {
  "mapImage": "assets/map.png",
  "imageWidth": 5440,
  "imageHeight": 4800,
  "locations": [ //y,x
    {
      "coords": [2067, 2996],
      "title": "Пиратская погибель",
      "description": "<p>Старая крепость, которую построили для борьбы с пиратами.</p><ul><li style='color:#4CAF50;'>Опасность: безопасно</li><li style='color:#64B5F6;'>Присутствует таверна с квестами</li><li style='color:#A38B6D;'>Присутствует дилижанс</li></ul>",
      "icon": "assets/локи/ПИРАТСКАЯ ПОГИБЕЛЬ.png",
      "type": "regular"
    },
    {
      "coords": [3600, 1588],
      "title": "Твердыня рока",
      "description": "Твердыня рока.",
      "icon": "assets/локи/ТВЕРДЫНЯ РОКА.png",
      "type": "regular"
    },
    {
      "coords": [1488, 1136],
      "title": "Порт Ноэртауна",
      "description": "Порт Ноэртауна.",
      "icon": "assets/локи/ПОРТ НОЭРА.png",
      "type": "regular"
    },
    {
      "coords": [1581, 1072],
      "title": "Таверна \"Горящий Боченок\"",
      "description": "Таверна \"Горящий Боченок\".",
      "icon": "assets/локи/ГОРЯЩИЙ БОЧЕНОК.png",
      "type": "regular"
    },
    {
      "coords": [1550, 1136],
      "title": "Рынок Ноэртауна",
      "description": "Рынок Ноэртауна.",
      "icon": "assets/локи/РЫНОК НОЭРА.png",
      "type": "regular"
    },
    {
      "coords": [1486, 978],
      "title": "Западный р-н, Береговая дорога, Ряд 9, дом 8 №6-4.",
      "description": "Западный р-н, Береговая дорога, Ряд 9, дом 8 №6-4.",
      "icon": "assets/локи/Западный р-н, Береговая дорога, Ряд 9, дом 8 №6-4_.png",
      "type": "quest"
    },
    {
      "coords": [1553, 816],
      "title": "Склад номер 13. Запад. Убежище бандитов.",
      "description": "Склад номер 13. Запад. Убежище бандитов.",
      "icon": "assets/локи/СКЛАД НОМЕР 13. ЗАПАД. УБЕЖИЩЕ БАНДИТОВ_.png",
      "type": "regular"
    },
    {
      "coords": [1620, 948],
      "title": "Сталь и изделия из стали железного Буббы.",
      "description": "Сталь и изделия из стали железного Бубьы.",
      "icon": "assets/локи/СТАЛЬ И ИЗДЕЛИЯ ИЗ СТАЛИ ЖЕЛЕЗНОГО БУББЫ.png",
      "type": "regular"
    },
    {
      "coords": [1649, 881],
      "title": "Дом игрушек плохого дракона.",
      "description": "Дом игрушек плохого дракона.",
      "icon": "assets/локи/ДОМ ИГРУШЕК ПЛОХОГО ДРАКОНА.png",
      "type": "regular"
    },
    {
      "coords": [1743, 753],
      "title": "Кладбище.",
      "description": "Кладбище.",
      "icon": "assets/локи/КЛАДБИЩЕ.png",
      "type": "regular"
    },
    {
      "coords": [1743, 851],
      "title": "Тюрьма.",
      "description": "Тюрьма.",
      "icon": "assets/локи/ТЮРЬМА.png",
      "type": "regular"
    },
    {
      "coords": [1712, 976],
      "title": "Укрытие банды Широкое Лезвие, территория плохих парней.",
      "description": "Укрытие банды Широкое Лезвие, территория плохих парней.",
      "icon": "assets/локи/Укрытие банды Широкое Лезвие, территория плохих парней_.png",
      "type": "quest"
    },
    {
      "coords": [1678, 1008],
      "title": "Закоулки Ноэртауна.",
      "description": "Закоулки Ноэртауна.",
      "icon": "assets/локи/ЗАКОУЛКИ НОЭРТАУНА.png",
      "type": "regular"
    },
    {
      "coords": [1711, 1041],
      "title": "Канализация.",
      "description": "Канализация.",
      "icon": "assets/локи/КАНАЛИЗАЦИЯ.png",
      "type": "regular"
    },
    {
      "coords": [1808, 912],
      "title": "Пещера у Ноэртауна.",
      "description": "Пещера у Ноэртауна.",
      "icon": "assets/локи/ПЕЩЕРА У НОЭРА.png",
      "type": "regular"
    },
    {
      "coords": [1744, 1008],
      "title": "КПП у северных ворот Ноэра.",
      "description": "КПП у северных ворот Ноэра.",
      "icon": "assets/локи/СЕВЕРНОЕ КПП НОЭРА.png",
      "type": "regular"
    },
    {
      "coords": [1650, 1074],
      "title": "Восточная торговля.",
      "description": "Восточная торговля.",
      "icon": "assets/локи/ВОСТОЧНАЯ ТОРГОВЛЯ.png",
      "type": "regular"
    },
    {
      "coords": [1712, 1136],
      "title": "КПП на склон рудесиндов.",
      "description": "КПП на склон рудесиндов.",
      "icon": "assets/локи/КПП НА СКЛОН РУДЕСИНДОВ.png",
      "type": "regular"
    },
    {
      "coords": [1763, 1167],
      "title": "Золотой слиток.",
      "description": "Золотой слиток.",
      "icon": "assets/локи/ЗОЛОТОЙ СЛИТОК.png",
      "type": "regular"
    },
    {
      "coords": [1614, 1137],
      "title": "Колизей Ноэртауна.",
      "description": "Колизей Ноэртауна.",
      "icon": "assets/локи/КОЛИЗЕЙ НОЭРА.png",
      "type": "regular"
    },
    {
      "coords": [1646, 1200],
      "title": "Клиника Элиса.",
      "description": "Клиника Элиса.",
      "icon": "assets/локи/КЛИНИКА ЭЛИСА.png",
      "type": "regular"
    },
    {
      "coords": [1580, 1202],
      "title": "Банк Ноэртауна.",
      "description": "Банк Ноэртауна.",
      "icon": "assets/локи/БАНК НОЭРА.png",
      "type": "regular"
    },
    {
      "coords": [1680, 1265],
      "title": "Черный рынок.",
      "description": "Черный рынок.",
      "icon": "assets/локи/ЧЕРНЫЙ РЫНОК.png",
      "type": "regular"
    },
    {
      "coords": [1615, 1266],
      "title": "Плацдарм Ноэртауна.",
      "description": "Плацдарм Ноэртауна.",
      "icon": "assets/локи/ПЛАЦДАРМ НОЭРТАУНА.png",
      "type": "regular"
    },
    {
      "coords": [1616, 1288],
      "title": "КПП у восточных ворот Ноэртауна.",
      "description": "КПП у восточных ворот Ноэртауна.",
      "icon": "assets/локи/ВОСТОЧНОЕ КПП НОЭРА.png",
      "type": "regular"
    },
    {
      "coords": [1616, 1329],
      "title": "Вход через восточные ворота Ноэртауна.",
      "description": "Вход через восточные ворота Ноэртауна.",
      "icon": "assets/локи/ВХОД ЧЕРЕЗ ВОСТОЧНЫЕ ВОРОТА.png",
      "type": "regular"
    },
    {
      "coords": [1903, 1329],
      "title": "Заброшенный дом, привал Адама.",
      "description": "Заброшенный дом, привал Адама.",
      "icon": "assets/локи/КВЕСТОВЫЙ ЗАБРОШЕННЫЙ ДОМ АДАМА.png",
      "type": "quest"
    },
    {
      "coords": [2032, 1232],
      "title": "Тропический лес.",
      "description": "Тропический лес.",
      "icon": "assets/локи/КВЕСТОВЫЙ ЛЕС ЭЛИСА 2.png",
      "type": "quest"
    },
    {
      "coords": [1520, 1520],
      "title": "Тропический лес.",
      "description": "Тропический лес.",
      "icon": "assets/локи/КВЕСТОВЫЙ ЛЕС ЭЛИСА 1.png",
      "type": "quest"
    },
    {
      "coords": [2159, 1074],
      "title": "Сторожевая башня северного перевала.",
      "description": "Сторожевая башня северного перевала.",
      "icon": "assets/локи/СТОРОЖЕВАЯ БАШНЯ СЕВЕРНОГО ПЕРЕВАЛА.png",
      "type": "regular"
    },
    {
      "coords": [2254, 1137],
      "title": "Лагерь беженцев при монастыре.",
      "description": "Лагерь беженцев при монастыре.",
      "icon": "assets/локи/ЛАГЕРЬ БЕЖЕНЦЕВ ПРИ МОНАСТЫРЕ.png",
      "type": "regular"
    },
    {
      "coords": [2286, 1072],
      "title": "Монастырь святых.",
      "description": "Монастырь святых.",
      "icon": "assets/локи/МОНАСТЫРЬ СВЯТЫХ.png",
      "type": "regular"
    },
    {
      "coords": [2579, 848],
      "title": "Убежище бандитов.",
      "description": "Убежище бандитов.",
      "icon": "assets/локи/УБЕЖИЩЕ БАНДИТОВ.png",
      "type": "regular"
    },
    {
      "coords": [2320, 1232],
      "title": "Место исследований Элиса.",
      "description": "Место исследований Элиса.",
      "icon": "assets/локи/МЕСТО ИССЛЕДОВАНИЙ ЭЛИСА.png",
      "type": "quest"
    },
    {
      "coords": [2640, 1202],
      "title": "Повозка с людьми у заброшенного дома.",
      "description": "Повозка с людьми у заброшенного дома.",
      "icon": "assets/локи/ЗАБРОШЕННЫЙ ДОМ ГРАБЕЖА.png",
      "type": "quest"
    },
    {
      "coords": [3248, 1364],
      "title": "Караван работорговцев.",
      "description": "Караван работорговцев.",
      "icon": "assets/локи/КВЕСТ СЕСИЛИИ ПО ОСВОБОЖДЕНИЮ РАБОВ.png",
      "type": "quest"
    },
    {
      "coords": [3184, 1650],
      "title": "Поместье Вудсанов.",
      "description": "Поместье Вудсанов.",
      "icon": "assets/локи/ПОМЕСТЬЕ ВУДСАНОВ.png",
      "type": "regular"
    },
    {
      "coords": [3502, 1745],
      "title": "Оружиейная Твердыни рока.",
      "description": "Оружиейная Твердыни рока.",
      "icon": "assets/локи/ОРУЖЕЙНАЯ.png",
      "type": "quest"
    },
    {
      "coords": [3472, 1936],
      "title": "Лагерь беженцев у Твердыни рока.",
      "description": "Лагерь беженцев у Твердыни рока.",
      "icon": "assets/локи/ЛАГЕРЬ БЕЖЕНЦЕВ ТВЕРДЫНИ РОКА.png",
      "type": "regular"
    },
    {
      "coords": [3375, 2129],
      "title": "Водная пещера культистов.",
      "description": "Водная пещера культистов.",
      "icon": "assets/локи/ВОДНАЯ ПЕЩЕРА.png",
      "type": "quest"
    },
    {
      "coords": [3694, 2321],
      "title": "Восточный КПП Твердыни рока.",
      "description": "Восточный КПП Твердыни рока.",
      "icon": "assets/локи/ВОСТОЧНЫЙ КПП КРЕПОСТИ ОБРЕЧЕННЫХ.png",
      "type": "regular"
    },
    {
      "coords": [3248, 2098],
      "title": "Племя девяти дюймов.",
      "description": "Племя девяти дюймов.",
      "icon": "assets/локи/ПЛЕМЯ ДЕВЯТИ ДЮЙМОВ.png",
      "type": "regular"
    },
    {
      "coords": [3185, 2160],
      "title": "Спиральный лес.",
      "description": "Спиральный лес.",
      "icon": "assets/локи/СПИРАЛЬНЫЙ ЛЕС.png",
      "type": "quest"
    },
    {
      "coords": [2860, 1711],
      "title": "Хижина, захваченная оркоидами.",
      "description": "Хижина, захваченная оркоидами.",
      "icon": "assets/локи/МАЛЕНЬКАЯ ХИЖИНА, В КОТОРОЙ ТЕПЕРЬ ОБИТАЮТ МОНСТРЫ.png",
      "type": "regular"
    },
    {
      "coords": [2632, 1778],
      "title": "Горный монастырь.",
      "description": "Горный монастырь.",
      "icon": "assets/локи/ГОРНЫЙ МОНАСТЫРЬ.png",
      "type": "regular"
    },
    {
      "coords": [2638, 1552],
      "title": "Заброшенная медная шахта.",
      "description": "Заброшенная медная шахта.",
      "icon": "assets/локи/ЗАБРОШЕННАЯ МЕДНАЯ ШАХТА.png",
      "type": "regular"
    },
    {
      "coords": [2480, 1600],
      "title": "Облачная деревня.",
      "description": "Облачная деревня.",
      "icon": "assets/локи/ОБЛАЧНАЯ ДЕРЕВНЯ.png",
      "type": "regular"
    },
    {
      "coords": [2159, 1648],
      "title": "Пещера оркоидов 3.",
      "description": "Пещера оркоидов 3.",
      "icon": "assets/локи/ПЕЩЕРА ОРКОИДОВ 3.png",
      "type": "regular"
    },
    {
      "coords": [1935, 1620],
      "title": "Пропавший караван.",
      "description": "Пропавший караван.",
      "icon": "assets/локи/ПРОПАВШИЙ КАРАВАН.png",
      "type": "regular"
    },
    {
      "coords": [1800, 1586],
      "title": "Разбитая группа.",
      "description": "Разбитая группа.",
      "icon": "assets/локи/РАЗБИТАЯ ГРУППА.png",
      "type": "regular"
    },
    {
      "coords": [1774, 1712],
      "title": "Шахта у Ноэртауна.",
      "description": "Шахта у Ноэртауна.",
      "icon": "assets/локи/ШАХТА НОЭРА.png",
      "type": "regular"
    },
    {
      "coords": [1750, 1943],
      "title": "Восточный КПП у Ноэртауна.",
      "description": "Восточный КПП у Ноэртауна.",
      "icon": "assets/локи/ВОСТОЧНЫЙ КПП.png",
      "type": "regular"
    },
    {
      "coords": [1775, 2288],
      "title": "Деревня Арис.",
      "description": "Деревня Арис.",
      "icon": "assets/локи/Деревня Арис.png",
      "type": "regular"
    },
    {
      "coords": [1871, 2545],
      "title": "Неизвестный лагерь.",
      "description": "Неизвестный лагерь.",
      "icon": "assets/локи/НЕИЗВЕСТНЫЙ ЛАГЕРЬ.png",
      "type": "quest"
    },
    {
      "coords": [2064, 2448],
      "title": "Пещера рыболюдей 1B2.",
      "description": "Пещера рыболюдей 1B2.",
      "icon": "assets/локи/ПЕЩЕРА РЫБОЛЮДЕЙ 1B2.png",
      "type": "regular"
    },
    {
      "coords": [2095, 2320],
      "title": "Лагерь рыболюдей.",
      "description": "Лагерь рыболюдей.",
      "icon": "assets/локи/ЛАГЕРЬ РЫБОЛЮДЕЙ.png",
      "type": "regular"
    },
    {
      "coords": [2157, 2385],
      "title": "Пещера рыболюдей 1.",
      "description": "Пещера рыболюдей 1.",
      "icon": "assets/локи/ПЕЩЕРА РЫБОЛЮДЕЙ 1.png",
      "type": "regular"
    },
    {
      "coords": [2095, 3024],
      "title": "Лагерь беженцев у Пиратской погибели.",
      "description": "Лагерь беженцев у Пиратской погибели.",
      "icon": "assets/локи/КВЕСТОВЫЙ ЛАГЕРЬ ДЛЯ ПЕРЕДАЧИ ПИСЬМА.png",
      "type": "quest"
    },
    {
      "coords": [2152, 3028],
      "title": "Бобо.",
      "description": "Бобо.",
      "icon": "assets/локи/БОБО.png",
      "type": "regular"
    },
    {
      "coords": [2061, 3152],
      "title": "Братская могила.",
      "description": "Братская могила.",
      "icon": "assets/локи/БРАТСКАЯ МОГИЛА.png",
      "type": "regular"
    },
    {
      "coords": [1903, 3472],
      "title": "Лагерь на болотах.",
      "description": "Лагерь на болотах.",
      "icon": "assets/локи/ЛАГЕРЬ НА БОЛОТАХ.png",
      "type": "regular"
    },
    {
      "coords": [2224, 3760],
      "title": "Пещера рыболюдей 2.",
      "description": "Пещера рыболюдей 2.",
      "icon": "assets/локи/ПЕЩЕРА РЫБОЛЮДЕЙ 2.png",
      "type": "regular"
    },
    {
      "coords": [2416, 3920],
      "title": "Разграбленный караван.",
      "description": "Разграбленный караван.",
      "icon": "assets/локи/РАЗГРАБЛЕННЫЙ КОНВОЙ.png",
      "type": "regular"
    },
    {
      "coords": [2576, 3504],
      "title": "Заброшенный город у медной шахты.",
      "description": "Заброшенный город у медной шахты.",
      "icon": "assets/локи/ЗАБРОШЕННЫЙ ГОРОД У МЕДНОЙ ШАХТЫ.png",
      "type": "regular"
    },
    {
      "coords": [2544, 3184],
      "title": "Пещера оркоидов 4.",
      "description": "Пещера оркоидов 4.",
      "icon": "assets/локи/ПЕЩЕРА ОРКОИДОВ 4.png",
      "type": "regular"
    },
    {
      "coords": [2352, 3183],
      "title": "Лес оркоидов.",
      "description": "Лес оркоидов.",
      "icon": "assets/локи/ЛЕС ОРКОИДОВ.png",
      "type": "regular"
    },
    {
      "coords": [2576, 2925],
      "title": "Северный форпост Пиратской погибели.",
      "description": "Северный форпост Пиратской погибели.",
      "icon": "assets/локи/СЕВЕРНЫЙ ФОРПОСТ.png",
      "type": "regular"
    },
    {
      "coords": [2416, 2224],
      "title": "Гробница берсерка.",
      "description": "Гробница берсерка.",
      "icon": "assets/локи/ГРОБНИЦА БЕРСЕРКА.png",
      "type": "regular"
    },
    {
      "coords": [2990, 3056],
      "title": "Логово тварей 2.",
      "description": "Логово тварей 2.",
      "icon": "assets/локи/ЛОГОВО ТВАРЕЙ 2.png",
      "type": "regular"
    },
    {
      "coords": [3022, 3760],
      "title": "Инкубатор к западу лагеря.",
      "description": "Инкубатор к западу лагеря.",
      "icon": "assets/локи/ИНКУБАТОР ЗАПАДНЫЙ.png",
      "type": "regular"
    },
    {
      "coords": [3056, 3920],
      "title": "Лагерь у южных ворот Сибариса.",
      "description": "Лагерь у южных ворот Сибариса.",
      "icon": "assets/локи/ЛАГЕРЬ У ЮЖНЫХ ВОРОТ.png",
      "type": "regular"
    },
    {
      "coords": [2990, 4049],
      "title": "Инкубатор к востоку лагеря.",
      "description": "Инкубатор к востоку лагеря.",
      "icon": "assets/локи/ИНКУБАТОР ВОСТОЧНЫЙ.png",
      "type": "regular"
    },
    {
      "coords": [3183, 3984],
      "title": "Артиллерийская позиция.",
      "description": "Артиллерийская позиция.",
      "icon": "assets/локи/АРТИЛЛЕРИЙСКАЯ ПОЗИЦИЯ.png",
      "type": "quest"
    },
    {
      "coords": [3281, 3693],
      "title": "Амбар у Юго-Западных Ворот Сибариса.",
      "description": "Амбар у Юго-Западных Ворот Сибариса.",
      "icon": "assets/локи/Амбар у Юго-Западных Ворот Сибариса.png",
      "type": "quest"
    },
    {
      "coords": [3310, 3792],
      "title": "Юго-Западные Ворота Сибариса.",
      "description": "Юго-Западные Ворота Сибариса.",
      "icon": "assets/локи/Юго-Западные Ворота Сибариса.png",
      "type": "quest"
    },
    {
      "coords": [3436, 3956],
      "title": "Логово тварей 3.",
      "description": "Логово тварей 3.",
      "icon": "assets/локи/ЛОГОВО ТВАРЕЙ 3.png",
      "type": "regular"
    },
    {
      "coords": [3435, 3288],
      "title": "Логово летучих мышей.",
      "description": "Логово летучих мышей.",
      "icon": "assets/локи/ЛОГОВО ЛЕТУЧИХ МЫШЕЙ-МУТАНТОВ.png",
      "type": "regular"
    },
    {
      "coords": [3551, 3246],
      "title": "Форт у моста.",
      "description": "Форт у моста.",
      "icon": "assets/локи/ФОРТ У МОСТА.png",
      "type": "regular"
    },
    {
      "coords": [3892, 3471],
      "title": "Павшая крепость.",
      "description": "Павшая крепость.",
      "icon": "assets/локи/ПАВШАЯ КРЕПОСТЬ.png",
      "type": "regular"
    },
    {
      "coords": [3888, 3248],
      "title": "Деревня Перранвей, перевалочная станция охотников.",
      "description": "Деревня Перранвей, перевалочная станция охотников.",
      "icon": "assets/локи/ДЕРЕВНЯ ПЕРРАНВЕЙ, ПЕРЕВАЛОЧНАЯ СТАНЦИЯ ОХОТНИКОВ.png",
      "type": "regular"
    },
    {
      "coords": [3855, 3126],
      "title": "Лагерь наемников.",
      "description": "Лагерь наемников.",
      "icon": "assets/локи/ЛАГЕРЬ НАЕМНИКОВ.png",
      "type": "regular"
    },
    {
      "coords": [3824, 2928],
      "title": "Южное Зернохранилище 12, захваченное монстрами.",
      "description": "Южное Зернохранилище 12, захваченное монстрами.",
      "icon": "assets/локи/Южное Зернохранилище 12, захваченное монстрами.png",
      "type": "regular"
    },
    {
      "coords": [4016, 2896],
      "title": "Прибрежная крепость.",
      "description": "Прибрежная крепость.",
      "icon": "assets/локи/ПРИБРЕЖНАЯ КРЕПОСТЬ.png",
      "type": "regular"
    },
    {
      "coords": [3501, 2546],
      "title": "Логово тварей 1.",
      "description": "Логово тварей 1.",
      "icon": "assets/локи/ЛОГОВО ТВАРЕЙ 1.png",
      "type": "regular"
    },
    {
      "coords": [722, 3632],
      "title": "Берег останков.",
      "description": "Берег останков.",
      "icon": "assets/локи/БЕРЕГ ОСТАНКОВ.png",
      "type": "regular"
    },
    {
      "coords": [752, 3760],
      "title": "Храм торнов.",
      "description": "Храм торнов.",
      "icon": "assets/локи/ХРАМ ТОРНОВ.png",
      "type": "regular"
    },
    {
      "coords": [655, 3760],
      "title": "Рынок Рыбополиса.",
      "description": "Рынок Рыбополиса.",
      "icon": "assets/локи/РЫНОК РЫБОПОЛИСА.png",
      "type": "regular"
    },
    {
      "coords": [655, 3793],
      "title": "Деревня Рыбополиса.",
      "description": "Деревня Рыбополиса.",
      "icon": "assets/локи/ДЕРЕВНЯ РЫБОПОЛИСА.png",
      "type": "regular"
    },
    {
      "coords": [721, 3858],
      "title": "Магазин горшков Красти Краба.",
      "description": "Магазин горшков Красти Краба.",
      "icon": "assets/локи/Магазин горшков Красти Краба.png",
      "type": "regular"
    },
    {
      "coords": [534, 3954],
      "title": "Лагерь беглых рабынь.",
      "description": "Лагерь беглых рабынь.",
      "icon": "assets/локи/ЛАГЕРЬ БЕГЛЫХ РАБОВ.png",
      "type": "quest"
    },
    {
      "coords": [655, 3988],
      "title": "Святилище Плодородия.",
      "description": "Святилище Плодородия.",
      "icon": "assets/локи/СВЯТИЛИЩЕ ПЛОДОРОДИЯ.png",
      "type": "quest"
    },
    {
      "coords": [752, 4016],
      "title": "Затерянный храм.",
      "description": "Затерянный храм.",
      "icon": "assets/локи/ЗАТЕРЯННЫЙ ХРАМ.png",
      "type": "quest"
    },
    {
      "coords": [818, 4080],
      "title": "Водный путь.",
      "description": "Водный путь.",
      "icon": "assets/локи/ВОДНЫЙ ПУТЬ.png",
      "type": "regular"
    },
    {
      "coords": [400, 2257],
      "title": "Остров добра.",
      "description": "Остров добра.",
      "icon": "assets/локи/ОСТРОВ ЕБЛИ.png",
      "type": "regular"
    }
  ],
	"patrols": [ //y,x
	  {
		"coords": [1611, 1232],
		"title": "Коллекторы",
		"description": "<p style='color: #cccccc;'>Опасность группы злопыхателей зависит от уровня опасности мира.</p>\
		<ul>\
			<li style='color: #8899dd;'>0-25\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>25-50\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
					<li style='color: #aaaaff;'>1 мутный тип с дубинкой</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>50-75\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
					<li style='color: #aaaaff;'>1 мутный тип с дубинкой</li>\
					<li style='color: #aaaaff;'>1 мутный тип с луком</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>75-100\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
					<li style='color: #aaaaff;'>1 мутный тип с дубинкой</li>\
					<li style='color: #aaaaff;'>1 мутный тип с луком</li>\
					<li style='color: #aaaaff;'>1 мутный тип-воин</li>\
					<li style='color: #aaaaff;'>1 мутный тип-элитный воин</li>\
				</ul>\
			</li>\
		</ul>",
		"icon": "assets/патрули/КОЛЛЕКТОРЫ 1.png",
		"type": "collectors"
	  },
	  {
		"coords": [1707, 1008],
		"title": "Коллекторы",
		"description": "<p style='color: #cccccc;'>Опасность группы злопыхателей зависит от уровня опасности мира.</p>\
		<ul>\
			<li style='color: #8899dd;'>0-25\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>25-50\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
					<li style='color: #aaaaff;'>1 мутный тип с дубинкой</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>50-75\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
					<li style='color: #aaaaff;'>1 мутный тип с дубинкой</li>\
					<li style='color: #aaaaff;'>1 мутный тип с луком</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>75-100\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
					<li style='color: #aaaaff;'>1 мутный тип с дубинкой</li>\
					<li style='color: #aaaaff;'>1 мутный тип с луком</li>\
					<li style='color: #aaaaff;'>1 мутный тип-воин</li>\
					<li style='color: #aaaaff;'>1 мутный тип-элитный воин</li>\
				</ul>\
			</li>\
		</ul>",
		"icon": "assets/патрули/КОЛЛЕКТОРЫ 2.png",
		"type": "collectors"
	  },
	  {
		"coords": [3596, 1617],
		"title": "Коллекторы",
		"description": "<p style='color: #cccccc;'>Опасность группы злопыхателей зависит от уровня опасности мира.</p>\
		<ul>\
			<li style='color: #8899dd;'>0-25\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>25-50\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
					<li style='color: #aaaaff;'>1 мутный тип с дубинкой</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>50-75\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
					<li style='color: #aaaaff;'>1 мутный тип с дубинкой</li>\
					<li style='color: #aaaaff;'>1 мутный тип с луком</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>75-100\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
					<li style='color: #aaaaff;'>1 мутный тип с дубинкой</li>\
					<li style='color: #aaaaff;'>1 мутный тип с луком</li>\
					<li style='color: #aaaaff;'>1 мутный тип-воин</li>\
					<li style='color: #aaaaff;'>1 мутный тип-элитный воин</li>\
				</ul>\
			</li>\
		</ul>",
		"icon": "assets/патрули/КОЛЛЕКТОРЫ 3.png",
		"type": "collectors"
	  },
	  {
		"coords": [1518, 1136],
		"title": "Коллекторы",
		"description": "<p style='color: #cccccc;'>Опасность группы злопыхателей зависит от уровня опасности мира.</p>\
		<ul>\
			<li style='color: #8899dd;'>0-25\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>25-50\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
					<li style='color: #aaaaff;'>1 мутный тип с дубинкой</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>50-75\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
					<li style='color: #aaaaff;'>1 мутный тип с дубинкой</li>\
					<li style='color: #aaaaff;'>1 мутный тип с луком</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>75-100\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
					<li style='color: #aaaaff;'>1 мутный тип с дубинкой</li>\
					<li style='color: #aaaaff;'>1 мутный тип с луком</li>\
					<li style='color: #aaaaff;'>1 мутный тип-воин</li>\
					<li style='color: #aaaaff;'>1 мутный тип-элитный воин</li>\
				</ul>\
			</li>\
		</ul>",
		"icon": "assets/патрули/КОЛЛЕКТОРЫ 4.png",
		"type": "collectors"
	  },
	  {
		"coords": [679, 3792],
		"title": "Коллекторы",
		"description": "<p style='color: #cccccc;'>Опасность группы злопыхателей зависит от уровня опасности мира.</p>\
		<ul>\
			<li style='color: #8899dd;'>0-25\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>25-50\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
					<li style='color: #aaaaff;'>1 мутный тип с дубинкой</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>50-75\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
					<li style='color: #aaaaff;'>1 мутный тип с дубинкой</li>\
					<li style='color: #aaaaff;'>1 мутный тип с луком</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>75-100\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
					<li style='color: #aaaaff;'>1 мутный тип с дубинкой</li>\
					<li style='color: #aaaaff;'>1 мутный тип с луком</li>\
					<li style='color: #aaaaff;'>1 мутный тип-воин</li>\
					<li style='color: #aaaaff;'>1 мутный тип-элитный воин</li>\
				</ul>\
			</li>\
		</ul>",
		"icon": "assets/патрули/КОЛЛЕКТОРЫ 5.png",
		"type": "collectors"
	  },
	  {
		"coords": [2478, 3637],
		"title": "Бандиты",
		"description": "<p style='color: #cccccc;'>Опасность группы злопыхателей зависит от уровня опасности мира.</p>\
		<ul>\
			<li style='color: #8899dd;'>0-25\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>25-50\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
					<li style='color: #aaaaff;'>1 мутный тип с дубинкой</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>50-75\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
					<li style='color: #aaaaff;'>1 мутный тип с дубинкой</li>\
					<li style='color: #aaaaff;'>1 мутный тип с луком</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>75-100\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
					<li style='color: #aaaaff;'>1 мутный тип с дубинкой</li>\
					<li style='color: #aaaaff;'>1 мутный тип с луком</li>\
					<li style='color: #aaaaff;'>1 мутный тип-воин</li>\
					<li style='color: #aaaaff;'>1 мутный тип-элитный воин</li>\
				</ul>\
			</li>\
		</ul>",
		"icon": "assets/патрули/БАНДИТЫ 1.png",
		"type": "bandits"
	  },
	  {
		"coords": [2507, 1014],
		"title": "Бандиты",
		"description": "<p style='color: #cccccc;'>Опасность группы злопыхателей зависит от уровня опасности мира.</p>\
		<ul>\
			<li style='color: #8899dd;'>0-25\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>25-50\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
					<li style='color: #aaaaff;'>1 мутный тип с дубинкой</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>50-75\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
					<li style='color: #aaaaff;'>1 мутный тип с дубинкой</li>\
					<li style='color: #aaaaff;'>1 мутный тип с луком</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>75-100\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
					<li style='color: #aaaaff;'>1 мутный тип с дубинкой</li>\
					<li style='color: #aaaaff;'>1 мутный тип с луком</li>\
					<li style='color: #aaaaff;'>1 мутный тип-воин</li>\
					<li style='color: #aaaaff;'>1 мутный тип-элитный воин</li>\
				</ul>\
			</li>\
		</ul>",
		"icon": "assets/патрули/БАНДИТЫ 2.png",
		"type": "bandits"
	  },
	  {
		"coords": [3405, 2000],
		"title": "Бандиты",
		"description": "<p style='color: #cccccc;'>Опасность группы злопыхателей зависит от уровня опасности мира.</p>\
		<ul>\
			<li style='color: #8899dd;'>0-25\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>25-50\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
					<li style='color: #aaaaff;'>1 мутный тип с дубинкой</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>50-75\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
					<li style='color: #aaaaff;'>1 мутный тип с дубинкой</li>\
					<li style='color: #aaaaff;'>1 мутный тип с луком</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>75-100\
				<ul>\
					<li style='color: #aaaaff;'>3 мутных типа с копьями</li>\
					<li style='color: #aaaaff;'>2 мутных типа с людоловами</li>\
					<li style='color: #aaaaff;'>1 мутный тип с дубинкой</li>\
					<li style='color: #aaaaff;'>1 мутный тип с луком</li>\
					<li style='color: #aaaaff;'>1 мутный тип-воин</li>\
					<li style='color: #aaaaff;'>1 мутный тип-элитный воин</li>\
				</ul>\
			</li>\
		</ul>",
		"icon": "assets/патрули/БАНДИТЫ 3.png",
		"type": "bandits"
	  },
	  {
		"coords": [2056, 1043],
		"title": "Гоблины",
		"description": "<p style='color: #cccccc;'>Опасность группы злопыхателей зависит от уровня опасности мира.</p>\
		<ul>\
			<li style='color: #8899dd;'>0-25\
				<ul>\
					<li style='color: #aaaaff;'>4 случайных гоблина</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>25-50\
				<ul>\
					<li style='color: #aaaaff;'>5 случайных гоблина</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>50-75\
				<ul>\
					<li style='color: #aaaaff;'>5 случайных гоблина</li>\
					<li style='color: #aaaaff;'>1 случайный хобгоблин</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>75-100\
				<ul>\
					<li style='color: #aaaaff;'>5 случайных гоблина</li>\
					<li style='color: #aaaaff;'>1 случайный хобгоблин</li>\
					<li style='color: #aaaaff;'>1 случайный орк</li>\
				</ul>\
			</li>\
		</ul>",
		"icon": "assets/патрули/ГОБЛИНЫ 1.png",
		"type": "orcs"
	  },
	  {
		"coords": [2798, 1329],
		"title": "Гоблины",
		"description": "<p style='color: #cccccc;'>Опасность группы злопыхателей зависит от уровня опасности мира.</p>\
		<ul>\
			<li style='color: #8899dd;'>0-25\
				<ul>\
					<li style='color: #aaaaff;'>4 случайных гоблина</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>25-50\
				<ul>\
					<li style='color: #aaaaff;'>5 случайных гоблина</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>50-75\
				<ul>\
					<li style='color: #aaaaff;'>5 случайных гоблина</li>\
					<li style='color: #aaaaff;'>1 случайный хобгоблин</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>75-100\
				<ul>\
					<li style='color: #aaaaff;'>5 случайных гоблина</li>\
					<li style='color: #aaaaff;'>1 случайный хобгоблин</li>\
					<li style='color: #aaaaff;'>1 случайный орк</li>\
				</ul>\
			</li>\
		</ul>",
		"icon": "assets/патрули/ГОБЛИНЫ 2.png",
		"type": "orcs"
	  },
	  {
		"coords": [2830, 1713],
		"title": "Гоблины",
		"description": "<p style='color: #cccccc;'>Опасность группы злопыхателей зависит от уровня опасности мира.</p>\
		<ul>\
			<li style='color: #8899dd;'>0-25\
				<ul>\
					<li style='color: #aaaaff;'>4 случайных гоблина</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>25-50\
				<ul>\
					<li style='color: #aaaaff;'>5 случайных гоблина</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>50-75\
				<ul>\
					<li style='color: #aaaaff;'>5 случайных гоблина</li>\
					<li style='color: #aaaaff;'>1 случайный хобгоблин</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>75-100\
				<ul>\
					<li style='color: #aaaaff;'>5 случайных гоблина</li>\
					<li style='color: #aaaaff;'>1 случайный хобгоблин</li>\
					<li style='color: #aaaaff;'>1 случайный орк</li>\
				</ul>\
			</li>\
		</ul>",
		"icon": "assets/патрули/ГОБЛИНЫ 3.png",
		"type": "orcs"
	  },
	  {
		"coords": [1936, 1520],
		"title": "Гоблины",
		"description": "<p style='color: #cccccc;'>Опасность группы злопыхателей зависит от уровня опасности мира.</p>\
		<ul>\
			<li style='color: #8899dd;'>0-25\
				<ul>\
					<li style='color: #aaaaff;'>4 случайных гоблина</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>25-50\
				<ul>\
					<li style='color: #aaaaff;'>5 случайных гоблина</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>50-75\
				<ul>\
					<li style='color: #aaaaff;'>5 случайных гоблина</li>\
					<li style='color: #aaaaff;'>1 случайный хобгоблин</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>75-100\
				<ul>\
					<li style='color: #aaaaff;'>5 случайных гоблина</li>\
					<li style='color: #aaaaff;'>1 случайный хобгоблин</li>\
					<li style='color: #aaaaff;'>1 случайный орк</li>\
				</ul>\
			</li>\
		</ul>",
		"icon": "assets/патрули/ГОБЛИНЫ 4.png",
		"type": "orcs"
	  },
	  {
		"coords": [3090, 3024],
		"title": "Менеджеры абоминаций",
		"description": "<p style='color: #cccccc;'>Опасность группы злопыхателей зависит от уровня опасности мира.</p>\
		<ul>\
			<li style='color: #8899dd;'>0-25\
				<ul>\
					<li style='color: #aaaaff;'>2 паукообразных абоминации</li>\
					<li style='color: #aaaaff;'>2 зомби</li>\
					<li style='color: #aaaaff;'>1 скорпионообразная абоминация</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>25-50\
				<ul>\
					<li style='color: #aaaaff;'>3 паукообразных абоминации</li>\
					<li style='color: #aaaaff;'>2 зомби</li>\
					<li style='color: #aaaaff;'>2 скорпионообразная абоминация</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>50-75\
				<ul>\
					<li style='color: #aaaaff;'>3 паукообразных абоминации</li>\
					<li style='color: #aaaaff;'>2 зомби</li>\
					<li style='color: #aaaaff;'>2 скорпионообразная абоминация</li>\
					<li style='color: #aaaaff;'>1 менеджер абоминаций</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>75-100\
				<ul>\
					<li style='color: #aaaaff;'>3 паукообразных абоминации</li>\
					<li style='color: #aaaaff;'>3 зомби</li>\
					<li style='color: #aaaaff;'>2 скорпионообразная абоминация</li>\
					<li style='color: #aaaaff;'>2 менеджер абоминаций</li>\
				</ul>\
			</li>\
		</ul>",
		"icon": "assets/патрули/АБОМИНАЦИИ 1.png",
		"type": "abominations"
	  },
	  {
		"coords": [3669, 2868],
		"title": "Менеджеры абоминаций",
		"description": "<p style='color: #cccccc;'>Опасность группы злопыхателей зависит от уровня опасности мира.</p>\
		<ul>\
			<li style='color: #8899dd;'>0-25\
				<ul>\
					<li style='color: #aaaaff;'>2 паукообразных абоминации</li>\
					<li style='color: #aaaaff;'>2 зомби</li>\
					<li style='color: #aaaaff;'>1 скорпионообразная абоминация</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>25-50\
				<ul>\
					<li style='color: #aaaaff;'>3 паукообразных абоминации</li>\
					<li style='color: #aaaaff;'>2 зомби</li>\
					<li style='color: #aaaaff;'>2 скорпионообразная абоминация</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>50-75\
				<ul>\
					<li style='color: #aaaaff;'>3 паукообразных абоминации</li>\
					<li style='color: #aaaaff;'>2 зомби</li>\
					<li style='color: #aaaaff;'>2 скорпионообразная абоминация</li>\
					<li style='color: #aaaaff;'>1 менеджер абоминаций</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>75-100\
				<ul>\
					<li style='color: #aaaaff;'>3 паукообразных абоминации</li>\
					<li style='color: #aaaaff;'>3 зомби</li>\
					<li style='color: #aaaaff;'>2 скорпионообразная абоминация</li>\
					<li style='color: #aaaaff;'>2 менеджер абоминаций</li>\
				</ul>\
			</li>\
		</ul>",
		"icon": "assets/патрули/АБОМИНАЦИИ 2.png",
		"type": "abominations"
	  },
	  {
		"coords": [3056, 3730],
		"title": "Паукообразные абоминаций",
		"description": "<p style='color: #cccccc;'>Опасность группы злопыхателей зависит от уровня опасности мира.</p>\
		<ul>\
			<li style='color: #8899dd;'>0-25\
				<ul>\
					<li style='color: #aaaaff;'>5 паукообразных абоминации</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>25-50\
				<ul>\
					<li style='color: #aaaaff;'>6 паукообразных абоминации</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>50-75\
				<ul>\
					<li style='color: #aaaaff;'>8 паукообразных абоминации</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>75-100\
				<ul>\
					<li style='color: #aaaaff;'>10 паукообразных абоминации</li>\
				</ul>\
			</li>\
		</ul>",
		"icon": "assets/патрули/АБОМИНАЦИИ ПАУКИ 1.png",
		"type": "abominations"
	  },
	  {
		"coords": [2800, 3859],
		"title": "Паукообразные абоминаций",
		"description": "<p style='color: #cccccc;'>Опасность группы злопыхателей зависит от уровня опасности мира.</p>\
		<ul>\
			<li style='color: #8899dd;'>0-25\
				<ul>\
					<li style='color: #aaaaff;'>5 паукообразных абоминации</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>25-50\
				<ul>\
					<li style='color: #aaaaff;'>6 паукообразных абоминации</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>50-75\
				<ul>\
					<li style='color: #aaaaff;'>8 паукообразных абоминации</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>75-100\
				<ul>\
					<li style='color: #aaaaff;'>10 паукообразных абоминации</li>\
				</ul>\
			</li>\
		</ul>",
		"icon": "assets/патрули/АБОМИНАЦИИ ПАУКИ 2.png",
		"type": "abominations"
	  },
	  {
		"coords": [3600, 2515],
		"title": "Паукообразные абоминаций",
		"description": "<p style='color: #cccccc;'>Опасность группы злопыхателей зависит от уровня опасности мира.</p>\
		<ul>\
			<li style='color: #8899dd;'>0-25\
				<ul>\
					<li style='color: #aaaaff;'>5 паукообразных абоминации</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>25-50\
				<ul>\
					<li style='color: #aaaaff;'>6 паукообразных абоминации</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>50-75\
				<ul>\
					<li style='color: #aaaaff;'>8 паукообразных абоминации</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>75-100\
				<ul>\
					<li style='color: #aaaaff;'>10 паукообразных абоминации</li>\
				</ul>\
			</li>\
		</ul>",
		"icon": "assets/патрули/АБОМИНАЦИИ ПАУКИ 3.png",
		"type": "abominations"
	  },
	  {
		"coords": [2920, 3287],
		"title": "Гончии абоминаций",
		"description": "<p style='color: #cccccc;'>Опасность группы злопыхателей зависит от уровня опасности мира.</p>\
		<ul>\
			<li style='color: #8899dd;'>0-29\
				<ul>\
					<li style='color: #aaaaff;'>4 гончии абоминаций</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>30-59\
				<ul>\
					<li style='color: #aaaaff;'>6 гончих абоминаций</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>60-89\
				<ul>\
					<li style='color: #aaaaff;'>8 гончих абоминаций</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>89-100\
				<ul>\
					<li style='color: #aaaaff;'>10 гончих абоминаций</li>\
				</ul>\
			</li>\
		</ul>",
		"icon": "assets/патрули/АБОМИНАЦИИ СОБАКИ 1.png",
		"type": "abominations"
	  },
	  {
		"coords": [1935, 2288],
		"title": "Рыболюди",
		"description": "<p style='color: #cccccc;'>Опасность группы злопыхателей зависит от уровня опасности мира.</p>\
		<ul>\
			<li style='color: #8899dd;'>0-25\
				<ul>\
					<li style='color: #aaaaff;'>2 глубинных-ползуна</li>\
					<li style='color: #aaaaff;'>2 глубинных</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>25-50\
				<ul>\
					<li style='color: #aaaaff;'>2 глубинных-ползуна</li>\
					<li style='color: #aaaaff;'>2 глубинных</li>\
					<li style='color: #aaaaff;'>1 глубинный с копьем</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>50-75\
				<ul>\
					<li style='color: #aaaaff;'>2 глубинных-ползуна</li>\
					<li style='color: #aaaaff;'>2 глубинных</li>\
					<li style='color: #aaaaff;'>1 глубинный с копьем</li>\
					<li style='color: #aaaaff;'>1 глубинный-жирдяй</li>\
				</ul>\
			</li>\
			<li style='color: #8899dd;'>75-100\
				<ul>\
					<li style='color: #aaaaff;'>2 глубинных-ползуна</li>\
					<li style='color: #aaaaff;'>2 глубинных</li>\
					<li style='color: #aaaaff;'>2 глубинных с копьем</li>\
					<li style='color: #aaaaff;'>2 глубинных-жирдяя</li>\
				</ul>\
			</li>\
		</ul>",
		"icon": "assets/патрули/РЫБЫ 1.png",
		"type": "fishmen"
	  },
	  {
		"coords": [1876, 2669],
		"title": "Рыболюди",
		"description": "Рыболюди.",
		"icon": "assets/патрули/РЫБЫ 2.png",
		"type": "fishmen"
	  },
	  {
		"coords": [2480, 2544],
		"title": "Рыболюди",
		"description": "Рыболюди.",
		"icon": "assets/патрули/РЫБЫ 3.png",
		"type": "fishmen"
	  },
	  {
		"coords": [1870, 3218],
		"title": "Рыболюди",
		"description": "Рыболюди.",
		"icon": "assets/патрули/РЫБЫ 4.png",
		"type": "fishmen"
	  },
	  {
		"coords": [2090, 3763],
		"title": "Рыболюди",
		"description": "Рыболюди.",
		"icon": "assets/патрули/РЫБЫ 5.png",
		"type": "fishmen"
	  },
	  {
		"coords": [1641, 2485],
		"title": "Рыболюди",
		"description": "Рыболюди.",
		"icon": "assets/патрули/РЫБЫ 6.png",
		"type": "fishmen"
	  }
	],
	"regions": [ //x,y
	  {
		"coords": [1120, 1616],
		"title": "Улицы Ноэртауна",
		"description": "<p style='color: #cccccc;'>Улицы Ноэртауна.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>2.5 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа бандитов</li>\
						<li style='color: #993333;'>2: Коллекторы</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #339966;'>1: Стража Ноэра</li>\
						<li style='color: #339966;'>2: Группа бездомных</li>\
						<li style='color: #339966;'>3: Проповедник</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: Проституция: 3 позиции</li>\
						<li style='color: #aaaaff;'>2: Дом: 1 позиция</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/22(УЛИЦЫ НОЭРА).png",
		"type": "22",
		"width": 384,
		"height": 288
	  },
	  {
		"coords": [1136, 1712],
		"title": "Дорога",
		"description": "<p style='color: #cccccc;'>Дорога.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>3 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа оркоидов</li>\
						<li style='color: #993333;'>2: Группа волков</li>\
						<li style='color: #993333;'>3: Группа нежити</li>\
						<li style='color: #993333;'>4: Группа бандитов</li>\
						<li style='color: #993333;'>5: Группа коллекторов</li>\
						<li style='color: #993333;'>6: Засада у телеги</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #339966;'>1: Оставленная телега</li>\
						<li style='color: #339966;'>2: Лагерь беженцев</li>\
						<li style='color: #339966;'>3: Лагерь беженцев с квестом сопровождения</li>\
						<li style='color: #339966;'>4: Стража Ноэра</li>\
						<li style='color: #339966;'>5: Беженцы под атакой бандитов</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aa4444;'>нет</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/11(ДОРОГА НА СКЛОН РОСЕНДО).png",
		"type": "11",
		"width": 32,
		"height": 32
	  },
	  {
		"coords": [1136, 1776],
		"title": "Склон Росендо",
		"description": "<p style='color: #cccccc;'>Склон Росендо.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>3 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #44aa44;'>нет</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #339966;'>1: Патруль стражи</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: Проституция: 3 позиции</li>\
						<li style='color: #aaaaff;'>2: Дом: 5 позиций</li>\
						<li style='color: #aaaaff;'>3: Колодец: 1 позиция</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/12(СКЛОН РОСЕНДО).png",
		"type": "12",
		"width": 96,
		"height": 96
	  },
	  {
		"coords": [2432, 2544],
		"title": "Хвойный лес",
		"description": "<p style='color: #cccccc;'>Хвойный лес.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>10 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа оркоидов</li>\
						<li style='color: #993333;'>2: Группа волков</li>\
						<li style='color: #993333;'>3: Группа нежити</li>\
						<li style='color: #993333;'>4: Группа бандитов</li>\
						<li style='color: #993333;'>5: Засада у телеги</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #339966;'>1: Оставленная телега</li>\
						<li style='color: #339966;'>2: Лагерь беженцев</li>\
						<li style='color: #339966;'>3: Лагерь беженцев с квестом сопровождения</li>\
						<li style='color: #339966;'>4: Стража Ноэра</li>\
						<li style='color: #339966;'>5: Беженцы под атакой бандитов</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: До 2 волков(если монетка(100) 2 раза выпадет >= 50)</li>\
						<li style='color: #aaaaff;'>2: До 3 ловушек с нежитью(если монетка(100) 3 раза выпадет >= 50)</li>\
						<li style='color: #aaaaff;'>3: До 24 деревьев(чаще меньше/около 10)</li>\
						<li style='color: #aaaaff;'>Далее потолок = 1 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>4: До 6 гиробов(больше 2, если монетка(50) 4 раза выпадет <= потолок)</li>\
						<li style='color: #aaaaff;'>5: До 3 орехов(1:монетка(50)<= потолок; 2:монетка(75)<= потолок; 3:монетка(100)<= потолок)</li>\
						<li style='color: #aaaaff;'>6: До 3 цветков Тунга(1:монетка(10)<= потолок; 2:монетка(50)<= потолок; 3:монетка(70)<= потолок)</li>\
						<li style='color: #aaaaff;'>7: До 3 камней с насекомыми(1:монетка(25)<= потолок; 2:монетка(50)<= потолок; 3:монетка(75)<= потолок)</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/5(ХВОЙНЫЙ ЛЕС).png",
		"type": "5",
		"width": 3200,
		"height": 1632
	  },
	  {
		"coords": [1872, 2512],
		"title": "Тропический лес",
		"description": "<p style='color: #cccccc;'>Тропический лес.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>10 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа оркоидов</li>\
						<li style='color: #993333;'>2: Группа волков</li>\
						<li style='color: #993333;'>3: Группа нежити</li>\
						<li style='color: #993333;'>4: Группа бандитов</li>\
						<li style='color: #993333;'>5: Засада у телеги</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #339966;'>1: Оставленная телега</li>\
						<li style='color: #339966;'>2: Лагерь беженцев</li>\
						<li style='color: #339966;'>3: Лагерь беженцев с квестом сопровождения</li>\
						<li style='color: #339966;'>4: Стража Ноэра</li>\
						<li style='color: #339966;'>5: Беженцы под атакой бандитов</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: До 2 кабанов(если монетка(100) 2 раза выпадет >= 50)</li>\
						<li style='color: #aaaaff;'>2: До 3 винограда(больше 1, если монетка(100) 2 раза выпадет >= 50)</li>\
						<li style='color: #aaaaff;'>3: До 3 голубики(больше 1, если монетка(100) 2 раза выпадет >= 50)</li>\
						<li style='color: #aaaaff;'>4: До 11 деревьев(чаще меньше)</li>\
						<li style='color: #aaaaff;'>Далее потолок = 1 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>5: До 3 помидоров(1:монетка(10)<= потолок; 2:монетка(50)<= потолок; 3:монетка(70)<= потолок)</li>\
						<li style='color: #aaaaff;'>6: До 3 банановых пальм(1:монетка(100)<= 50; 2:монетка(50)<= потолок; 3:монетка(70)<= потолок)</li>\
						<li style='color: #aaaaff;'>7: До 3 трав Белого Дракона(1:всегда; 2:потолок<= монетка(50); 3:потолок<= монетка(50))</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/4(ТРОПИЧЕСКИЙ ЛЕС).png",
		"type": "4",
		"width": 2528,
		"height": 2208
	  },
	  {
		"coords": [2384, 2560],
		"title": "Горы",
		"description": "<p style='color: #cccccc;'>Горы.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>12.5 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа оркоидов</li>\
						<li style='color: #993333;'>2: Группа волков</li>\
						<li style='color: #993333;'>3: Группа нежити</li>\
						<li style='color: #993333;'>4: Группа бандитов</li>\
						<li style='color: #993333;'>5: Засада у телеги</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #339966;'>1: Оставленная телега</li>\
						<li style='color: #339966;'>2: Лагерь беженцев</li>\
						<li style='color: #339966;'>3: Лагерь беженцев с квестом сопровождения</li>\
						<li style='color: #339966;'>4: Стража Ноэра</li>\
						<li style='color: #339966;'>5: Беженцы под атакой бандитов</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: До 2 волков(если монетка(100) 2 раза выпадет >= 50)</li>\
						<li style='color: #aaaaff;'>1: До 1 кабана(если монетка(100) выпадет >= 50)</li>\
						<li style='color: #aaaaff;'>2: До 3 ловушек с нежитью(если монетка(100) 3 раза выпадет >= 50)</li>\
						<li style='color: #aaaaff;'>4: До 7 деревьев(чаще меньше)</li>\
						<li style='color: #aaaaff;'>Далее потолок = 1 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>5: До 6 случайных овощей(2:всегда; 4:монетка(50)<= потолок; 6:монетка(75)<= потолок)</li>\
						<li style='color: #aaaaff;'>6: До 3 драконьего корня(1:монетка(10)<= потолок; 2:монетка(50)<= потолок; 3:монетка(70)<= потолок)</li>\
						<li style='color: #aaaaff;'>7: До 4 фосфора(1:всегда; 2:потолок>= монетка(25); 3:потолок>= монетка(50); 4:потолок>= монетка(70))</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/7(ГОРА).png",
		"type": "7",
		"width": 3488,
		"height": 2304
	  },
	  {
		"coords": [1008, 1600],
		"title": "Районы Ноэртауна",
		"description": "<p style='color: #cccccc;'>Улицы Ноэртауна.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>2.5 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа бандитов</li>\
						<li style='color: #993333;'>2: Коллекторы</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #339966;'>1: Стража Ноэра</li>\
						<li style='color: #339966;'>2: Группа бездомных</li>\
						<li style='color: #339966;'>3: Проповедник</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: Проституция: 3 позиции</li>\
						<li style='color: #aaaaff;'>2: Дом: 4 позиций</li>\
						<li style='color: #aaaaff;'>3: Колодец: 2 позиций</li>\
						<li style='color: #aaaaff;'>4: Рванные тряпки: 1 позиция</li>\
						<li style='color: #aaaaff;'>Далее потолок = 30 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>Далее потолок2 = 1 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>5: До 2 мусора(1:потолок>= монетка(100); 2:потолок2>= монетка(100))</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/21(РАЙОНЫ НОЭРТАУНА).png",
		"type": "21",
		"width": 544,
		"height": 256
	  },
	  {
		"coords": [1904, 2608],
		"title": "Главная дорога",
		"description": "<p style='color: #cccccc;'>Главная дорога.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>2.5 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа бандитов</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #339966;'>1: Лагерь беженцев</li>\
						<li style='color: #339966;'>2: Стража Ноэра</li>\
						<li style='color: #339966;'>3: Беженцы под атакой бандитов</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aa4444;'>нет</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/23(ГЛАВНАЯ ДОРОГА).png",
		"type": "23",
		"width": 2336,
		"height": 2016
	  },
	  {
		"coords": [2592, 2704],
		"title": "Дорога",
		"description": "<p style='color: #cccccc;'>Дорога.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>3 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа оркоидов</li>\
						<li style='color: #993333;'>2: Группа волков</li>\
						<li style='color: #993333;'>3: Группа нежити</li>\
						<li style='color: #993333;'>4: Группа бандитов</li>\
						<li style='color: #993333;'>5: Коллекторы</li>\
						<li style='color: #993333;'>6: Засада у телеги</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #339966;'>1: Лагерь беженцев</li>\
						<li style='color: #339966;'>2: Стража Ноэра</li>\
						<li style='color: #339966;'>3: Беженцы под атакой бандитов</li>\
						<li style='color: #339966;'>4: Лагерь беженцев с квестом сопровождения</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aa4444;'>нет</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/11(ДОРОГА).png",
		"type": "11",
		"width": 3008,
		"height": 2016
	  },
	  {
		"coords": [2176, 2528],
		"title": "Заброшенный дом",
		"description": "<p style='color: #cccccc;'>Заброшенный дом.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>4 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа оркоидов</li>\
						<li style='color: #993333;'>2: Группа волков</li>\
						<li style='color: #993333;'>3: Группа нежити</li>\
						<li style='color: #993333;'>4: Группа бандитов</li>\
						<li style='color: #993333;'>5: Засада у телеги</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #339966;'>1: Оставленная телега</li>\
						<li style='color: #339966;'>2: Лагерь беженцев</li>\
						<li style='color: #339966;'>3: Лагерь беженцев с квестом сопровождения</li>\
						<li style='color: #339966;'>4: Стража Ноэра</li>\
						<li style='color: #339966;'>5: Беженцы под атакой бандитов</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: Проституция: до 3 позиций</li>\
						<li style='color: #aaaaff;'>Далее потолок = 50 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>2: Крыса(1:монетка(100)> потолок)</li>\
						<li style='color: #aaaaff;'>3: Таракан(1:монетка(100)> потолок)</li>\
						<li style='color: #aaaaff;'>4: Бездомный(1:монетка(100)>= 50)</li>\
						<li style='color: #aaaaff;'>5: Бездомный гоблин(1:монетка(100)>= 50)</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/9(ЗАБРОШЕННЫЙ ДОМ).png",
		"type": "9",
		"width": 2752,
		"height": 1920
	  },
	  {
		"coords": [2032, 2768],
		"title": "Лагерь беженцев",
		"description": "<p style='color: #cccccc;'>Лагерь беженцев.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>3.5 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа бандитов</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #339966;'>1: Стража Ноэра</li>\
						<li style='color: #339966;'>2: Группа бездомных</li>\
						<li style='color: #339966;'>3: Проповедник</li>\
						<li style='color: #339966;'>4: Беженцы под атакой бандитов</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: Проституция: 3 позиций</li>\
						<li style='color: #aaaaff;'>Далее потолок = 50 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>2: Крыса(1:монетка(100)> потолок)</li>\
						<li style='color: #aaaaff;'>3: Таракан(1:монетка(100)> потолок)</li>\
						<li style='color: #aaaaff;'>4: Рванные тряпки: 1 позиция</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/20(ЛАГЕРЬ БЕЖЕНЦЕВ).png",
		"type": "20",
		"width": 2016,
		"height": 2528
	  },
	  {
		"coords": [1392, 2576],
		"title": "Трущобы",
		"description": "<p style='color: #cccccc;'>Трущобы.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>3.5 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа бандитов</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #339966;'>1: Стража Ноэра</li>\
						<li style='color: #339966;'>2: Группа бездомных</li>\
						<li style='color: #339966;'>3: Проповедник</li>\
						<li style='color: #339966;'>4: Беженцы под атакой бандитов</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: Проституция: 3 позиций</li>\
						<li style='color: #aaaaff;'>Далее потолок = 50 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>2: 2 Крысы(1:монетка(100)> потолок; 2:монетка(100)> потолок)</li>\
						<li style='color: #aaaaff;'>3: 2 Таракан(1:монетка(100)> потолок; 2:монетка(100)> потолок)</li>\
						<li style='color: #aaaaff;'>4: Рванные тряпки: 1 позиция</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/10(ТРУЩОБЫ).png",
		"type": "10",
		"width": 1312,
		"height": 2144
	  },
	  {
		"coords": [2336, 2768],
		"title": "Берег Ноэра",
		"description": "<p style='color: #cccccc;'>Берег Ноэра.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>3 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа оркоидов</li>\
						<li style='color: #993333;'>2: Волна</li>\
						<li style='color: #993333;'>3: Группа бандитов</li>\
						<li style='color: #993333;'>4: Засада у телеги</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #339966;'>1: Оставленная телега</li>\
						<li style='color: #339966;'>2: Лагерь беженцев</li>\
						<li style='color: #339966;'>3: Лагерь беженцев с квестом сопровождения</li>\
						<li style='color: #339966;'>4: Стража Ноэра</li>\
						<li style='color: #339966;'>5: Беженцы под атакой бандитов</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: До 8 деревьев(чаще меньше)</li>\
						<li style='color: #aaaaff;'>Далее потолок = 1 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>2: До 9 рыб(3:всегда; 6:монетка(50) 3 раза<= потолок; 9:монетка(50) 6 раз<= потолок)</li>\
						<li style='color: #aaaaff;'>3: До 3 орехов(1:монетка(50)<= потолок; 2:монетка(75)<= потолок; 3:монетка(100)<= потолок)</li>\
						<li style='color: #aaaaff;'>4: До 3 крабов(1:монетка(50)<= потолок; 2:монетка(75)<= потолок)</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/2(БЕРЕГ НОЭРА).png",
		"type": "2",
		"width": 3200,
		"height": 2592
	  },
	  {
		"coords": [2352, 2592],
		"title": "Поле",
		"description": "<p style='color: #cccccc;'>Поле.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>5 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа оркоидов</li>\
						<li style='color: #993333;'>2: Группа волков</li>\
						<li style='color: #993333;'>3: Группа нежити</li>\
						<li style='color: #993333;'>4: Группа бандитов</li>\
						<li style='color: #993333;'>5: Засада у телеги</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #339966;'>1: Оставленная телега</li>\
						<li style='color: #339966;'>2: Лагерь беженцев</li>\
						<li style='color: #339966;'>3: Лагерь беженцев с квестом сопровождения</li>\
						<li style='color: #339966;'>4: Стража Ноэра</li>\
						<li style='color: #339966;'>5: Беженцы под атакой бандитов</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: До 2 кроликов(если монетка(100) 2 раза выпадет >= 80)</li>\
						<li style='color: #aaaaff;'>Далее потолок = 1 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>2: До 3 камней с насекомыми(1:монетка(25)<= потолок; 2:монетка(50)<= потолок; 3:монетка(75)<= потолок)</li>\
						<li style='color: #aaaaff;'>3: До 6 случайных овощей(1:монетка(25)<= потолок; 2:монетка(50)<= потолок; 3:монетка(75)<= потолок)</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/1(ПОЛЕ).png",
		"type": "1",
		"width": 3296,
		"height": 2176
	  },
	  {
		"coords": [3072, 2096],
		"title": "Болотная тропа Ноэра",
		"description": "<p style='color: #cccccc;'>Болотная тропа Ноэра.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>3.5 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа оркоидов</li>\
						<li style='color: #993333;'>2: Группа глубинных</li>\
						<li style='color: #993333;'>3: Коллекторы</li>\
						<li style='color: #993333;'>4: Группа бандитов</li>\
						<li style='color: #993333;'>5: Засада у телеги</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #339966;'>1: Оставленная телега</li>\
						<li style='color: #339966;'>2: Лагерь беженцев</li>\
						<li style='color: #339966;'>3: Лагерь беженцев с квестом сопровождения</li>\
						<li style='color: #339966;'>4: Стража Ноэра</li>\
						<li style='color: #339966;'>5: Беженцы под атакой бандитов</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: До 4 деревьев</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/13(БОЛОТНАЯ ТРОПА НОЭРА).png",
		"type": "13",
		"width": 1792,
		"height": 800
	  },
	  {
		"coords": [3760, 704],
		"title": "Болотная тропа острова рыболюдей",
		"description": "<p style='color: #cccccc;'>Болотная тропа острова рыболюдей.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>3.5 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа глубинных</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #339966;'>1: Стража Рыбополиса</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: До 4 деревьев</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/24(БОЛОТНАЯ ТРОПА ОСТРОВА РЫБ).png",
		"type": "24",
		"width": 224,
		"height": 128
	  },
	  {
		"coords": [2992, 2112],
		"title": "Болото Ноэра",
		"description": "<p style='color: #cccccc;'>Болото Ноэра.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>11 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа глубинных</li>\
						<li style='color: #993333;'>2: Группа оркоидов</li>\
						<li style='color: #993333;'>3: Группа нежити</li>\
						<li style='color: #993333;'>4: Группа волков</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #aa4444;'>нет</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: До 2 волков(если монетка(100) 2 раза выпадет >= 50)</li>\
						<li style='color: #aaaaff;'>2: До 2 кабанов(если монетка(100) 2 раза выпадет >= 50)</li>\
						<li style='color: #aaaaff;'>2: До 3 затаившихся глубинных</li>\
						<li style='color: #aaaaff;'>3: До 15 деревьев(чаще меньше)</li>\
						<li style='color: #aaaaff;'>Далее потолок = 1 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>4: До 15 рыб(7:всегда; 9:монетка(25)<= потолок; 12:монетка(50)<= потолок; 15:монетка(75)<= потолок)</li>\
						<li style='color: #aaaaff;'>5: До 3 грибов(если монетка(50) 2 раза выпадет <= потолок)</li>\
						<li style='color: #aaaaff;'>6: До 3 голубики(если монетка(50) 2 раза выпадет <= потолок)</li>\
						<li style='color: #aaaaff;'>7: До 3 помидоров(1:монетка(10)<= потолок; 2:монетка(50)<= потолок; 3:монетка(70)<= потолок)</li>\
						<li style='color: #aaaaff;'>8: До 3 горькой травы(1:монетка(50)<= потолок; 2:монетка(70)<= потолок; 3:монетка(80)<= потолок)</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/8(БОЛОТО НОЭРА).png",
		"type": "8",
		"width": 1696,
		"height": 1088
	  },
	  {
		"coords": [2928, 2112],
		"title": "Топи Ноэра",
		"description": "<p style='color: #cccccc;'>Топи Ноэра.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>7 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа глубинных</li>\
						<li style='color: #993333;'>2: Группа оркоидов</li>\
						<li style='color: #993333;'>3: Группа нежити</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #aa4444;'>нет</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: До 5 затаившихся глубинных</li>\
						<li style='color: #aaaaff;'>2: До 4 деревьев(чаще меньше)</li>\
						<li style='color: #aaaaff;'>Далее потолок = 1 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>3: До 10 рыб(7:всегда; 8:монетка(25)<= потолок; 9:монетка(50)<= потолок; 10:монетка(75)<= потолок)</li>\
						<li style='color: #aaaaff;'>4: До 3 помидоров(1:монетка(10)<= потолок; 2:монетка(50)<= потолок; 3:монетка(70)<= потолок)</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/15(ТОПИ НОЭРА).png",
		"type": "15",
		"width": 1888,
		"height": 960
	  },
	  {
		"coords": [3904, 640],
		"title": "Топи острова рыб",
		"description": "<p style='color: #cccccc;'>Топи острова рыб.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>7 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа глубинных</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #339966;'>1: Стража Рыбополиса</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: До 5 затаившихся глубинных</li>\
						<li style='color: #aaaaff;'>2: До 4 деревьев(чаще меньше)</li>\
						<li style='color: #aaaaff;'>Далее потолок = 1 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>3: До 10 рыб(7:всегда; 8:монетка(25)<= потолок; 9:монетка(50)<= потолок; 10:монетка(75)<= потолок)</li>\
						<li style='color: #aaaaff;'>4: До 3 помидоров(1:монетка(10)<= потолок; 2:монетка(50)<= потолок; 3:монетка(70)<= потолок)</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/26(ТОПИ ОСТРОВА РЫБ).png",
		"type": "26",
		"width": 576,
		"height": 320
	  },
	  {
		"coords": [3152, 3136],
		"title": "Зараженная гора",
		"description": "<p style='color: #cccccc;'>Зараженная гора.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>12.5 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа паукообразных абоминаций</li>\
						<li style='color: #993333;'>2: Группа гончих абоминаций</li>\
						<li style='color: #993333;'>3: Группа менеджеров абоминаций</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #aa4444;'>нет</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: 2 взрывающиеся летающие споры</li>\
						<li style='color: #aaaaff;'>2: 2 летающие споры</li>\
						<li style='color: #aaaaff;'>3: 2 щупальца</li>\
						<li style='color: #aaaaff;'>4: 2 споры</li>\
						<li style='color: #aaaaff;'>5: 2 летучие мыши</li>\
						<li style='color: #aaaaff;'>6: 14 паразитов</li>\
						<li style='color: #aaaaff;'>7: До 9 деревьев(чаще меньше)</li>\
						<li style='color: #aaaaff;'>Далее потолок = 1 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>8: До 18 мутировавших грибов(6:всегда; 12:монетка(50)<= потолок; 18:монетка(75)<= потолок)</li>\
						<li style='color: #aaaaff;'>9: До 3 камней с насекомыми(1:монетка(50)<= потолок; 2:монетка(75)<= потолок; 3:монетка(100)<= потолок)</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/3(ЗАРАЖЕННАЯ ГОРА).png",
		"type": "3",
		"width": 1376,
		"height": 896
	  },
	  {
		"coords": [3264, 3344],
		"title": "Мертвый лес",
		"description": "<p style='color: #cccccc;'>Мертвый лес.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>10 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа паукообразных абоминаций</li>\
						<li style='color: #993333;'>2: Группа гончих абоминаций</li>\
						<li style='color: #993333;'>3: Группа менеджеров абоминаций</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #aa4444;'>нет</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: 2 взрывающиеся летающие споры</li>\
						<li style='color: #aaaaff;'>2: 2 летающие споры</li>\
						<li style='color: #aaaaff;'>3: 2 щупальца</li>\
						<li style='color: #aaaaff;'>4: 2 споры</li>\
						<li style='color: #aaaaff;'>5: 2 летучие мыши</li>\
						<li style='color: #aaaaff;'>6: 14 паразитов</li>\
						<li style='color: #aaaaff;'>7: До 5 деревьев(чаще меньше)</li>\
						<li style='color: #aaaaff;'>Далее потолок = 1 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>8: До 18 мутировавших грибов(6:всегда; 12:монетка(50)<= потолок; 18:монетка(75)<= потолок)</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/6(МЕРТВЫЙ ЛЕС).png",
		"type": "6",
		"width": 1728,
		"height": 1312
	  },
	  {
		"coords": [3280, 3280],
		"title": "Пустоши абоминаций",
		"description": "<p style='color: #cccccc;'>Пустоши абоминаций.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>4 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа паукообразных абоминаций</li>\
						<li style='color: #993333;'>2: Группа гончих абоминаций</li>\
						<li style='color: #993333;'>3: Засада гончих абоминаций</li>\
						<li style='color: #993333;'>4: Группа менеджеров абоминаций</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #339966;'>1: Беженцы под атакой</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: 4 взрывающиеся летающие споры</li>\
						<li style='color: #aaaaff;'>2: 16 щупальцев</li>\
						<li style='color: #aaaaff;'>3: 4 летучие мыши</li>\
						<li style='color: #aaaaff;'>4: До 12 деревьев(чаще меньше)</li>\
						<li style='color: #aaaaff;'>Далее потолок = 1 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>5: До 3 камней с насекомыми(1:монетка(50)<= потолок; 2:монетка(75)<= потолок; 3:монетка(100)<= потолок)</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/14(ПУСТОШИ АБОМИНАЦИЙ).png",
		"type": "14",
		"width": 1760,
		"height": 1248
	  },
	  {
		"coords": [3056, 3792],
		"title": "Зараженный край орков",
		"description": "<p style='color: #cccccc;'>Зараженный край орков.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>5 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа паукообразных абоминаций</li>\
						<li style='color: #993333;'>2: Группа гончих абоминаций</li>\
						<li style='color: #993333;'>3: Группа оркоидов-наездников</li>\
						<li style='color: #993333;'>4: Группа менеджеров абоминаций</li>\
						<li style='color: #993333;'>5: Игровая площадка оркоидов</li>\
						<li style='color: #993333;'>6: Группа оркоидов</li>\
						<li style='color: #993333;'>7: Засада у братской могилы</li>\
						<li style='color: #993333;'>8: Группа нежити</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #339966;'>1: Лагерь беженцев</li>\
						<li style='color: #339966;'>2: Братская могила</li>\
						<li style='color: #339966;'>3: Беженцы под атакой</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: До 4 деревьев(чаще меньше)</li>\
						<li style='color: #aaaaff;'>Далее потолок = 1 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>2: До 3 камней с насекомыми(1:монетка(50)<= потолок; 2:монетка(75)<= потолок; 3:монетка(100)<= потолок)</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/28(ЗАРАЖЕННЫЙ КРАЙ ОРКОВ).png",
		"type": "28",
		"width": 416,
		"height": 544
	  },
	  {
		"coords": [3744, 3488],
		"title": "Руины павшей крепости абоминаций",
		"description": "<p style='color: #cccccc;'>Руины павшей крепости абоминаций.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>7.5 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа паукообразных абоминаций</li>\
						<li style='color: #993333;'>2: Группа гончих абоминаций</li>\
						<li style='color: #993333;'>3: Засада гончих абоминаций</li>\
						<li style='color: #993333;'>4: Группа менеджеров абоминаций</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #aa4444;'>нет</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: 1 щупальце</li>\
						<li style='color: #aaaaff;'>2: 2 зомби</li>\
						<li style='color: #aaaaff;'>3: 2 торса зомби</li>\
						<li style='color: #aaaaff;'>4: 4 паразитов</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/29(РУИНЫ ПАВШЕЙ КРЕПОСТИ АБОМИНАЦИЙ).png",
		"type": "29",
		"width": 640,
		"height": 512
	  },
	  {
		"coords": [3472, 3904],
		"title": "Руины павшей крепости оркоидов",
		"description": "<p style='color: #cccccc;'>Руины павшей крепости оркоидов.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>7.5 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа паукообразных абоминаций</li>\
						<li style='color: #993333;'>2: Группа гончих абоминаций</li>\
						<li style='color: #993333;'>4: Группа менеджеров абоминаций</li>\
						<li style='color: #993333;'>5: Игровая площадка оркоидов</li>\
						<li style='color: #993333;'>6: Группа оркоидов</li>\
						<li style='color: #993333;'>7: Засада у братской могилы</li>\
						<li style='color: #993333;'>8: Группа нежити</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #339966;'>1: Лагерь беженцев</li>\
						<li style='color: #339966;'>2: Братская могила</li>\
						<li style='color: #339966;'>3: Беженцы под атакой</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: 6 скелетов</li>\
						<li style='color: #aaaaff;'>Далее потолок = 1 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>2: До 3 трупов(1:всегда; 2:монетка(25)<= потолок; 3:монетка(50)<= потолок)</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/30(РУИНЫ ПАВШЕЙ КРЕПОСТИ ОРКОВ).png",
		"type": "30",
		"width": 224,
		"height": 448
	  },
	  {
		"coords": [3456, 3760],
		"title": "Улицы Сибариса",
		"description": "<p style='color: #cccccc;'>Улицы Сибариса.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>3.5 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Игровая площадка оркоидов</li>\
						<li style='color: #993333;'>2: Группа оркоидов</li>\
						<li style='color: #993333;'>3: Засада у братской могилы</li>\
						<li style='color: #993333;'>4: Группа нежити</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #339966;'>1: Лагерь беженцев</li>\
						<li style='color: #339966;'>2: Братская могила</li>\
						<li style='color: #339966;'>3: Беженцы под атакой</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: До 2 ловушек с нежитью(если монетка(100)>= 50)</li>\
						<li style='color: #aaaaff;'>2: 4 скелета</li>\
						<li style='color: #aaaaff;'>Далее потолок = 1 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>3: До 4 трупов(2:всегда; 4:монетка(50) 2 раза<= потолок)</li>\
						<li style='color: #aaaaff;'>Далее потолок3 = 30 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>Далее потолок4 = 1 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>4: До 4 мусора(2:потолок>= монетка(100); 4:потолок2>= монетка(100))</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/31(УЛИЦЫ СИБАРИСА).png",
		"type": "31",
		"width": 256,
		"height": 32
	  },
	  {
		"coords": [3312, 3776],
		"title": "Аллеи Сибариса",
		"description": "<p style='color: #cccccc;'>Аллеи Сибариса.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>7 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Игровая площадка оркоидов</li>\
						<li style='color: #993333;'>2: Группа оркоидов</li>\
						<li style='color: #993333;'>3: Засада у братской могилы</li>\
						<li style='color: #993333;'>4: Группа нежити</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #339966;'>1: Лагерь беженцев</li>\
						<li style='color: #339966;'>2: Братская могила</li>\
						<li style='color: #339966;'>3: Беженцы под атакой</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: До 2 ловушек с нежитью(если монетка(100)>= 50)</li>\
						<li style='color: #aaaaff;'>2: 4 скелета</li>\
						<li style='color: #aaaaff;'>Далее потолок = 1 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>3: До 4 трупов(2:всегда; 4:монетка(50) 2 раза<= потолок)</li>\
						<li style='color: #aaaaff;'>Далее потолок3 = 30 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>Далее потолок4 = 1 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>4: До 4 мусора(2:потолок>= монетка(100); 4:потолок2>= монетка(100))</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/32(АЛЛЕЯ СИБАРИСА).png",
		"type": "32",
		"width": 160,
		"height": 448
	  },
	  {
		"coords": [3136, 3264],
		"title": "Зараженный край абоминаций",
		"description": "<p style='color: #cccccc;'>Зараженный край абоминаций.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>5 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа оркоидов</li>\
						<li style='color: #993333;'>2: Группа нежити</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #aa4444;'>нет</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: 1 взрывающаяся летающая спора</li>\
						<li style='color: #aaaaff;'>2: 2 летающие споры</li>\
						<li style='color: #aaaaff;'>3: 2 споры</li>\
						<li style='color: #aaaaff;'>4: 2 летучие мыши</li>\
						<li style='color: #aaaaff;'>5: 8 паразитов</li>\
						<li style='color: #aaaaff;'>6: До 4 деревьев(чаще меньше)</li>\
						<li style='color: #aaaaff;'>Далее потолок = 1 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>7: До 3 камней с насекомыми(1:монетка(25)<= потолок; 2:монетка(50)<= потолок; 3:монетка(75)<= потолок)</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/16(ЗАРАЖЕННЫЙ КРАЙ АБОМИНАЦИЙ).png",
		"type": "16",
		"width": 1920,
		"height": 1216
	  },
	  {
		"coords": [3104, 3872],
		"title": "Загрязненные земли",
		"description": "<p style='color: #cccccc;'>Загрязненные земли.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>4 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа паукообразных абоминаций</li>\
						<li style='color: #993333;'>2: Группа гончих абоминаций</li>\
						<li style='color: #993333;'>3: Группа оркоидов-наездников</li>\
						<li style='color: #993333;'>4: Группа менеджеров абоминаций</li>\
						<li style='color: #993333;'>5: Игровая площадка оркоидов</li>\
						<li style='color: #993333;'>6: Группа оркоидов</li>\
						<li style='color: #993333;'>7: Засада у братской могилы</li>\
						<li style='color: #993333;'>8: Группа нежити</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #339966;'>1: Лагерь беженцев</li>\
						<li style='color: #339966;'>2: Братская могила</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: До 12 деревьев(чаще меньше)</li>\
						<li style='color: #aaaaff;'>Далее потолок = 1 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>2: До 3 камней с насекомыми(1:монетка(25)<= потолок; 2:монетка(50)<= потолок; 3:монетка(75)<= потолок)</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/19(ЗАГРЯЗНЕННЫЕ ЗЕМЛИ).png",
		"type": "19",
		"width": 640,
		"height": 640
	  },
	  {
		"coords": [3520, 3632],
		"title": "Руины зараженного города",
		"description": "<p style='color: #cccccc;'>Руины зараженного города.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>7 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа паукообразных абоминаций</li>\
						<li style='color: #993333;'>2: Группа гончих абоминаций</li>\
						<li style='color: #993333;'>3: Засада гончих абоминаций</li>\
						<li style='color: #993333;'>4: Группа менеджеров абоминаций</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #aa4444;'>нет</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: 2 взрывающиеся летающие споры</li>\
						<li style='color: #aaaaff;'>2: 2 летающие споры</li>\
						<li style='color: #aaaaff;'>3: 2 щупальца</li>\
						<li style='color: #aaaaff;'>4: 2 споры</li>\
						<li style='color: #aaaaff;'>5: 4 зомби</li>\
						<li style='color: #aaaaff;'>6: 10 паразитов</li>\
						<li style='color: #aaaaff;'>7: До 5 деревьев(чаще меньше)</li>\
						<li style='color: #aaaaff;'>Далее потолок = 1 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>8: До 3 камней с насекомыми(1:монетка(25)<= потолок; 2:монетка(50)<= потолок; 3:монетка(75)<= потолок)</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/18(РУИНЫ ЗАРАЖЕННОГО ГОРОДА).png",
		"type": "18",
		"width": 1216,
		"height": 736
	  },
	  {
		"coords": [3664, 3392],
		"title": "Загрязненная дорога",
		"description": "<p style='color: #cccccc;'>Загрязненная дорога.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>5 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа паукообразных абоминаций</li>\
						<li style='color: #993333;'>2: Группа гончих абоминаций</li>\
						<li style='color: #993333;'>3: Засада гончих абоминаций</li>\
						<li style='color: #993333;'>4: Группа менеджеров абоминаций</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #aa4444;'>нет</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: 1 взрывающаяся летающая спора</li>\
						<li style='color: #aaaaff;'>2: 1 летающа спора</li>\
						<li style='color: #aaaaff;'>4: 1 спора</li>\
						<li style='color: #aaaaff;'>5: 3 зомби</li>\
						<li style='color: #aaaaff;'>6: 4 паразита</li>\
						<li style='color: #aaaaff;'>Далее потолок = 1 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>7: До 3 камней с насекомыми(1:монетка(25)<= потолок; 2:монетка(50)<= потолок; 3:монетка(75)<= потолок)</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/17(ЗАГРЯЗНЕННАЯ ДОРОГА).png",
		"type": "17",
		"width": 864,
		"height": 384
	  },
	  {
		"coords": [3904, 608],
		"title": "Берег острова рыб",
		"description": "<p style='color: #cccccc;'>Берег острова рыб.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>3 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа глубинных</li>\
						<li style='color: #993333;'>2: Волна</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #339966;'>1: Стража Рыбополиса</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: До 8 деревьев(чаще меньше)</li>\
						<li style='color: #aaaaff;'>2: До 4 затаившихся глубинных(если монетка(100)>= 50 выпадает 4 раза)</li>\
						<li style='color: #aaaaff;'>Далее потолок = 1 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>3: До 9 рыб(3:всегда; 6:монетка(50) 3 раза<= потолок; 9:монетка(50) 6 раз<= потолок)</li>\
						<li style='color: #aaaaff;'>4: До 3 орехов(1:монетка(50)<= потолок; 2:монетка(75)<= потолок; 3:монетка(100)<= потолок)</li>\
						<li style='color: #aaaaff;'>5: До 3 крабов(1:монетка(50)<= потолок; 2:монетка(75)<= потолок)</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/27(БЕРЕГ ОСТРОВА РЫБ).png",
		"type": "27",
		"width": 640,
		"height": 320
	  },
	  {
		"coords": [3888, 688],
		"title": "Болото острова рыб",
		"description": "<p style='color: #cccccc;'>Болото острова рыб.</p>\
		<ul>\
			<li style='color: #8899aa;'>Стоимость перехода: <span style='color: #ffaa00;'>11 выносливости</span></li>\
				<li style='color: #aa4444;'>Негативные события:\
					<ul>\
						<li style='color: #993333;'>1: Группа глубинных</li>\
					</ul>\
				</li>\
				<li style='color: #44aa44;'>Положительные события:\
					<ul>\
						<li style='color: #339966;'>1: Стража Рыбополиса</li>\
					</ul>\
				</li>\
				<li style='color: #8899dd;'>Ресурсы региона:\
					<ul>\
						<li style='color: #aaaaff;'>1: До 2 волков(если монетка(100) 2 раза выпадет >= 50)</li>\
						<li style='color: #aaaaff;'>2: До 2 кабанов(если монетка(100) 2 раза выпадет >= 50)</li>\
						<li style='color: #aaaaff;'>2: До 3 затаившихся глубинных</li>\
						<li style='color: #aaaaff;'>3: До 15 деревьев(чаще меньше)</li>\
						<li style='color: #aaaaff;'>Далее потолок = 1 + мудрость + 2 * выживание</li>\
						<li style='color: #aaaaff;'>4: До 15 рыб(7:всегда; 9:монетка(25)<= потолок; 12:монетка(50)<= потолок; 15:монетка(75)<= потолок)</li>\
						<li style='color: #aaaaff;'>5: До 3 грибов(если монетка(50) 2 раза выпадет <= потолок)</li>\
						<li style='color: #aaaaff;'>6: До 3 голубики(если монетка(50) 2 раза выпадет <= потолок)</li>\
						<li style='color: #aaaaff;'>7: До 3 помидоров(1:монетка(10)<= потолок; 2:монетка(50)<= потолок; 3:монетка(70)<= потолок)</li>\
						<li style='color: #aaaaff;'>8: До 3 горькой травы(1:монетка(50)<= потолок; 2:монетка(70)<= потолок; 3:монетка(80)<= потолок)</li>\
					</ul>\
				</li>\
		</ul>",
		"icon": "assets/регионы/25(БОЛОТО ОСТРОВА РЫБ).png",
		"type": "25",
		"width": 480,
		"height": 288
	  }
	]


};


  // Инициализация карты
  const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 5,
    attributionControl: false
  });

  // Группы для маркеров
  const questMarkers = L.layerGroup();
  const regularMarkers = L.layerGroup();
  const patrolLayers = {
  collectors: L.layerGroup(),
  bandits: L.layerGroup(),
  orcs: L.layerGroup(),
  abominations: L.layerGroup(),
  fishmen: L.layerGroup()
  };


  // Устанавливаем изображение карты
  const bounds = [[0, 0], [mapData.imageHeight, mapData.imageWidth]];
  L.imageOverlay(mapData.mapImage, bounds).addTo(map);
  map.fitBounds(bounds);

  // Функция создания маркера 
  function createMarker(coords, title, description, iconUrl, type) {
    const icon = L.divIcon({
      html: `<div class="marker-container"><img src="${iconUrl}" alt="${title}"></div>`,
      className: 'fixed-marker',
      iconSize: [32, 32],
      iconAnchor: [20, 20]
    });

    const marker = L.marker([coords[0], coords[1]], { icon })
      .bindPopup(`<b>${title}</b><br>`)
      .on('click', function() {
        document.getElementById('infoTitle').textContent = title;
        document.getElementById('infoContent').innerHTML = description;
        document.getElementById('infoPanel').hidden = false;
      });

    return marker;
  }

  // Добавляем локации
  mapData.locations.forEach(location => {
    const marker = createMarker(
      location.coords,
      location.title,
      location.description,
      location.icon,
      location.type
    );
    
    if (location.type === 'quest') 
	{
      marker.addTo(questMarkers);
    } 
	else 
	{
      marker.addTo(regularMarkers);
    }
  });
  mapData.patrols.forEach(patrol => {
	  const marker = createMarker(
		patrol.coords,
		patrol.title,
		patrol.description,
		patrol.icon,
		patrol.type
	  );

	  if (patrolLayers[patrol.type]) 
	  {
		marker.addTo(patrolLayers[patrol.type]);
	  }
  });

	const regionLayerGroups = {}; 


	mapData.regions.forEach(region => {
	  const width = region.width || 200;
	  const height = region.height || 200;

	  const halfWidth = width / 2;
	  const halfHeight = height / 2;
	  const center = L.latLng(region.coords[1], region.coords[0]);

	  const bounds = [
		[center.lat - halfHeight, center.lng - halfWidth],
		[center.lat + halfHeight, center.lng + halfWidth]
	  ];

	  // Создаем подгруппу, если её ещё нет
	  if (!regionLayerGroups[region.type]) 
	  {
		regionLayerGroups[region.type] = L.layerGroup();
	  }

	  const group = regionLayerGroups[region.type];

	  let overlay;
	  if (region.icon) 
	  {
		overlay = L.imageOverlay(region.icon, bounds, { interactive: true }).addTo(group);
	  } 
	  else 
	  {
		overlay = L.rectangle(bounds, {
		  color: '#f00',
		  weight: 1,
		  fillOpacity: 0.2
		}).addTo(group);
	  }

	});






	// Управление видимостью маркеров через свитчбоксы
	document.getElementById('toggleAll').addEventListener('change', function() {
	  const isChecked = this.checked;
	  document.getElementById('toggleQuests').checked = isChecked;
	  document.getElementById('toggleRegular').checked = isChecked;
	  
	  if (isChecked) 
	  {
		map.addLayer(questMarkers);
		map.addLayer(regularMarkers);
	  } 
	  else 
	  {
		map.removeLayer(questMarkers);
		map.removeLayer(regularMarkers);
	  }
	});

	document.getElementById('toggleQuests').addEventListener('change', function() {
	  if (this.checked) 
	  {
		map.addLayer(questMarkers);
	  } 
	  else
	  {
		map.removeLayer(questMarkers);
	  }
	  updateAllToggle();
	});

	document.getElementById('toggleRegular').addEventListener('change', function() {
	  if (this.checked) 
	  {
		map.addLayer(regularMarkers);
	  }
	  else 
	  {
		map.removeLayer(regularMarkers);
	  }
	  updateAllToggle();
	});

	function updateAllToggle() {
	  const questChecked = document.getElementById('toggleQuests').checked;
	  const regularChecked = document.getElementById('toggleRegular').checked;
	  const allToggle = document.getElementById('toggleAll');
	  
	  if (questChecked && regularChecked) 
	  {
		allToggle.checked = true;
		allToggle.indeterminate = false;
	  } 
	  else if (!questChecked && !regularChecked)
	  {
		allToggle.checked = false;
		allToggle.indeterminate = false;
	  } 
	  else 
	  {
		allToggle.checked = false;
		allToggle.indeterminate = true;
	  }
	}

	const patrolTypes = ['collectors', 'bandits', 'orcs', 'abominations', 'fishmen'];

	// Подключаем чекбоксы патрулей по отдельности
	patrolTypes.forEach(type => {
	  const checkbox = document.getElementById(`togglePatrol_${type}`);
	  if (checkbox) 
	  {
		checkbox.addEventListener('change', function () {
		  if (this.checked) 
		  {
			map.addLayer(patrolLayers[type]);
		  } 
		  else 
		  {
			map.removeLayer(patrolLayers[type]);
		  }
		  updatePatrolAllToggle(); // обновляем состояние "все"
		});
	  }
	});
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// Подключаем общий переключатель "Все"
	const toggleAllPatrols = document.getElementById('togglePatrol_All');
	if (toggleAllPatrols) {
	  toggleAllPatrols.addEventListener('change', function () {
		const isChecked = this.checked;
		patrolTypes.forEach(type => {
		  const checkbox = document.getElementById(`togglePatrol_${type}`);
		  if (checkbox) 
		  {
			checkbox.checked = isChecked;
			if (isChecked) 
			{
			  map.addLayer(patrolLayers[type]);
			} 
			else 
			{
			  map.removeLayer(patrolLayers[type]);
			}
		  }
		});
	  });
	}

	// Обновление состояния переключателя "Все"
	function updatePatrolAllToggle() {
	  const allToggle = document.getElementById('togglePatrol_All');
	  const states = patrolTypes.map(type => {
		const checkbox = document.getElementById(`togglePatrol_${type}`);
		return checkbox?.checked;
	  });

	  if (states.every(Boolean)) 
	  {
		allToggle.checked = true;
		allToggle.indeterminate = false;
	  } 
	  else if (states.every(v => !v)) 
	  {
		allToggle.checked = false;
		allToggle.indeterminate = false;
	  } 
	  else 
	  {
		allToggle.checked = false;
		allToggle.indeterminate = true;
	  }
	}


	const regionTypes = Object.keys(regionLayerGroups);

	// Индивидуальные переключатели
	regionTypes.forEach(type => {
	  const checkbox = document.getElementById(`toggleRegion_${type}`);
	  if (checkbox) 
	  {
		checkbox.addEventListener('change', function () {
		  if (this.checked) 
		  {
			map.addLayer(regionLayerGroups[type]);
		  } 
		  else 
		  {
			map.removeLayer(regionLayerGroups[type]);
		  }
		  updateRegionAllToggle();
		});
	  }
	});

	// Общий переключатель
	const toggleAllRegions = document.getElementById('toggleRegion_All');
	if (toggleAllRegions) {
	  toggleAllRegions.addEventListener('change', function () {
		const isChecked = this.checked;
		regionTypes.forEach(type => {
		  const checkbox = document.getElementById(`toggleRegion_${type}`);
		  if (checkbox) 
		  {
			checkbox.checked = isChecked;
			if (isChecked) 
			{
			  map.addLayer(regionLayerGroups[type]);
			} 
			else 
			{
			  map.removeLayer(regionLayerGroups[type]);
			}
		  }
		});
	  });
	}

	// Обновление состояния "Все"
	function updateRegionAllToggle() {
	  const allToggle = document.getElementById('toggleRegion_All');
	  const states = regionTypes.map(type => {
		const checkbox = document.getElementById(`toggleRegion_${type}`);
		return checkbox?.checked;
	  });

	  if (states.every(Boolean)) 
	  {
		allToggle.checked = true;
		allToggle.indeterminate = false;
	  } 
	  else if (states.every(v => !v)) 
	  {
		allToggle.checked = false;
		allToggle.indeterminate = false;
	  } 
	  else 
	  {
		allToggle.checked = false;
		allToggle.indeterminate = true;
	  }
	}

	document.querySelectorAll('.region-info-button').forEach(button => {
	  button.addEventListener('click', function() {
		const regionType = this.getAttribute('data-region');
		const region = mapData.regions.find(r => r.type === regionType);
		if (region) 
		{
		  document.getElementById('infoTitle').textContent = region.title;
		  document.getElementById('infoContent').innerHTML = region.description;
		  document.getElementById('infoPanel').hidden = false;
		}
	  });
	});


  // Управление масштабом
  document.getElementById('zoomIn').addEventListener('click', () => map.zoomIn());
  document.getElementById('zoomOut').addEventListener('click', () => map.zoomOut());
  document.getElementById('resetZoom').addEventListener('click', () => map.fitBounds(bounds));
});