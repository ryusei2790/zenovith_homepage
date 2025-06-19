"use client"
import React from 'react';
import styles from './BodyEventCalendar.module.css';
import CalendarContainer from './CalendarConponents/CalendarContainer';

const BodyEventCalendar: React.FC = () => (
  <div className={styles.Container}>
    <div className={styles.calendarMain}>
      <CalendarContainer />
    </div>
  </div>
);

export default BodyEventCalendar;