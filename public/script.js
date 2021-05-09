function initTabs(){ // Функция инициализации табов
  for( const tab of document.getElementsByClassName('service__tab')){ // Перебираем все элементы с классом service__tab
    const card = tab.children[0] // Для каждого элемента вытаскием первый вложенный тег
    tab.onclick = () => { // Вешаем обработчик событий, реагирующий на нажатие на элемент service_tab
      for( elem of document.getElementsByClassName('service-card--active')){ // В случае нажатия, удаляем класс service-card--active у всех, у кого он есть
        elem.classList.remove('service-card--active')
      }
      card.classList.add('service-card--active') // А элементу, по которому нажали - добавляем
      const targetContentId = tab.dataset['target'] // Вытаскием значение из атрибута data-target элемента, на который нажали 
      for( elem of document.getElementsByClassName('price-list--visible')){ // У всех элементов с классом price-list--visible убираем его
        elem.classList.remove('price-list--visible')
      }

      document.getElementById(targetContentId).children[0].classList.add('price-list--visible')
      // Вытаскием элемент по id -> обращаемся к первому потомку -> добавляем класс price-list--visible
    }
  }
}

function initGallery(){

  // Перебираем все элементы с классом works__gallery-image
  for( const image of document.getElementsByClassName('works__gallery-image')){
    image.children[0].onclick = (event) => { // На первого потомка вешаем слушатель
      event.stopPropagation() // Останавливаем выполнение текущего события (что бы оно дальше по элементам до body не дошло)
      image.classList.add('works__gallery-image--selected') // Добавляем класс works__gallery-image--selected
    }
  }

  document.onclick = () => { // При нажатии вообще в любое место на документе (кроме мест, где выполняется event.stopPropagation())
    const selectedImages = document.getElementsByClassName("works__gallery-image--selected");
    while (selectedImages.length) { /* remove срабатывает не всегда корректно, поэтому до тех пор, пока
      элементы с классом works__gallery-image--selected есть - будем удалять этот класс у них*/
      selectedImages[0].classList.remove("works__gallery-image--selected");
    }
  }
}

function initForm(){
  // Это firebase конфиг, взятый из документации
  var firebaseConfig = {
    apiKey: "AIzaSyCsxF4yZPMg2BbFXuwsODwq-hByW49QCzs",
    authDomain: "trio-2fcaa.firebaseapp.com",
    projectId: "trio-2fcaa",
    storageBucket: "trio-2fcaa.appspot.com",
    messagingSenderId: "1086937508512",
    appId: "1:1086937508512:web:e5d1a87d6b8edaa39837c5",
    measurementId: "G-W5TZW2R0DN"
  };
  // Initialize Firebase
  // По документации - нужно сначала инициализировать ядро firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore(); // А только потом инициализировать доп. сервисы в т.ч. firestore

  const form = document.getElementById('form') // Ищем форму по id

  form.onsubmit = function(event){ // Перехватыем сабмит
    event.preventDefault(); // И обрываем обработку события (отправку формы и перезагрузку страницы)
    let formData = new FormData(this); // this - объект формы, формируем formData из неё
    formData = Object.fromEntries(formData) // А дальше конвертируем объект FormData в обычный объект

    db.collection("registrations").add({ // Обращаемся к коллекции registrations в firestore и выполняем метод add
      email: formData.email, // Передаем поля
      name: formData.name,
      message: formData.message
    }) // add возвращает промис, который нужно обработать
    .then((docRef) => { // В случае успешного сохранения - выводим алерт и сбрасываем форму
      alert("Спасибо за оставленную заявку, мы свяжемся с вами в ближайшее время!")
      this.reset();
    })
    .catch((error) => {
        alert("Что-то пошло не так :( ")
        console.error(error)
    })

  }
}