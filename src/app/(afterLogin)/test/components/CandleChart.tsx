import { CandleData } from '../hooks/useCandles';
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';

interface CandleChartProps {
  candles: CandleData[];
  isLoading: boolean;
  error: string | null;
}

export const CandleChart = ({ candles, isLoading, error }: CandleChartProps) => {
  if (isLoading) {
    return (
      <div className="h-full w-full flex items-center justify-center text-gray-500">
        로딩 중...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full w-full flex items-center justify-center text-red-500">
        에러: {error}
      </div>
    );
  }

  if (!candles.length) {
    return (
      <div className="h-full w-full flex items-center justify-center text-gray-500">
        데이터가 없습니다.
      </div>
    );
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('ko-KR');
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={candles}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
        <XAxis
          dataKey="candle_date_time_kst"
          tickFormatter={formatDate}
          tick={{ fontSize: 12 }}
          className="text-xs"
        />
        <YAxis
          domain={['dataMin', 'dataMax']}
          tickFormatter={formatPrice}
          tick={{ fontSize: 12 }}
          className="text-xs"
        />
        <Tooltip
          formatter={(value: number) => [formatPrice(value), '가격']}
          labelFormatter={formatDate}
          contentStyle={{
            backgroundColor: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '0.375rem',
            padding: '0.5rem'
          }}
        />
        <ReferenceLine
          y={candles[0]?.opening_price}
          stroke="#666"
          strokeDasharray="3 3"
          label={{ 
            value: '시가', 
            position: 'right',
            fill: '#666',
            fontSize: 12
          }}
        />
        <Line
          type="monotone"
          dataKey="trade_price"
          stroke="#2196F3"
          dot={false}
          name="현재가"
          strokeWidth={2}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}; 