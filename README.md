# Используемые техники:
css flexbox - гибкое расположение элементов - https://html5book.ru/css3-flexbox/
css grid - организация элементов в виде сетки - https://tuhub.ru/posts/css-grid-complete-guide
css псевдоэлементы - дополнительные возможности композиции стилей - http://htmlbook.ru/samcss/psevdoelementy
метология BEM - удобная нотация для именования классов - https://ru.bem.info/methodology/quick-start/
js promises - база, используются во всех библиотеках (т.ч. в firestore) - https://habr.com/ru/post/439746/
js firestore api - DBaaS от гугла - https://firebase.google.com
js манипуляции с DOM - Добавить, удалить класс, перебрать элементы и т.д. - https://tproger.ru/translations/dom-javascript/
git - система контроля версий - https://habr.com/ru/post/541258/
github - облачное хранилище для репозиторием - https://docs.github.com/en/github/getting-started-with-github
netlify - хостинг статичных сайтов - https://www.netlify.com/

# Файлы:
index.html - в нем лежит вся верстка
public - файлы стилей, скрипты, картиночки
public/script.js - функции, инициализирующие функции сайта
public/styles - папка со стилями
public/styles/index.css - главный файл со стилями, в который подключаются другие стили
# Разное 
  Нотация методологии BEM: .блок__элемент--модификатор.
  Js реализует следующий функционал:
- табы
- галлерея
- форма

## Табы

При нажатии на 1 из элементов из секции "услуги и цены"
будет показан соответствующий список услуг и цен.

## Галлерея

В секции "наши работы" при нажатии на 1 из фотографий она 
откроется в увеличенном виде, а так же затемнится фон, 
при нажатии на крестик она закроется.

## Форма

При отправке формы данные из неё сохраняются в firestore