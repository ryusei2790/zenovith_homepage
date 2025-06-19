"use server"
import { createClient } from 'microcms-js-sdk';
import fs from 'fs/promises';
import path from 'path';

// microCMS クライアントを初期化
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.MICROCMS_API_KEY || '',
});

/**
 * microCMSから記事を取得してnews.jsonに保存する関数
 */
export async function fetchAndSaveArticles(): Promise<void> {
  try {
    // microCMSからデータ取得
    const response = await client.get({
      endpoint: 'html',
      queries: {
        fields: ['id', 'title', 'content', 'date', 'time', 'endTime', 'category'],
        orders: '-date',
        limit: 8,
      },
    });

    // 保存するJSONのパスを指定
    const filePath = path.join(process.cwd(), 'news.json');

    // 保存するデータ構造
    const data = {
      articles: response.contents,
      updatedAt: new Date().toISOString(), // 更新日時付き
    };

    // ファイルへ保存
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');

    console.log('✅ news.json updated successfully');
  } catch (error) {
    console.error('❌ Error saving articles:', error);
    throw error;
  }
}
