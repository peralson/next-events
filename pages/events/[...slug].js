import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/ErrorAlert";

const FilteredEventsPage = () => {
  const router = useRouter();

  const filters = router.query.slug;

  if (!filters) {
    return <p className={"center"}>Loading...</p>;
  }

  const year = +filters[0];
  const month = +filters[1];

  if (isNaN(year) || isNaN(month) || month < 1 || month > 12) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filters. Please adjust the values.</p>
        </ErrorAlert>
        <div className={"center"}>
          <Button link={"/events"}>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year,
    month,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the selected filters.</p>
        </ErrorAlert>
        <div className={"center"}>
          <Button link={"/events"}>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </Fragment>
  );
};

export default FilteredEventsPage;
