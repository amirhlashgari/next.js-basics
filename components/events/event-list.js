import EventItem from "./event-item";

function EventList(props) {
    const { items } = props

    return (
        <ul>
            {items.map(event => (
                <EventItem
                    key={event.id}
                    id={event.id}
                    location={event.location}
                    title={event.title}
                    image={event.image}
                    date={event.date}
                />
            ))}
        </ul>
    );
}

export default EventList;