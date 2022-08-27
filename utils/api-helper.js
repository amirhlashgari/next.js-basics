export async function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;

    let filteredEvents = fetch("someUrl").filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });

    return filteredEvents;
}