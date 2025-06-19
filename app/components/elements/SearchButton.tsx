"use client"
import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import styles from './SearchButton.module.css';

const SearchButton: React.FC = () => {
  const [keywords, setKeywords] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  // 入力値が変わるたびにページ内テキストから一致ワードを抽出
  useEffect(() => {
    const bodyText = document.body.innerText || '';
    // 正規表現の記述ミスを修正
    const words = bodyText.match(/[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}a-zA-Z0-9]+/gu) || [];
    // 入力値が空なら何も表示しない
    if (!inputValue) {
      setKeywords([]);
      return;
    }
    // 入力値を含むワードだけ抽出（大文字小文字区別なし）
    const filtered = Array.from(new Set(words)).filter(word =>
      word.toLowerCase().includes(inputValue.toLowerCase())
    ).slice(0, 10); // 最大10件
    setKeywords(filtered);
  }, [inputValue]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // 例：ボタン押下時に値を取得して使う
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`検索ワード: ${inputValue}`);
    // ここでinputValueを使って何か処理ができる
  };

  return (
    <div className={styles.searchForm}>
      <form action="#" className={styles.searchForm6} onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="キーワードを入力"
            aria-label="キーワードを入力"
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
      </form>
      {/* 入力がある場合のみ検索結果を表示 */}
      {inputValue && keywords.length > 0 && (
        <ul>
          {keywords.map((word, idx) => (
            <li key={idx}>{word}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchButton; 