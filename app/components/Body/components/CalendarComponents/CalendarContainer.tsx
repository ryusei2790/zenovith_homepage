"use client"
import React, { useState } from 'react';
import BodyCalendar from './BodyCalendar';
import BodyNavCalendar from './BodyNavCalendar';
import useEvents from './useEvents';
// import { styleText } from 'util';
import styles from './CalendarContainer.module.css';

// import styles from './BodyEventCalendar.module.css';

// 日付やイベントの型は必要に応じて修正してください
// type EventType = any; // 例: { date: string; title: string; ... }
type DateType = string | null;

const CalendarContainer: React.FC = () => {
  const { events, loading, error } = useEvents();
  // その日のイベントの表示をデフォルトにする
  const [selectedDate, setSelectedDate] = useState<DateType>(null);

  const handleDateSelect = (date: DateType) => {
    console.log('選択された日付:', date);
    setSelectedDate(date);
  };

  if (loading) {
    return <div>読み込み中...</div>;
  }

  if (error) {
    return <div>エラーが発生しました: {error}</div>;
  }

  return (
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <BodyCalendar
            events={events}
            onDateSelect={handleDateSelect}
          />
        </div>
        <div className={styles.rightContainer}>
          <BodyNavCalendar
            selectedDate={selectedDate}
            events={events}
          />
        </div>
      </div>
  );
};

export default CalendarContainer; 