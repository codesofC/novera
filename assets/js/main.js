let menu=document.querySelector('.menu_icon'),
    menu_active=document.querySelector('.container_icon nav')
    cart=document.querySelector('.cart_icon'),
    cart_active=document.querySelector('.cart_container'),
    user=document.querySelector('.user_icon'),
    user_active=document.querySelector('.user_container'),
    container=document.querySelector('.container_icon'),
    cancel=document.querySelectorAll('.cancel'),
    search_icon=document.querySelector('.search_icon'),
    search=document.querySelector('.search');

menu.onclick=()=>{
    container.classList.add('active');
    menu_active.classList.add('active');
};
cart.onclick=()=>{
    container.classList.add('active');
    cart_active.classList.add('active');
};
user.onclick=()=>{
    container.classList.add('active');
    user_active.classList.add('active');
};
cancel.forEach(element => {
    element.onclick=()=>{
        container.classList.remove('active');
        menu_active.classList.remove('active');
        cart_active.classList.remove('active');
        user_active.classList.remove('active');
    }
});
search_icon.onclick=()=>{
    search.classList.toggle('active');
};

// Contact alert
document.getElementById('send_message').addEventListener('submit', function(event) {
    event.preventDefault(); 
    let isValid = true;

    document.getElementById('nameError').textContent = '';
    document.getElementById('messageError').textContent = '';

    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('nameError').textContent = 'Por favor, insira seu nome.';
        isValid = false;
    }


    const message = document.getElementById('message').value.trim();
    if (message === '') {
        document.getElementById('messageError').textContent = 'Por favor, insira sua mensagem.';
        isValid = false;
    }


    if (isValid) {
        alert('Formulário enviado com sucesso!');
    }
});

// Swiper home
var swiper = new Swiper(".home_container", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

