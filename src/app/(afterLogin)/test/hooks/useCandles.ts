import { useState, useEffect } from 'react';

export interface CandleData {
  market: string;
  candle_date_time_utc: string;
  candle_date_time_kst: string;
  opening_price: number;
  high_price: number;
  low_price: number;
  trade_price: number;
  timestamp: number;
  candle_acc_trade_price: number;
  candle_acc_trade_volume: number;
  unit: number;
}

export const useCandles = (market: string, timeframe: string) => {
  const [candles, setCandles] = useState<CandleData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCandles = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // timeframe을 업비트 API 형식으로 변환
        const unit = timeframe === '1m' ? 1 : 
                    timeframe === '5m' ? 5 :
                    timeframe === '15m' ? 15 :
                    timeframe === '1h' ? 60 :
                    timeframe === '4h' ? 240 : 1440;

        const count = 200; // 최근 200개의 캔들 데이터 요청
        const url = `https://api.upbit.com/v1/candles/minutes/${unit}?market=${market}&count=${count}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('캔들 데이터를 가져오는데 실패했습니다.');
        }

        const data = await response.json();
        setCandles(data.reverse()); // 시간순으로 정렬
      } catch (err) {
        setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
      } finally {
        setIsLoading(false);
      }
    };

    if (market) {
      fetchCandles();
    }
  }, [market, timeframe]);

  return { candles, isLoading, error };
}; 