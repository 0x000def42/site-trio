function initTabs(){
  for( const tab of document.getElementsByClassName('service__tab')){
    const card = tab.children[0]
    tab.onclick = () => {
      for( elem of document.getElementsByClassName('service-card--active')){
        elem.classList.remove('service-card--active')
      }
      card.classList.add('service-card--active')
      const targetContentId = tab.dataset['target']
      for( elem of document.getElementsByClassName('price-list--visible')){
        elem.classList.remove('price-list--visible')
      }

      document.getElementById(targetContentId).children[0].classList.add('price-list--visible')
    }
  }
}

function initGallery(){

  for( const image of document.getElementsByClassName('works__gallery-image')){
    image.children[0].onclick = (event) => {
      event.stopPropagation()
      image.classList.add('works__gallery-image--selected')
    }
  }

  document.onclick = () => {
    const selectedImages = document.getElementsByClassName("works__gallery-image--selected");
    while (selectedImages.length) {
      selectedImages[0].classList.remove("works__gallery-image--selected");
    }
  }
}

function initForm(){
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
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  const form = document.getElementById('form')

  form.onsubmit = function(event){
    event.preventDefault();
    let formData = new FormData(this);
    formData = Object.fromEntries(formData)

    db.collection("registrations").add({
      email: formData.email,
      name: formData.name,
      message: formData.message
    })
    .then((docRef) => {
      alert("Спасибо за оставленную заявку, мы свяжемся с вами в ближайшее время!")
      this.reset();
    })
    .catch((error) => {
        alert("Что-то пошло не так :( ")
        console.error(error)
    })

  }
}