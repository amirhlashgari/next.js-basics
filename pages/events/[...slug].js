import { Fragment } from "react";
import { useRouter } from "next/router";

import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/results-title/results-title";
import Button from "../../components/ui/button";

function FilteredEventsPage() {
    const router = useRouter();
    const filteredData = router.query.slug;

    if (!filteredData) {
        return <p className="center">Loading...</p>;
    }

    const filteredYearNum = +filteredData[0];
    const filteredMonthNum = +filteredData[1];

    if (isNaN(filteredYearNum) || isNaN(filteredMonthNum) || filteredMonthNum < 1 || filteredMonthNum > 12 || filteredYearNum < 2021 || filteredYearNum > 2030) {
        return <p>Invalid filter, Pleas adjust values</p>;
    }

    const filteredEvents = getFilteredEvents({ year: filteredYearNum, month: filteredMonthNum });
    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <Fragment>
                <p>No events found for your filter</p>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </Fragment>
        );
    }

    const date = new Date(filteredYearNum, filteredMonthNum - 1);

    return (
        <Fragment>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </Fragment>
    );
}

export default FilteredEventsPage;