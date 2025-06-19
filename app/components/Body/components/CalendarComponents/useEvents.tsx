import { useState, useEffect } from 'react';

// イベントの型を定義（必要に応じて修正してください）
type EventType = {
  // 例: id: number; title: string; date: string; など
  [key: string]: any;
};

const useEvents = () => {
  const [events, setEvents] = useState<EventType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // ここで実際のAPIエンドポイントに置き換えてください
        const response = await fetch('/api/events');
        if (!response.ok) {
          throw new Error('イベントの取得に失敗しました');
        }
        const data = await response.json();
        setEvents(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return { events, loading, error };
};

export default useEvents; 