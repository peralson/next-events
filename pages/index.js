import React, { Fragment } from "react";
import { getFeaturedEvents } from "../dummy-data"
import EventList from "../components/events/EventList"

const HomePage = () => {
  const featuredEvents = getFeaturedEvents()

  return (
    <Fragment>
      <EventList events={featuredEvents} />
    </Fragment>
  ); 
};

export default HomePage;
