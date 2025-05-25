'use client';

import { useEffect, useState } from 'react';
import { useWebSocket } from './hooks/useWebSocket';
import { useCoinData } from './hooks/useCoinData';
import { CoinCard } from './components/CoinCard';
import { CoinGrid } from './components/CoinGrid';
import { CoinDetail } from './components/CoinDetail';
import styles from './page.module.css';

export default function CryptoWebSocketTest() {
  const [activeTab, setActiveTab] = useState('all-coins');
  const [selectedCoin, setSelectedCoin] = useState<{ code: string; ticker: any } | null>(null);
  const { isConnected, logs, stompClientRef, connect, disconnect, log } = useWebSocket();
  const {
    lastUpdate,
    allCoinsData,
    customCoinsData,
    singleCoinData,
    selectedCoins,
    selectedSingleCoin,
    setSelectedCoins,
    setSelectedSingleCoin,
    subscribeAll,
    unsubscribeAll,
    subscribeCustom,
    unsubscribeCustom,
    subscribeSingle,
    unsubscribeSingle
  } = useCoinData(stompClientRef, log);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const handleCoinClick = (code: string) => {
    const ticker = allCoinsData[code] || customCoinsData[code] || singleCoinData;
    if (ticker) {
      setSelectedCoin({ code, ticker });
    }
  };

  useEffect(() => {
    return () => {
      if (stompClientRef.current) {
        disconnect();
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>실시간 암호화폐 시세 (웹소켓 테스트)</h1>
        <div className={styles.connectionStatus}>
          <span className={`${styles.statusIndicator} ${isConnected ? styles.connected : ''}`} />
          <span>{isConnected ? '연결됨' : '연결 안됨'}</span>
        </div>
      </header>

      <div className={styles.subscriptionPanel}>
        <div className={styles.subscriptionHeading}>
          <h2>연결 관리</h2>
          <div>
            <button 
              className={styles.connectBtn} 
              onClick={connect}
              disabled={isConnected}
            >
              WebSocket 연결
            </button>
            <button 
              className={styles.disconnectBtn}
              onClick={disconnect}
              disabled={!isConnected}
            >
              연결 끊기
            </button>
          </div>
        </div>
      </div>

      <div className={styles.tabs}>
        <div 
          className={`${styles.tab} ${activeTab === 'all-coins' ? styles.active : ''}`}
          onClick={() => setActiveTab('all-coins')}
        >
          모든 코인 구독
        </div>
        <div 
          className={`${styles.tab} ${activeTab === 'custom-subscription' ? styles.active : ''}`}
          onClick={() => setActiveTab('custom-subscription')}
        >
          맞춤 구독
        </div>
        <div 
          className={`${styles.tab} ${activeTab === 'single-coin' ? styles.active : ''}`}
          onClick={() => setActiveTab('single-coin')}
        >
          단일 코인 구독
        </div>
      </div>

      {activeTab === 'all-coins' && (
        <div className={styles.tabContent}>
          <div className={styles.subscriptionPanel}>
            <h3>모든 코인 구독 (1번 방식)</h3>
            <p>모든 코인의 실시간 시세를 구독합니다. <code>/topic/tickers</code> 주제를 구독합니다.</p>
            <div className={styles.subscriptionActions}>
              <button 
                className={styles.subscribeBtn}
                onClick={subscribeAll}
                disabled={!isConnected}
              >
                전체 코인 구독
              </button>
              <button 
                className={styles.subscribeBtn}
                onClick={unsubscribeAll}
                disabled={!isConnected}
              >
                구독 해제
              </button>
            </div>
          </div>
          <CoinGrid coinsData={allCoinsData} onCoinClick={handleCoinClick} />
        </div>
      )}

      {activeTab === 'custom-subscription' && (
        <div className={styles.tabContent}>
          <div className={styles.subscriptionPanel}>
            <h3>맞춤 구독 (2번 방식)</h3>
            <p>선택한 코인만 구독합니다. <code>/app/subscribe/custom</code> 메시지를 보내고 <code>/user/topic/tickers</code> 주제를 구독합니다.</p>
            <div className={styles.coinSelections}>
              {['KRW-BTC', 'KRW-ETH', 'KRW-XRP', 'KRW-SOL', 'KRW-ADA'].map((code) => (
                <div key={code} className={styles.coinCheckbox}>
                  <input
                    type="checkbox"
                    id={code}
                    value={code}
                    checked={selectedCoins.includes(code)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedCoins([...selectedCoins, code]);
                      } else {
                        setSelectedCoins(selectedCoins.filter(c => c !== code));
                      }
                    }}
                  />
                  <label htmlFor={code}>
                    {code.split('-')[1]} ({code})
                  </label>
                </div>
              ))}
            </div>
            <div className={styles.subscriptionActions}>
              <button 
                className={styles.subscribeBtn}
                onClick={subscribeCustom}
                disabled={!isConnected}
              >
                선택 코인 구독
              </button>
              <button 
                className={styles.subscribeBtn}
                onClick={unsubscribeCustom}
                disabled={!isConnected}
              >
                구독 해제
              </button>
            </div>
          </div>
          <CoinGrid coinsData={customCoinsData} onCoinClick={handleCoinClick} />
        </div>
      )}

      {activeTab === 'single-coin' && (
        <div className={styles.tabContent}>
          <div className={styles.subscriptionPanel}>
            <h3>단일 코인 구독 (3번 방식)</h3>
            <p>특정 코인만 구독합니다. <code>/topic/ticker/&#123;marketCode&#125;</code> 주제를 구독합니다.</p>
            <div className={styles.subscriptionActions}>
              <select
                value={selectedSingleCoin}
                onChange={(e) => setSelectedSingleCoin(e.target.value)}
                className={styles.coinSelect}
              >
                {['KRW-BTC', 'KRW-ETH', 'KRW-XRP', 'KRW-SOL', 'KRW-ADA'].map((code) => (
                  <option key={code} value={code}>
                    {code.split('-')[1]} ({code})
                  </option>
                ))}
              </select>
              <button 
                className={styles.subscribeBtn}
                onClick={subscribeSingle}
                disabled={!isConnected}
              >
                단일 코인 구독
              </button>
              <button 
                className={styles.subscribeBtn}
                onClick={unsubscribeSingle}
                disabled={!isConnected}
              >
                구독 해제
              </button>
            </div>
          </div>
          {singleCoinData ? (
            <CoinCard 
              code={singleCoinData.code} 
              ticker={singleCoinData} 
              onClick={handleCoinClick}
            />
          ) : (
            <div className={styles.noData}>데이터가 없습니다.</div>
          )}
        </div>
      )}

      {selectedCoin && (
        <CoinDetail
          code={selectedCoin.code}
          ticker={selectedCoin.ticker}
          onClose={() => setSelectedCoin(null)}
        />
      )}

      <div className={styles.logPanel}>
        <h3>로그</h3>
        <div className={styles.logContent}>
          {logs.map((log, index) => (
            <div key={index} className={`${styles.logEntry} ${styles[`log${log.type}`]}`}>
              [{formatTime(log.timestamp)}] {log.message}
            </div>
          ))}
        </div>
      </div>

      {lastUpdate && (
        <div className={styles.lastUpdate}>
          마지막 업데이트: {formatTime(lastUpdate)}
        </div>
      )}
    </div>
  );
}