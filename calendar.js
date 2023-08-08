document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    // Tableau d'événements
    let eventsData = [
        {
            title: 'Chris brown',
            start: '2023-08-10',
            end: '2023-08-10'
        },
        {
            title: 'Drake',
            start: '2023-08-15',
            end: '2023-08-15'
        },
        // Ajoutez plus d'événements ici...
    ];

    let calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: eventsData, // Utilisez le tableau d'événements ici
        eventDidMount: function(info) {
            var eventElement = info.el;
            var eventData = info.event.extendedProps;
            
            if (eventData.reserved) {
                // Cet événement est réservé, ne faites rien au survol
                return;
            }
            
            eventElement.addEventListener('mouseover', function() {
                // Ajoutez ici le code pour l'effet de survol sur les dates non réservées
                eventElement.style.backgroundColor = 'lightgray';
            });
            
            eventElement.addEventListener('mouseout', function() {
                // Ajoutez ici le code pour réinitialiser l'apparence lorsque la souris quitte la date
                eventElement.style.backgroundColor = '';
            });
            
            eventElement.addEventListener('click', function() {
                // Ajoutez ici le code pour l'action lors du clic sur une date non réservée
                // Par exemple, changer la couleur de fond lorsque l'événement est cliqué
                eventElement.style.backgroundColor = 'blue';
            });
        }
    });

    calendar.render();
});
