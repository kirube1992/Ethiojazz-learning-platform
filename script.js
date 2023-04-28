const hamburguer = document.getElementById('nav-btn');
const navMenu = document.getElementById('mobile-menu');
const seeMoreBtn = document.getElementById('see-more');
const closeMenu = document.querySelectorAll('.close-mobile-menu');
const speakerContainer = document.getElementById('speakers-container');
const speakers = [
  {
    name: 'Muluatu Astatike',
    description: 'Barkely graduate',
    talkAbout:
      'How to integrate Ethiopian Melody with jazz concepts ',
    img: './assets/img/mulatu.jpg',
  },
  {
    name: 'Teferi Asefa',
    description: 'University of Holand',
    talkAbout:
      'Description of ethiopian traditional rhythm',
    img: './assets/img/teferi.jpg',
  },
  {
    name: 'Henok Temsgan',
    description: 'barkely universtiy of jazz',
    talkAbout: 'How to Apply Jazz Harmany concept with ethiopian music',
    img: './assets/img/henok.jpg',
  },
  {
    name: 'jorga mesfin',
    description: 'A.A university music school',
    talkAbout: 'How we use The flute instrument of ethiopia in Ethio jazz ',
    img: './assets/img/jorga.jpg',
  },
  {
    name: 'Samuel yerga',
    description: 'A.A university music school',
    talkAbout: 'The art of improvisation in side ethiopian scales',
    img: './assets/img/samuel.jpg',
  },
  {
    name: 'girum gizaw',
    description: 'seminary music school',
    talkAbout: 'Etio jazz with fusion jazz concept',
    img: './assets/img/girum.jpg',
  },
];

let speakersInner = '';

function renderSpeakers(num) {
  for (let i = 0; i < num; i += 1) {
    speakersInner += `
        <article class="speaker-card">
            <img class="speaker-img" src="${speakers[i].img}" alt="${`${speakers[i].name} image`}">
            <div class="speaker-info">
                <h3 class="speaker-name lato">${speakers[i].name}</h3>
                <h4 class="speaker-description lato">${speakers[i].description}</h4>
                <div class="divisor-grey"></div>
                <p class="speaker-thematic roboto">"${speakers[i].talkAbout}"</p>
            </div>
        </article>
    `;
  }
  speakerContainer.innerHTML = speakersInner;
  speakersInner = '';
  return speakersInner;
}

seeMoreBtn.addEventListener('click', () => {
  if (seeMoreBtn.innerText === 'MORE') {
    seeMoreBtn.innerText = 'LESS';
    renderSpeakers(6);
  } else {
    seeMoreBtn.innerText = 'MORE';
    renderSpeakers(2);
  }
});

hamburguer.addEventListener('click', () => {
  navMenu.classList.add('show');
});

Array.from(closeMenu).forEach((button) => {
  button.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
});

if (window.innerWidth >= 768) {
  renderSpeakers(6);
} else {
  renderSpeakers(2);
}

let desktop = false;

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && !desktop) {
    renderSpeakers(6);
    desktop = true;
  }
});
