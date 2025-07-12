"use client";
import React, { useEffect, useState} from 'react';
import styles from './BodyAbout.module.css';
import Index from './AboutUs/Index'
import AboutContent from './AboutUs/AboutContent'

const BodyAbout: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const overlayTimer = setTimeout(() => {
      setShowOverlay(true);
    }, 2000);

    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 3000);

    return () => {
      clearTimeout(overlayTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <div className={styles.container}>
      <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.backgroundVideo}
        > 
          <source src="/videos/souta.mp4" type="video/mp4" />
        </video>

        <div
        className={styles.overlay}
        style={{
          opacity: showOverlay ? 0.5 : 0,
        transition: 'opacity 1s ease-in-out',
        }}
        />

        <div className={styles.Zeno}>
          <h1>Zeno</h1>
        </div>
        {showText && (
          <div className={styles.description} style={{ opacity: showText ? 1 : 0, transition: 'opacity 1s ease-in' }}>
            <div className={styles.aboutTitle}>
              <div className={styles.zenovth}>
                <Index h2="Zenovith" vision="常識を越え、幸せを加速させる会社" mission="真摯かつ謙虚であり続ける" descriptionService="AIを活用したWeb制作を主としたシステム開発と新規事業への取り組み" contentsIT="システム開発・AIを効率的に活用したWeb制作を主に、DXを効果的に進めるシステムサービスを提供" descriptionNewProject="新規プロジェクト･日本の物流問題に1つの終止符を打ちうる革新的なサービスを進行中" contentsNewProject="「2024年問題」と呼ばれる物流業界における最大規模の問題に、新たな風を吹き込む革新的なソリューションを提供するプロジェクトを現在進行中。今後時間を経るに従い、より深刻化していくこの問題を、我が社の画期的なソリューションを社会に組み込むことで大きな変革をもたらします。配達員の不足や、コスト効率化、また環境負荷が少なく弾力的でオープンな持続可能型物流網を構築するこのプロジェクトは、日本の物流業界を大きく変えるものと確信しております。" button="view more・・・" link="/AboutUs" />
              </div>
            </div>
            <div className={styles.aboutContent}>
              <div className={styles.aboutLinks} >
                <AboutContent name="About Zenovith"/>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default BodyAbout;

{/*ロゴデザイン制作
企業やサービスのブランドアイデンティティを象徴するロゴマークをデザインします。ブランドの価値やメッセージを視覚的に表現し、訴求力のあるロゴを提案します。初期アイデアのスケッチから細部のブラッシュアップまで、幅広く対応いたします。

Webデザイン / UI・UXデザイン
ユーザー視点を重視した直感的で美しいWebデザインを提供します。企業のブランドイメージを的確に反映し、Webサイトやアプリの価値を高めるデザインを構築します。最新のトレンドを取り入れ、効率的かつ高品質なデザイン制作を実現します。

SNS投稿デザイン作成
各種SNSプラットフォームに最適化された、視覚的に魅力的な投稿画像・バナーを制作します。コンセプトの立案からデザイン制作、複数パターンのバリエーション提案まで、スピーディかつ柔軟に対応します。

デザインテンプレート作成
プレゼン資料やマーケティング資料、SNS投稿用のテンプレートデザインを制作します。ブランドガイドラインに沿った統一感あるデザインで、社内外の業務効率化をサポートします。
 • 戦略立案
SNSの目的やターゲットを明確にし、ペルソナ設計、投稿テーマ、投稿頻度の最適化まで一貫した戦略を提供。若い世代ならではの感性を活かし、トレンドを捉えた企画・発信を行います。
 • 投稿作成
各SNSの特性を踏まえ、視覚的に魅力的で拡散力の高い画像・動画・リール・ショート動画などのコンテンツを制作。若者目線で「共感」や「いいね」を生むデザイン・キャプションを提案します。
 • アカウント運用
投稿スケジュール管理、コメント対応、フォロワーとのコミュニケーション、ストーリーズやキャンペーンの活用など、日々の運用を包括的にサポート。親しみやすく距離感の近いSNS運用を実現します。
 • 効果分析・改善提案
投稿ごとのインプレッション数、エンゲージメント率、フォロワー数推移などを分析し、課題の抽出と改善策を提案。月次レポートで報告し、成果につながる運用を継続的に行います。*/}