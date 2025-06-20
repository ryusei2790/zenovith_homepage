"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BodyNews.module.css';

// ニュース記事とスピーカーの型定義
type Speaker = {
  image: string;
  name: string;
  position: string;
  company: string;
};

type Article = {
  id: string | number;
  url: string;
  image: string;
  title: string;
  date: string;
  formattedDate: string;
  formattedTime: string;
  formattedEndTime: string;
  location: string;
  speakers?: Speaker[];
};

const BodyNews: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/WebHookNews');
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setArticles(data);
      } catch (err: any) {
        console.error('ニュース記事の取得に失敗しました:', err);
        setError('ニュース記事の読み込み中にエラーが発生しました。');
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (isLoading) {
    return (
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>NEWS</h2>
        <div className={styles.loading}>読み込み中...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>NEWS</h2>
        <div className={styles.error}>{error}</div>
      </div>
    );
  }

  if (!articles || articles.length === 0) {
    return (
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>NEWS</h2>
        <div className={styles.noNews}>ニュース記事がありません。</div>
        <Link href="#">
          <span>こちらから見てください</span>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>NEWS</h2>
      <div className={styles.newsGrid}>
        {articles.map((article) => (
          <article key={article.id} className={styles.newsItem}>
            <div className={styles.card}>
              <Link href={article.url} className={styles.newsLink}>
                <Image
                  src={article.image}
                  alt={article.title}
                  width={300}
                  height={200}
                  className={styles.newsImage}
                />
              </Link>
            </div>
            <div className={styles.newsText}>
              <div className={styles.newsContent}>
                <time dateTime={article.date} className={styles.newsDate}>
                  {article.formattedDate}
                </time>
                <h3 className={styles.newsTitle}>
                  <Link href={article.url}>
                    {article.title}
                  </Link>
                </h3>
                <div className={styles.newsDetails}>
                  <p className={styles.newsTime}>
                    {article.formattedTime} - {article.formattedEndTime}
                  </p>
                  <p className={styles.newsLocation}>{article.location}</p>
                </div>
                <div className={styles.speakers}>
                  {(article.speakers || []).map((speaker, index) => (
                    <div key={index} className={styles.speaker}>
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        width={40}
                        height={40}
                        className={styles.speakerImage}
                      />
                      <div className={styles.speakerInfo}>
                        <p className={styles.speakerName}>{speaker.name}</p>
                        <p className={styles.speakerPosition}>
                          {speaker.position} / {speaker.company}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
        <Link href="/news">
          <span>もっと見たい方はこちら・・・</span>
        </Link>
      </div>
    </div>
  );
};

export default BodyNews; 