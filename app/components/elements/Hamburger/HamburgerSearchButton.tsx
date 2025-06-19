import React from 'react';
import styles from './HamburgerSearchButton.module.css';

const HamburgerSearchButton: React.FC = () => {
  return (
    <div className={styles.searchForm}>
      <form action="#" className={styles.searchForm6}>
          <label>
          <input
              type="text"
              className={styles.searchInput}
              placeholder="キーワードを入力"
              aria-label="キーワードを入力"
            />
          </label>
      </form>
    </div>
  );
};

export default HamburgerSearchButton; 