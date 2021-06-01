var upcomingEventsButton = document.getElementsByClassName("upcoming-events")[0];
upcomingEventsButton.addEventListener("click", goToEventsPage);

function goToEventsPage() {
    location.href = "../navbar-pages/events.html";
}