"use server"

import fs from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';
import { createClient } from 'microcms-js-sdk';

// microCMS クライアントを初期化
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.MICROCMS_API_KEY || '',
});

/**
 * microCMSから記事を取得してnews.jsonに保存する関数
 */
// export async function fetchAndSaveArticles(): Promise<void> {
//   try {
//     // microCMSからデータ取得
//     const response = await client.get({
//       endpoint: 'html',
//       queries: {
//         fields: ['id', 'title', 'content', 'date', 'time', 'endTime', 'category'],
//         orders: '-date',
//         limit: 8,
//       },
//     });

//     // 保存するJSONのパスを指定
//     const filePath = path.join(process.cwd(), 'news.json');

//     // 保存するデータ構造
//     const data = {
//       articles: response.contents,
//       updatedAt: new Date().toISOString(), // 更新日時付き
//     };

//     // ファイルへ保存
//     await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');

//     console.log('✅ news.json updated successfully');
//   } catch (error) {
//     console.error('❌ Error saving articles:', error);
//     throw error;
//   }
// }

// GETリクエストでmicroCMSから記事を取得し、news.jsonに保存し、最大8件の記事データを返すAPI Route
export async function GET() {
  const filePath = path.join(process.cwd(), 'news.json');
  
  // microCMSの設定が存在する場合のみmicroCMSを使用
  const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
  const apiKey = process.env.MICROCMS_API_KEY;
  
  if (serviceDomain && apiKey) {
    try {
      // microCMSから記事を取得
      const response = await client.get({
        endpoint: 'blogs',
        queries: {
          fields: ['id', 'title', 'content', 'date', 'time', 'endTime', 'category'],
          orders: '-date',
          limit: 8,
        },
      });

      // 保存するデータ構造
      const data = {
        articles: response.contents,
        updatedAt: new Date().toISOString(),
      };

      // news.jsonに保存
      await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');

      // 最大8件だけ返す
      const articles = Array.isArray(data.articles) ? data.articles.slice(0, 8) : [];
      return NextResponse.json(articles);
    } catch (error) {
      console.error('microCMS取得エラー:', error);
      // microCMSが失敗した場合はローカルのnews.jsonを返す
    }
  }
  
  // microCMSの設定がない場合、またはmicroCMSが失敗した場合はローカルのnews.jsonを返す
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const json = JSON.parse(data);
    const articles = Array.isArray(json.articles) ? json.articles.slice(0, 8) : [];
    return NextResponse.json(articles);
  } catch {
    return NextResponse.json({ error: 'ニュースデータの取得に失敗しました' }, { status: 500 });
  }
}