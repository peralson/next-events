import React from "react";
import EventItem from "./EventItem";
import styles from "./EventList.module.css";

const EventList = ({ events }) => {
  return (
    <ul className={styles.list}>
      {events.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          image={event.image}
          location={event.location}
          date={event.date}
        />
      ))}
    </ul>
  );
};

export default EventList;
