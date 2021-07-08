import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";

const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const searchHandler = ({ year, month }) => {
    router.push(`events/${year}/${month}`);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={searchHandler} />
      <EventList events={events} />
    </Fragment>
  );
};

export default AllEventsPage;
