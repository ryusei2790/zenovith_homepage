"use server";

import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from 'microcms-js-sdk';
import fs from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

// microCMSクライアントの初期化
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.MICROCMS_API_KEY || '',
});

/**
 * microCMSのWebhookを受け取るAPI Route
 * 記事が作成・更新・削除されたときに呼び出される
 */
export default async function WebHookNews(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Webhookの署名を検証
    const signature = req.headers['x-microcms-signature'];
    if (!signature || signature !== process.env.MICROCMS_WEBHOOK_SECRET) {
      return res.status(401).json({ message: 'Invalid signature' });
    }

    // 最新の記事を取得
    const response = await client.get({
      endpoint: 'html',
      queries: {
        fields: ['id', 'title', 'content', 'date', 'time', 'endTime', 'category'],
        orders: '-date',
        limit: 8,
      },
    });

    // news.jsonのパスを取得
    const jsonPath = path.join(process.cwd(), 'news.json');

    // 既存のJSONファイルを読み込み
    let existingData = {};
    try {
      existingData = JSON.parse(await fs.readFile(jsonPath, 'utf-8'));
    } catch {
      // ファイルがなければ空オブジェクト
      existingData = {};
    }

    // 新しいデータで更新
    const updatedData = {
      ...existingData,
      articles: response.contents,
    };

    // JSONファイルに保存
    await fs.writeFile(jsonPath, JSON.stringify(updatedData, null, 2), 'utf-8');

    return res.status(200).json({ message: 'News updated successfully' });
  } catch (error) {
    console.error('Error in webhook handler:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

