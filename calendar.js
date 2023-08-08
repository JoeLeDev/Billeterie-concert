document.addEventListener('DOMContentLoaded', function() {
    let calendarEl = document.getElementById('calendar');
    let artistSelect = document.getElementById('artistSelect');
    let ticketSelect = document.getElementById('ticketSelect');


    let reservedDates = [];

    let calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: reservedDates.map(date => ({
            title: date.artist,
            start: date.date,
            backgroundColor: 'red',
            borderColor: 'red'
        })),
        selectable: true,
        select: function(info) {
            let currentDate = new Date();
            if (info.start > currentDate) {
                artistSelect.style.display = 'block';
                artistSelect.dataset.selectedDate = info.startStr; // Stocker la date sélectionnée dans l'attribut data-selected-date
                calendar.unselect();
            } else {
                alert("Vous ne pouvez pas réserver une date antérieure à la date actuelle.");
            }
        },
        

        eventClick: function(info) {
            if (confirm("Êtes-vous sûr de vouloir annuler votre réservation pour cette date ?")) {
                let selectedDate = info.event.startStr;
                let index = reservedDates.findIndex(date => date.date === selectedDate);
                if (index !== -1) {
                    reservedDates.splice(index, 1);
                    info.event.remove();
                }
            }
        },
    });
    artistSelect.addEventListener('change', function() {
        selectedArtist = artistSelect.value; // Stocker l'artiste sélectionné
        ticketSelect.style.display = 'block'; // Afficher la liste de billets
        artistSelect.style.display = 'none';
    });
    
    ticketSelect.addEventListener('change', function() {
        let selectedTicket = ticketSelect.value;
        let selectedDate = artistSelect.dataset.selectedDate;
        
        if (selectedArtist && selectedTicket) {
            if (confirm("Êtes-vous sûr de vouloir réserver cette date pour " + selectedArtist + " avec un billet " + selectedTicket + " ?")) {
                reservedDates.push({ date: selectedDate, artist: selectedArtist, ticket: selectedTicket });
                calendar.addEvent({
                    title: selectedArtist,
                    start: selectedDate,
                    backgroundColor: '#2c3e50',
                    borderColor: 'black'
                });
            }
        }
        
        ticketSelect.style.display = 'none';
        ticketSelect.selectedIndex = 0;
    });
    
    calendar.render();
});