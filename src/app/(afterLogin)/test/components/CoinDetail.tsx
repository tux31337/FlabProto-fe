import { useEffect, useState } from 'react';
import { TickerData } from '../hooks/useCoinData';
import { useCandles } from '../hooks/useCandles';
import { CandleChart } from './CandleChart';

interface CoinDetailProps {
  code: string;
  ticker: TickerData;
  onClose: () => void;
}

export const CoinDetail = ({ code, ticker, onClose }: CoinDetailProps) => {
  const [timeframe, setTimeframe] = useState<'1m' | '5m' | '15m' | '1h' | '4h' | '1d'>('1m');
  const { candles, isLoading, error } = useCandles(code, timeframe);

  const formatNumber = (num: number, digits: number = 0) => {
    if (num === undefined || num === null || isNaN(num)) return '0';
    return Number(num).toLocaleString('ko-KR', {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl h-[80vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">
            {code.split('-')[1]} ({code})
          </h2>
          <button 
            onClick={onClose}
            className="text-2xl hover:text-gray-600 transition-colors"
          >
            ×
          </button>
        </div>
        
        <div className="flex gap-2 p-4 border-b">
          {(['1m', '5m', '15m', '1h', '4h', '1d'] as const).map((tf) => (
            <button
              key={tf}
              className={`px-3 py-1 rounded ${
                timeframe === tf 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              } transition-colors`}
              onClick={() => setTimeframe(tf)}
            >
              {tf}
            </button>
          ))}
        </div>

        <div className="flex gap-4 p-4 border-b">
          <div className="flex-1">
            <span className="text-sm text-gray-500">현재가</span>
            <div className="text-xl font-bold">
              {formatNumber(ticker.tradePrice, 0)}원
            </div>
          </div>
          <div className="flex-1">
            <span className="text-sm text-gray-500">변동</span>
            <div className={`text-xl font-bold ${
              ticker.signedChangePrice > 0 
                ? 'text-red-500' 
                : ticker.signedChangePrice < 0 
                  ? 'text-blue-500' 
                  : 'text-gray-700'
            }`}>
              {ticker.signedChangePrice > 0 ? '+' : ''}{formatNumber(ticker.signedChangePrice, 0)}원
              ({ticker.signedChangePrice > 0 ? '+' : ''}{(ticker.signedChangeRate * 100).toFixed(2)}%)
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 min-h-0">
          <CandleChart candles={candles} isLoading={isLoading} error={error} />
        </div>

        <div className="grid grid-cols-2 gap-4 p-4 border-t">
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">시가</span>
            <span className="font-medium">{formatNumber(ticker.openingPrice, 0)}원</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">고가</span>
            <span className="font-medium">{formatNumber(ticker.highPrice, 0)}원</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">저가</span>
            <span className="font-medium">{formatNumber(ticker.lowPrice, 0)}원</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">거래량(24h)</span>
            <span className="font-medium">{formatNumber(ticker.accTradeVolume24h, 0)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">거래대금(24h)</span>
            <span className="font-medium">{formatNumber(ticker.accTradePrice24h / 1000000, 0)}백만원</span>
          </div>
        </div>
      </div>
    </div>
  );
}; 