import { TickerData } from '../hooks/useCoinData';
import { CoinCard } from './CoinCard';
import styles from '../page.module.css';

interface CoinGridProps {
  coinsData: Record<string, TickerData>;
  onCoinClick?: (code: string) => void;
}

export const CoinGrid = ({ coinsData, onCoinClick }: CoinGridProps) => {
  if (!coinsData || Object.keys(coinsData).length === 0) {
    return <div className={styles.noData}>표시할 데이터가 없습니다.</div>;
  }

  const sortedCoins = Object.entries(coinsData)
    .filter(([_, ticker]) => ticker && ticker.code)
    .sort((a, b) => {
      const aPrice = a[1].accTradePrice24h || 0;
      const bPrice = b[1].accTradePrice24h || 0;
      return bPrice - aPrice;
    });

  return (
    <div className={styles.coinGrid}>
      {sortedCoins.map(([code, ticker]) => (
        <CoinCard 
          key={code} 
          code={code} 
          ticker={ticker} 
          onClick={onCoinClick}
        />
      ))}
    </div>
  );
}; 