console.log("Fichier Script.js chargé");

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

fetch('header.html')
  .then(response => response.text())
  .then(data => {
    const headerContainer = document.querySelector('#header-container');
    headerContainer.innerHTML = data;
  });
  fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    const headerContainer = document.querySelector('#footer-container');
    headerContainer.innerHTML = data;
  });


function afficherChanteur(chanteurId) {
    const chanteur = chanteurs[chanteurId];
    console.log("Chanteur ID:", chanteurId);
    
    if (chanteur) {
        document.getElementById('nom-chanteur').innerText = chanteur.nom;
        document.getElementById('description-chanteur').innerText = chanteur.description;
        document.getElementById('image-chanteur').src = chanteur.image;
        document.getElementById('lieu').innerText = chanteur.lieu;
        document.getElementById('date').innerText = chanteur.date;
    } else {
        console.error(`Chanteur avec l'ID ${chanteurId} introuvable.`);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const chanteurId = getParameterByName("id");
    afficherChanteur(chanteurId);
});



const chanteurs = {
    
    1: {
        nom: 'Chris Brown',
        description: `Chris Brown est un artiste américain de R&B et de pop connu pour sa voix unique et ses performances électriques sur scène. 
        Depuis ses débuts en 2005, il a sorti de nombreux hits, notamment "Run It!", "Kiss Kiss" et "Forever".
        En 2022, il entame sa tournée "Under the Influence", qui promet d'être une expérience inoubliable pour les fans de musique en live. 
        Cette tournée est l'occasion pour les fans de voir Chris Brown en action, avec une performance scénique énergique et un répertoire de chansons qui ont captivé les fans pendant des années. 
        Les billets pour cette tournée sont très demandés, alors ne manquez pas cette occasion de vivre une soirée musicale inoubliable avec Chris Brown.
        `,
        image: 'Images/Chris_brown.png',
        date:`date : 24 juin 2023`,
        lieu:`lieu : Bercy`
        
    },
    2: {
        nom: 'Drake',
        description: `Drake est un rappeur, chanteur, auteur-compositeur et acteur canadien qui a conquis le monde avec sa musique. 
        Depuis ses débuts en 2006, il a sorti de nombreux hits, notamment "Best I Ever Had", "Hotline Bling" et "God's Plan". 
        En 2022, il entame sa tournée "Certified Lover Boy", qui promet d'être une expérience unique pour les fans de musique. 
        Cette tournée est l'occasion pour les fans de voir Drake en action, avec une performance scénique électrisante et un répertoire de chansons qui ont captivé les fans pendant des années.
        Les billets pour cette tournée sont très demandés, alors ne manquez pas cette occasion de vivre une soirée musicale inoubliable avec Drake.`,
        image: `Images/Drake.png`,
        date:`date : 30 janvier 2023`,
        lieu:`lieu : Bercy`
    },
    3: {
        nom: 'The weeknd',
        description: `The Weeknd est un artiste canadien de R&B et de pop qui a connu un grand succès depuis le début de sa carrière en 2011. 
        Avec des hits tels que "Can't Feel My Face", "Starboy" et "Blinding Lights", il a captivé les fans de musique du monde entier.
        En 2022, il se lance dans sa tournée "After Hours", qui promet d'être une expérience unique en son genre pour les fans de musique en live. 
        Cette tournée est l'occasion de voir The Weeknd sur scène, avec une performance époustouflante et un répertoire de chansons qui ont marqué toute une génération. 
        Les billets pour cette tournée sont très prisés, alors ne manquez pas cette occasion de vivre une soirée musicale inoubliable avec The Weeknd.`,
        image: 'Images/The weeknd.png',
        date:`date : 30 novembre 2022`,
        lieu:`lieu : Bercy`
    },
    4: {
        nom: 'Beyonce',
        description: `Beyoncé est une artiste américaine de renommée mondiale, connue pour sa voix puissante et son incroyable talent sur scène.
        Depuis le début de sa carrière, elle a sorti de nombreux tubes, notamment "Crazy in Love", "Single Ladies" et "Formation". 
        En 2022, elle se lance dans sa tournée "The Queen Bey Experience", une occasion unique pour les fans de la voir sur scène et de découvrir son répertoire légendaire en live. 
        Cette tournée promet d'être un spectacle inoubliable, avec des performances époustouflantes et une production scénique à couper le souffle. Les billets pour cette tournée sont très demandés,
        alors ne manquez pas l'opportunité de vivre une soirée magique en compagnie de la reine de la pop.`,
        image: 'Images/Beyonce.png',
        date:`date : 10 mars 2023`,
        lieu:`lieu : Stade de france`
    },
    5: {
        nom: 'Rihanna',
        description: `Rihanna est une artiste de renommée mondiale, connue pour ses talents de chanteuse, de compositrice et d'actrice. 
        Depuis son premier album en 2005, elle a connu un succès énorme avec des hits tels que "Umbrella", "Disturbia" et "Diamonds". 
        En 2022, Rihanna entame sa tournée mondiale "The Diamond Experience", où elle va présenter ses plus grands succès aux fans du monde entier. 
        Les concerts de Rihanna sont connus pour leur énergie et leur spectacle spectaculaire, avec des chorégraphies impressionnantes et des effets spéciaux époustouflants. 
        Les fans peuvent s'attendre à une expérience musicale inoubliable, avec des chansons qui ont dominé les charts du monde entier et ont inspiré des générations de fans. 
        Ne manquez pas cette occasion de voir Rihanna sur scène et de vivre une soirée musicale qui restera gravée dans les mémoires.`,
        image: 'Images/Rihanna.png',
        date:`date : 12 decembre 2022`,
        lieu:`lieu : Bercy`
    },
    6: {
        nom: 'Ariana Grande',
        description: `Ariana Grande est une artiste pop américaine mondialement connue pour sa voix puissante et sa présence sur scène captivante. 
        Avec des hits comme "Thank U, Next", "7 Rings" et "Side to Side", elle a conquis le cœur de millions de fans dans le monde entier. 
        Sa tournée "Sweetener World Tour" en 2019 a été un énorme succès, avec des performances impressionnantes et un spectacle de lumière époustouflant.
        En 2022, elle est de retour avec sa nouvelle tournée "Positions Tour", qui promet d'être tout aussi incroyable que les précédentes. 
        Les fans peuvent s'attendre à une soirée remplie de ses chansons les plus populaires, ainsi que de nouvelles surprises et expériences inoubliables. 
        Les billets pour cette tournée sont très demandés, alors assurez-vous de ne pas manquer cette occasion de voir Ariana Grande en direct sur scène.`,
        image: 'Images/Ariana_grande.png',
        date:`date : 23 octobre 2022`,
        lieu:`lieu : Parc des princes`
    },
    7: {
        nom: 'Black pink',
        description: `Blackpink est un groupe sud-coréen de K-pop formé en 2016, composé de quatre membres : Jisoo, Jennie, Rosé et Lisa. 
        Avec leur musique entraînante, leurs chorégraphies impressionnantes et leur style unique, Blackpink est rapidement devenu l'un des groupes de K-pop les plus populaires au monde.
        Leur single "DDU-DU DDU-DU" a été le premier clip vidéo de K-pop à atteindre un milliard de vues sur YouTube. 
        Le groupe a également fait des tournées à guichets fermés dans le monde entier, notamment en Amérique du Nord, en Europe et en Asie. 
        Si vous êtes fan de musique pop entraînante et de performances incroyables, ne manquez pas la chance de voir Blackpink sur scène lors de leur prochaine tournée.`,
        image: 'Images/Black_pink.png',
        date:`date : 14 novembre 2022`,
        lieu:`lieu : Bercy`
    }, 
    8: {
        nom: 'BTS',
        description: `BTS, également connu sous le nom de Bangtan Boys, est un groupe de K-pop sud-coréen qui a rapidement gagné en popularité dans le monde entier depuis ses débuts en 2013.
        Le groupe est composé de sept membres talentueux: Jin, Suga, J-Hope, RM, Jimin, V et Jungkook. BTS a sorti de nombreux hits, notamment "Dynamite", "Boy With Luv" et "Blood Sweat & Tears", et a remporté de nombreux prix pour leur musique et leurs performances scéniques.
        Leur tournée mondiale "Map of the Soul" est un événement incontournable pour les fans de K-pop et offre une expérience unique en son genre avec des chorégraphies captivantes, des effets spéciaux époustouflants et des performances vocales incroyables.
        Si vous êtes fan de BTS, ne manquez pas l'occasion de voir le groupe en live lors de leur prochaine tournée.`,
        image: 'Images/Bts.png',
        date:`date : 24 juin 2022`,
        lieu:`lieu : Bercy`
    },
    9: {
        nom: 'Aespa',
        description: `Aespa est un groupe de K-pop formé en 2020 par la SM Entertainment, une agence sud-coréenne de divertissement.
        Le groupe est composé de quatre membres: Karina, Giselle, Winter et Ningning. 
        Depuis leurs débuts, ils ont captivé les fans du monde entier avec leurs performances incroyables et leurs chansons entraînantes, notamment "Black Mamba" et "Next Level". 
        Leur style unique mélange musique électronique et R&B, créant une expérience sonore captivante. Les fans peuvent s'attendre à des performances scéniques dynamiques et des chorégraphies impeccables lors des concerts d'Aespa. 
        Ne manquez pas l'occasion de voir l'un des groupes de K-pop les plus populaires du moment en concert.`,
        image: 'Images/Aespa.png',
        date:`date : 17 juillet 2023`,
        lieu:`lieu : Bercy`
    },
    10: {
        nom: 'Ninho',
        description: `Ninho est un artiste français de rap originaire de la banlieue parisienne. 
        Depuis ses débuts en 2015, il s'est rapidement imposé sur la scène du rap français avec des tubes tels que "Mamacita", "Lettre à une femme" ou encore "Goutte d'eau". 
        Avec son style unique et son flow impressionnant, il a conquis le coeur de nombreux fans de musique urbaine en France et à l'étranger. 
        En 2022, il est en tournée dans toute la France pour présenter son dernier album, "Destin", qui a été très bien accueilli par le public et la critique. 
        Cette tournée est l'occasion pour les fans de voir Ninho en live et de vibrer sur ses morceaux emblématiques. 
        Ne manquez pas cette occasion de découvrir l'univers de Ninho en concert !`,
        image: 'Images/Ninho.png',
        date:`date : 15 septembre 2023`,
        lieu:`lieu : Bercy`
    },
    11: {
        nom: 'Booba',
        description: `Booba est un rappeur français originaire de Boulogne-Billancourt. 
        Il a commencé sa carrière dans les années 90 en faisant partie du groupe Lunatic, avant de se lancer en solo en 2002. 
        Depuis, il a sorti plusieurs albums à succès, tels que "Temps mort", "Panthéon" et "Trône". 
        Ses textes incisifs, son flow rapide et sa présence scénique ont fait de lui l'un des artistes les plus influents du rap français. 
        En 2022, Booba est en tournée pour promouvoir son dernier album "ULTRA", qui a été très bien accueilli par ses fans. 
        Cette tournée est l'occasion pour les fans de découvrir en live les titres de cet album ainsi que les classiques de Booba qui ont marqué le rap français. 
        Les billets pour cette tournée sont très demandés, alors ne manquez pas cette occasion de voir Booba sur scène.`,
        image: 'Images/Booba.png',
        date:`date : 6 novembre 2023`,
        lieu:`lieu : Bercy`
    },
    12: {
        nom: 'SCH',
        description: `Sch est un rappeur français connu pour ses textes sombres et introspectifs ainsi que pour ses performances énergiques sur scène. 
        Depuis son premier album en 2016, il a enchaîné les succès avec des morceaux tels que "A7", "Gomorra" et "Mannschaft". 
        En 2022, il se prépare à partir en tournée pour présenter son dernier album "JVLIVS II" au public. 
        Cette tournée promet d'être une expérience unique pour les fans de rap, avec des moments de pure énergie et des moments plus intimes où Sch dévoile son univers sombre et complexe. 
        Les billets pour cette tournée sont très demandés, alors ne manquez pas cette occasion de voir Sch en concert.`,
        image: 'Images/Sch.png',
        date:`date : 1 decembre 2023`,
        lieu:`lieu : Vélodome`
    },
    13: {
        nom: 'Ronisia',
        description: `Ronisia est une artiste française originaire de Grigny. 
        Elle s'est fait connaître du grand public en 2020 avec son titre "Je suis Africaine", qui a connu un succès retentissant. 
        Depuis, elle enchaîne les projets et collabore avec d'autres artistes de renom, tels que Ninho ou encore Dadju. 
        Avec son style unique, mélange de R&B, de pop et de musique africaine, Ronisia est en train de se faire un nom dans l'industrie musicale française. 
        Sa voix puissante et son énergie sur scène ne laissent personne indifférent et promettent de belles surprises pour les fans dans les années à venir.`,
        image: 'Images/Ronisia.png',
        date:`date : 3 avril 2023`,
        lieu:`La cigale`
    },
    14: {
        nom: 'Aya',
        description: `Aya Nakamura est une artiste française d'origine malienne connue pour son style musical unique, qui mélange des influences africaines avec des sonorités urbaines modernes. 
        Depuis son premier succès en 2018 avec le hit "Djadja", elle a continué de fasciner les fans avec des chansons telles que "Pookie", "Copines" et "Jolie Nana". 
        En plus de son talent pour la musique, Aya est également une icône de la mode, inspirant de nombreuses personnes avec son style distinctif et sa confiance en elle-même. 
        Elle a remporté plusieurs récompenses pour sa musique, y compris un NRJ Music Award pour la "Chanson française de l'année" en 2018. 
        Aya continue d'être une force majeure dans l'industrie de la musique française et internationale, avec une base de fans dévoués qui attendent avec impatience chaque nouvelle sortie.`,
        image: 'Images/Aya.png',
        date:`date : 20 septembre 2023`,
        lieu:`lieu : Bercy`
    },
    15: {
        nom: 'Eva Queen',
        description: `Eva Queen est une artiste française connue pour son style unique et son talent musical. 
        Elle a commencé sa carrière en 2018 avec la sortie de son premier single "Mood", qui est rapidement devenu un succès auprès des fans de musique urbaine. 
        Depuis lors, elle a sorti de nombreux hits, notamment "On Fleek", "Alibi" et "Kitoko". 
        Elle est également connue pour ses performances scéniques énergiques et captivantes. En 2022, Eva Queen a annoncé sa tournée "Queendom", qui promet d'être une expérience musicale exceptionnelle pour ses fans. 
        Les billets pour sa tournée se vendent rapidement, alors ne manquez pas l'opportunité de voir Eva Queen en direct et de profiter de sa musique entraînante et de sa présence sur scène incomparable.`,
        image: 'Images/Eva.png',
        date:`date : 15 mai 2023`,
        lieu:`lieu : Bercy`
    },
};


window.onload = function() {
    // Affiche les champs de carte de crédit au chargement initial
    let cardFields = document.getElementsByClassName("card_txt");
    for (let i = 0; i < cardFields.length; i++) {
        cardFields[i].style.display = "block";
    }
    // Masque les champs de carte de crédit au chargement initial
  let paypalFields = document.getElementsByClassName("paypal-txt");
  let virementBancaireFields = document.getElementsByClassName("banque_txt");
  for (let i = 0; i < virementBancaireFields.length; i++) {
    virementBancaireFields[i].style.display = "none";
  }
  for (let i = 0; i < paypalFields.length; i++) 
  paypalFields[i].style.display = "none";
 
  let sections = document.querySelectorAll(".infos_container, .notif_container, .paiement_container, .booking_container");
  for (let i = 1; i < sections.length; i++) {
    sections[i].style.display = "none";
  }

    afficherReservations();
};
function updatePaymentFields() {
  let selectedPayment = document.getElementById("type-paiement").value;

  let cardFields = document.getElementsByClassName("card_txt");
  let paypalFields = document.getElementsByClassName("paypal-txt");
  let virementBancaireFields = document.getElementsByClassName("banque_txt");

  // Masque tous les champs
  for (let i = 0; i < cardFields.length; i++) {
    cardFields[i].style.display = "none";
  }
  for (let i = 0; i < paypalFields.length; i++) {
    paypalFields[i].style.display = "none";
  }
  for (let i = 0; i < virementBancaireFields.length; i++) {
    virementBancaireFields[i].style.display = "none";
  }

  // Affiche les champs correspondant au mode de paiement sélectionné
  if (selectedPayment === "carte-credit") {
    for (let i = 0; i < cardFields.length; i++) {
      cardFields[i].style.display = "block";
    }
  } else if (selectedPayment === "paypal") {
    for (let i = 0; i < paypalFields.length; i++) {
      paypalFields[i].style.display = "block";
    }
  } else if (selectedPayment === "virement-bancaire") {
    for (let i = 0; i < virementBancaireFields.length; i++) {
      virementBancaireFields[i].style.display = "block";
    }
  }
}
  
  // Fonction pour gérer le changement de section en fonction du lien sélectionné
  function changeSection(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    
    // Récupère la classe de la section correspondante au lien sélectionné
    let target = event.target.getAttribute("href").substr(1);
    
    // Masque toutes les sections
    let sections = document.querySelectorAll(".infos_container, .notif_container, .paiement_container, .booking_container");
    sections.forEach(section => {
      section.style.display = "none";
    });
    
    // Affiche la section correspondante au lien sélectionné
    let selectedSections = document.getElementsByClassName(target);
    for (let i = 0; i < selectedSections.length; i++) {
      selectedSections[i].style.display = "block";
    }
  }
  
  // Ajoute un écouteur d'événement sur tous les liens de la sidebar
  let sidebarLinks = document.querySelectorAll(".sidebar a");
  sidebarLinks.forEach(link => {
    link.addEventListener("click", changeSection);
  });
  

   let reservations = [
    { id: 1, date: "2023-24-06", client: "John Doe" },
    { id: 2, date: "2023-05-05", client: "Jane Doe" },
    { id: 3, date: "2023-30-10", client: "Jonathan Dupont" },
  ];

  // Fonction pour afficher les réservations dans la liste
  function afficherReservations() {
    let reservationList = document.getElementById("reservation-list");

    // Vide la liste existante
    reservationList.innerHTML = "";

    // Parcourt les réservations et ajoute chaque réservation à la liste
    reservations.forEach(function(reservation) {
      let listItem = document.createElement("li");
      listItem.textContent = "Réservation #" + reservation.id + " - Date: " + reservation.date + " - Client: " + reservation.client;
      reservationList.appendChild(listItem);
    });
  }