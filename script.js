

/* Dados dos cards */
const cards = [
    { year: '2020', img: 'https://cdn.discordapp.com/attachments/1175920811169820804/1515831175539851284/image.png?ex=6a306f4b&is=6a2f1dcb&hm=33c9f475cbf996de1e4fff16061ae0e7c670f6130bfce91d350b88a44b1ad7b6&' },
    { year: '2026', img: 'https://cdn.discordapp.com/attachments/1175920811169820804/1515831652008591440/image.png?ex=6a306fbc&is=6a2f1e3c&hm=29656f7d021bcea4bbae7abfde583dcfb9ec9de87a47c525b145c0d8d6e464fd&' },
    { year: '2020', img: 'https://cdn.discordapp.com/attachments/1175920811169820804/1515831175539851284/image.png?ex=6a306f4b&is=6a2f1dcb&hm=33c9f475cbf996de1e4fff16061ae0e7c670f6130bfce91d350b88a44b1ad7b6&' },
    { year: '2026', img: 'https://cdn.discordapp.com/attachments/1175920811169820804/1515831652008591440/image.png?ex=6a306fbc&is=6a2f1e3c&hm=29656f7d021bcea4bbae7abfde583dcfb9ec9de87a47c525b145c0d8d6e464fd&' },
    { year: '2020', img: 'https://cdn.discordapp.com/attachments/1175920811169820804/1515831175539851284/image.png?ex=6a306f4b&is=6a2f1dcb&hm=33c9f475cbf996de1e4fff16061ae0e7c670f6130bfce91d350b88a44b1ad7b6&' },
    { year: '999+', img: '' },
    { year: '2020', img: 'https://cdn.discordapp.com/attachments/1175920811169820804/1515831175539851284/image.png?ex=6a306f4b&is=6a2f1dcb&hm=33c9f475cbf996de1e4fff16061ae0e7c670f6130bfce91d350b88a44b1ad7b6&' },
    { year: '2026', img: 'https://cdn.discordapp.com/attachments/1175920811169820804/1515831652008591440/image.png?ex=6a306fbc&is=6a2f1e3c&hm=29656f7d021bcea4bbae7abfde583dcfb9ec9de87a47c525b145c0d8d6e464fd&' },
    { year: '2020', img: 'https://cdn.discordapp.com/attachments/1175920811169820804/1515831175539851284/image.png?ex=6a306f4b&is=6a2f1dcb&hm=33c9f475cbf996de1e4fff16061ae0e7c670f6130bfce91d350b88a44b1ad7b6&' },
    { year: '2026', img: 'https://cdn.discordapp.com/attachments/1175920811169820804/1515831652008591440/image.png?ex=6a306fbc&is=6a2f1e3c&hm=29656f7d021bcea4bbae7abfde583dcfb9ec9de87a47c525b145c0d8d6e464fd&' },
    { year: '2020', img: 'https://cdn.discordapp.com/attachments/1175920811169820804/1515831175539851284/image.png?ex=6a306f4b&is=6a2f1dcb&hm=33c9f475cbf996de1e4fff16061ae0e7c670f6130bfce91d350b88a44b1ad7b6&' },
    { year: '999+', img: '' },
];

/* Gerar os cards */
document.addEventListener("DOMContentLoaded", () => {
    const containerLista = document.querySelector(".projects-grid");
    containerLista.innerHTML = "";

    cards.forEach(card => {
        const article = document.createElement("article");

        article.classList.add("card");

        article.innerHTML = `
        <p>${card.year}</p>

        <div class="card-image">
        <img src="${card.img || './img/not-found.png'}" alt="">
        </div>
    `;

        containerLista.appendChild(article);
    });

    /* Scroll Reveal */
    ScrollReveal().reveal('.card', {
        distance: '50px',
        origin: 'bottom',
        interval: 100,
        duration: 200,
        easing: 'ease-out',
    });

    ScrollReveal().reveal('header', {
        distance: '20px',
        origin: 'bottom',
        duration: 500,
        easing: 'ease-out',
    });

    ScrollReveal().reveal('.logo', {
        distance: '20px',
        origin: 'left',
        duration: 600
    });

    ScrollReveal().reveal('.nav-links li', {
        distance: '20px',
        origin: 'top',
        interval: 100,
        duration: 500
    });

    ScrollReveal().reveal('section h2', {
        distance: '30px',
        origin: 'left',
        duration: 700
    });

    ScrollReveal().reveal('#about p', {
        distance: '40px',
        origin: 'bottom',
        duration: 800
    });

    ScrollReveal().reveal('.socials a', {
        distance: '30px',
        origin: 'bottom',
        interval: 150,
        duration: 600
    });
});
