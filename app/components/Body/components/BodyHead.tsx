"use client"
import React, { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import styles from './BodyHead.module.css';
import ServiceIcon from './ServiceIcon';
// import Link from 'next/link'

type BodyHeadProps = {
  images: string[];
};



// const images = [
//   '/images/sliding-image1.png',
//   '/images/sliding-image2.png',
//   '/images/sliding-image3.png',
//   '/images/sliding-image4.png',
//   '/images/sliding-image5.png',
//   '/images/sliding-image6.png',
// ];


const BodyHead: React.FC<BodyHeadProps> = ({ images }) => {
  const [index, setIndex] = useState<number>(0);
  const total = images.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // スライドを更新
  const update = useCallback(() => {
    setIndex((index + 1) % total);
  }, [index, total]);

  // ボタンイベント
  const handlePrev = () => setIndex((index - 1 + total) % total);
  const handleNext = () => setIndex((index + 1) % total);

  // 自動スライド
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      update();
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [update]);

  // 表示する3枚の画像のインデックスを計算
  const getVisibleImages = (): number[] => {
    const prev = (index - 1 + total) % total;
    const next = (index + 1) % total;
    return [prev, index, next];
  };

  return (
    <div className={styles.heroMain}>
      <div className={styles.container}>
        <div className={styles.slider}>
          <div className={styles.slideContainer}>
            {getVisibleImages().map((imageIndex, i) => (
              <div
                key={imageIndex}
                className={`${styles.slide} ${i === 1 ? styles.center : styles.side}`}
                style={{
                  transform: i === 1
                    ? 'translateX(0)'
                    : i === 0
                      ? 'translateX(150%)'
                      : 'translateX(-150%)',
                }}
              >
                <Image
                  className={styles.img}
                  src={images[imageIndex]}
                  alt={`Slide ${imageIndex + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={i === 1}
                />
              </div>
            ))}
          </div>
          <button className={styles.prev} onClick={handlePrev}>‹</button>
          <button className={styles.next} onClick={handleNext}>›</button>
        </div>
      </div>
      <div className={styles.back}>
        <div className={styles.serviceIcons}>
          <ServiceIcon image="/images/AboutUs.png" title="AboutUs" link="/AboutUs"  />
          <ServiceIcon image="/images/OpenSpace.png" title="OpenSpace!" link="/OpenSpace"  />
        </div>
      </div>
    </div>
  );
};

export default BodyHead; 