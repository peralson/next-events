import React, { useRef } from "react";
import styles from "./EventsSearch.module.css";

const EventsSearch = ({ onSearch }) => {
  const yearRef = useRef();
  const monthRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    onSearch({
      year: yearRef.current.value,
      month: monthRef.current.value,
    });
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor={"year"}>Year</label>
          <select id={"year"} ref={yearRef}>
            <option value={"2021"}>2021</option>
            <option value={"2022"}>2022</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor={"month"}>Month</label>
          <select id={"month"} ref={monthRef}>
            <option value={"1"}>January</option>
            <option value={"2"}>February</option>
            <option value={"3"}>March</option>
            <option value={"4"}>April</option>
            <option value={"5"}>May</option>
            <option value={"6"}>June</option>
            <option value={"7"}>July</option>
            <option value={"8"}>August</option>
            <option value={"9"}>September</option>
            <option value={"10"}>October</option>
            <option value={"11"}>November</option>
            <option value={"12"}>Deccember</option>
          </select>
        </div>
      </div>
      <button className={styles.btn}>Find</button>
    </form>
  );
};

export default EventsSearch;
