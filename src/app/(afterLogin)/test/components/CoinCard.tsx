import { TickerData } from '../hooks/useCoinData';
import styles from '../page.module.css';

interface CoinCardProps {
  code: string;
  ticker: TickerData;
  onClick?: (code: string) => void;
}

export const CoinCard = ({ code, ticker, onClick }: CoinCardProps) => {
  const coinSymbol = code.split('-')[1] || code;
  const tradePrice = ticker.tradePrice || 0;
  const signedChangePrice = ticker.signedChangePrice || 0;
  const signedChangeRate = ticker.signedChangeRate || 0;
  const accTradeVolume24h = ticker.accTradeVolume24h || 0;
  const accTradePrice24h = ticker.accTradePrice24h || 0;
  
  const percentChange = (signedChangeRate * 100).toFixed(2);
  const isPositive = signedChangePrice > 0;
  const isNegative = signedChangePrice < 0;
  
  const priceChangeClass = isPositive ? styles.priceUp : isNegative ? styles.priceDown : styles.priceEven;

  const formatNumber = (num: number, digits: number = 0) => {
    if (num === undefined || num === null || isNaN(num)) return '0';
    return Number(num).toLocaleString('ko-KR', {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits
    });
  };
  
  return (
    <div 
      className={`${styles.coinCard} ${onClick ? styles.clickable : ''}`} 
      id={`card-${code}`} 
      data-code={code}
      onClick={() => onClick?.(code)}
    >
      <div className={styles.coinHeader}>
        <span className={styles.coinName}>{coinSymbol}</span>
        <span className={styles.coinCode}>{code}</span>
      </div>
      <div className={styles.coinPrice}>{formatNumber(tradePrice, 0)}원</div>
      <div className={`${styles.priceChange} ${priceChangeClass}`}>
        {isPositive ? '+' : ''}{formatNumber(signedChangePrice, 0)}원 
        ({isPositive ? '+' : ''}{percentChange}%)
      </div>
      <div className={styles.volumeInfo}>
        <span>거래량: {formatNumber(accTradeVolume24h, 0)}</span>
        <span>거래대금: {formatNumber(accTradePrice24h / 1000000, 0)}백만</span>
      </div>
    </div>
  );
}; 