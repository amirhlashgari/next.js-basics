import { useRouter } from "next/router";

import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";

function FilteredEventsPage() {
    const router = useRouter();
    const [filteredYear, filteredMonth] = router.query.slug;
    const filteredYearNum = +filteredYear;
    const filteredMonthNum = +filteredMonth;

    if (!filteredData) {
        return <p className="center">Loading...</p>;
    }

    if (isNaN(filteredYearNum) || isNaN(filteredMonthNum) || filteredMonthNum < 1 || filteredMonthNum > 12 || filteredYearNum < 2021 || filteredYearNum > 2030) {
        return <p>Invalid filter, Pleas adjust values</p>;
    }

    const filteredEvents = getFilteredEvents({ year: filteredYearNum, month: filteredMonthNum });
    if (!filteredEvents || filteredEvents.length === 0) {
        return <p>No events found for your filter</p>;
    }

    return (
        <div>
            <EventList items={filteredEvents} />
        </div>
    );
}

export default FilteredEventsPage;