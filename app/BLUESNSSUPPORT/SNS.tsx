"use client";
import React from "react";
import styles from "./SNS.module.css";

const SNS: React.FC = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>BLUE SNS SUPPORT サービス内容</h1>
      <section className={styles.section}>
        <h2 className={styles.heading}>ロゴデザイン制作</h2>
        <p className={styles.text}>企業やサービスのブランドアイデンティティを象徴するロゴマークをデザインします。ブランドの価値やメッセージを視覚的に表現し、訴求力のあるロゴを提案します。初期アイデアのスケッチから細部のブラッシュアップまで、幅広く対応いたします。</p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>Webデザイン / UI・UXデザイン</h2>
        <p className={styles.text}>ユーザー視点を重視した直感的で美しいWebデザインを提供します。企業のブランドイメージを的確に反映し、Webサイトやアプリの価値を高めるデザインを構築します。最新のトレンドを取り入れ、効率的かつ高品質なデザイン制作を実現します。</p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>SNS投稿デザイン作成</h2>
        <p className={styles.text}>各種SNSプラットフォームに最適化された、視覚的に魅力的な投稿画像・バナーを制作します。コンセプトの立案からデザイン制作、複数パターンのバリエーション提案まで、スピーディかつ柔軟に対応します。</p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>デザインテンプレート作成</h2>
        <p className={styles.text}>プレゼン資料やマーケティング資料、SNS投稿用のテンプレートデザインを制作します。ブランドガイドラインに沿った統一感あるデザインで、社内外の業務効率化をサポートします。</p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>SNS運用サポート</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}><b>戦略立案：</b> SNSの目的やターゲットを明確にし、ペルソナ設計、投稿テーマ、投稿頻度の最適化まで一貫した戦略を提供。若い世代ならではの感性を活かし、トレンドを捉えた企画・発信を行います。</li>
          <li className={styles.listItem}><b>投稿作成：</b> 各SNSの特性を踏まえ、視覚的に魅力的で拡散力の高い画像・動画・リール・ショート動画などのコンテンツを制作。若者目線で「共感」や「いいね」を生むデザイン・キャプションを提案します。</li>
          <li className={styles.listItem}><b>アカウント運用：</b> 投稿スケジュール管理、コメント対応、フォロワーとのコミュニケーション、ストーリーズやキャンペーンの活用など、日々の運用を包括的にサポート。親しみやすく距離感の近いSNS運用を実現します。</li>
          <li className={styles.listItem}><b>効果分析・改善提案：</b> 投稿ごとのインプレッション数、エンゲージメント率、フォロワー数推移などを分析し、課題の抽出と改善策を提案。月次レポートで報告し、成果につながる運用を継続的に行います。</li>
        </ul>
      </section>
    </main>
  );
};

export default SNS;
