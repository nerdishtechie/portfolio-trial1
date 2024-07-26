const text = "Welcome to<br>my Portfolio!<br>This is<br>Latheesh Shaik.";
let index = 0;

function type() {
    if (index < text.length) {
        if (text.charAt(index) === '<') {
            const tagEnd = text.indexOf('>', index);
            document.getElementById('typing').innerHTML += text.substring(index, tagEnd + 1);
            index = tagEnd + 1;
        } else {
            document.getElementById('typing').innerHTML += text.charAt(index);
            index++;
        }
        setTimeout(type, 100);
    }
}

window.onload = type;

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('home-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function storeUserDetails() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    var userDetails = {
        name: name,
        email: email,
        message: message
    };
    
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    
    displayUserDetails();
}

function displayUserDetails() {
    var userDetails = localStorage.getItem('userDetails');
    if (userDetails) {
        userDetails = JSON.parse(userDetails);
        document.getElementById('userDetails').innerHTML = "Name: " + userDetails.name + "<br>Email: " + userDetails.email + "<br>Message: " + userDetails.message;
    }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all the required fields.');
        event.preventDefault(); 
    } else {
        
        alert('Thank you for your message!');
    }
});


window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('backToTop');
    if (window.scrollY > 200) { 
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});


document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


function toggleMenu() {
    const menu = document.querySelector('.menu');
    const body = document.body;
    menu.classList.toggle('active');
    body.classList.toggle('menu-active'); 
}


document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function() {
        const menu = document.querySelector('.menu');
        const body = document.body;
        menu.classList.remove('active');
        body.classList.remove('menu-active');
    });
});
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function(event) {
       
        const menu = document.querySelector('.menu');
        const body = document.body;
        menu.classList.remove('active');
        body.classList.remove('menu-active');

      
        if (this.getAttribute('href') === '#contact') {
            document.querySelector('#contact h1').style.marginTop = '60px'; 
        } else {
            document.querySelector('#contact h1').style.marginTop = '0'; 
        }
    });
});
function adjustCardLayout() {
    const container = document.querySelector('.projects-container');
    const cards = document.querySelectorAll('.card');
    const containerWidth = container.offsetWidth;
    const cardWidth = cards[0].offsetWidth;
    const cardsPerRow = Math.floor(containerWidth / cardWidth);

    if (window.innerWidth < 400) {
        
        cards.forEach(card => {
            card.style.flex = '1 1 calc(50% - 20px)';
        });
    } else {
        
        cards.forEach(card => {
            card.style.flex = '1 1 5%';
        });
    }
}

window.addEventListener('resize', adjustCardLayout);
window.addEventListener('load', adjustCardLayout);

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const navHeight = document.querySelector('nav').offsetHeight;
    
    window.scrollTo({
        top: section.offsetTop - navHeight,
        behavior: 'smooth'
    });
}

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

