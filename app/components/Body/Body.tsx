"use client"
import React, { useEffect, useRef } from 'react';
import styles from './Body.module.css';
import BodyEventCalendar from './components/BodyEventCalendar';
import BodyHead from './components/BodyHead';
import NavCards from './components/NavCard';
import BodyAbout from './components/BodyAbout';
import BodyNews from './components/BodyNews';
import BodyCTA from './components/BodyCTA';
import useScrollHamburgerMenu from "../elements/hooks/useScrollHamburgerMenu";
import HamburgerNavMenu from '../elements/Hamburger/HamburgerMenu';
import HamburgerSearchButton from '../elements/Hamburger/HamburgerSearchButton';

const images = [//ゆくゆくはどこかで投稿した画像ここで取得したpropsで渡すようにする
  '/images/sliding-image1.png',
  '/images/sliding-image2.png',
  '/images/sliding-image3.png',
  '/images/sliding-image4.png',
  '/images/sliding-image5.png',
  '/images/sliding-image6.png',
];

const Body: React.FC = () => {
  // カレンダー
  // const [selectedDate, setSelectedDate] = useState(null);
  // const [events, setEvents] = useState([
  //   { date: '2024-03-15', time: '10:00', title: '経営者モーニングセミナー' },
  //   { date: '2024-03-20', time: '14:00', title: '企業倫理研修会' },
  //   { date: '2024-03-25', time: '15:30', title: '支部会議' }
  // ]);

  // const handleDateSelect = (date) => {
  //   setSelectedDate(date);
  // };

  // ハンバーガーメニュー
  const [showMenu, open, setOpen] = useScrollHamburgerMenu();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, setOpen]);

  return (
    <>
      {showMenu && (
        <div className={styles.hamburgerMenu} ref={menuRef}>
          <button
            className={styles.hamburgerIcon}
            onClick={() => setOpen(!open)}
            aria-label="メニューを開く"
          >
            <span />
            <span />
            <span />
          </button>
          {open && (
            <div className={styles.menuContent}>
              <div className={styles.HamburgersearchButton}>
                <HamburgerSearchButton />
              </div>
              <div className={styles.HamburgerNavMenu}>
                <HamburgerNavMenu />
              </div>
            </div>
          )}
        </div>
      )}
      <main className={styles.main}>
        <section className={styles.hero} id="home">
          <div className={styles.container}>
            <BodyHead images={images} />
          </div>
        </section>

        <section className={styles.calendarSection} id="calendar">
          <div className={styles.container}>
            <div className={styles.calendarRow}>
              <BodyEventCalendar />
            </div>
          </div>
        </section>

        <section className={styles.navCards} id="services">
          <NavCards />
        </section>

        <section className={styles.about} id="about">
          <div className={styles.container}>
            <BodyAbout />
          </div>
        </section>

        <section className={styles.news} id="news">
          <BodyNews />
        </section>

        <section className={styles.cta} id="contact">
          <BodyCTA />
        </section>
      </main>
    </>
  );
};

export default Body; 