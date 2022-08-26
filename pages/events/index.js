import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

function AllEventsPage() {
    const events = getAllEvents();
    const router = useRouter();

    function findEventsHandler(year, month) {
        const fullDate = `/events/${year}/${month}`;
        router.push(fullDate);
    }

    return (
        <Fragment>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </Fragment>
    );
}

export default AllEventsPage;