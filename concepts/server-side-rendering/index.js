import { getFilteredEvents } from "../../utils/api-helper";
import ResultsTitle from "../../components/results-title/results-title";
import EventList from "../../components/events/event-list";

//this function has dynamic rendering inside itself
//IMPORTANT: read documented text file in important folders about req and res object

export async function getServerSideProps(context) {
    const { params, req, res } = context;

    const filteredData = params.slug;

    if (!filteredData) {
        return <p className="center">Loading...</p>;
    }

    const filteredYearNum = +filteredData[0];
    const filteredMonthNum = +filteredData[1];

    if (isNaN(filteredYearNum) || isNaN(filteredMonthNum) || filteredMonthNum < 1 || filteredMonthNum > 12 || filteredYearNum < 2021 || filteredYearNum > 2030) {
        return {
            notFound: true,
            redirect: { destination: '/error-page' },
            //or if we dont want to redirect and show error on current page:
            props: {
                hasError: true
            }
        };
    }

    const filteredEvents = await getFilteredEvents({ year: filteredYearNum, month: filteredMonthNum });
    return {
        props: {
            events: filteredData,
            date: { year: filteredYearNum, month: filteredMonthNum }
        }
    };

};


export default function FilteredEventsPage(props) {

    if (props.hasError) {
        return <p>Invalid filter, Pleas adjust values</p>;
    }

    const filteredEvents = props.events;
    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <div>
                <p>No events found for your filter</p>
                <div className="center">
                    <button link="/events">Show All Events</button>
                </div>
            </div>
        );
    }

    const date = new Date(props.date.year, props.date.month - 1);

    return (
        <div>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </div>
    );
}
