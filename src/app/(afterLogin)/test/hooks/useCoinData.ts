import { useState, useRef, RefObject } from 'react';
import { Client } from '@stomp/stompjs';

export interface TickerData {
  type?: string;
  code: string;
  tradePrice: number;
  openingPrice: number;
  highPrice: number;
  lowPrice: number;
  prevClosingPrice: number;
  change: string;
  changePrice: number;
  changeRate: number;
  signedChangePrice: number;
  signedChangeRate: number;
  tradeVolume: number;
  accTradeVolume: number;
  accTradeVolume24h: number;
  accTradePrice: number;
  accTradePrice24h: number;
  tradeDate: string;
  tradeTime: string;
  tradeTimestamp: number;
  askBid: string;
  timestamp: number;
  streamType: string;
}

export const useCoinData = (stompClientRef: RefObject<Client | null>, log: (message: string, type?: string) => void) => {
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [allCoinsData, setAllCoinsData] = useState<Record<string, TickerData>>({});
  const [customCoinsData, setCustomCoinsData] = useState<Record<string, TickerData>>({});
  const [singleCoinData, setSingleCoinData] = useState<TickerData | null>(null);
  const [selectedCoins, setSelectedCoins] = useState<string[]>(['KRW-BTC', 'KRW-ETH']);
  const [selectedSingleCoin, setSelectedSingleCoin] = useState('KRW-BTC');

  const allCoinsSubscriptionRef = useRef<any>(null);
  const customCoinsSubscriptionRef = useRef<any>(null);
  const singleCoinSubscriptionRef = useRef<any>(null);

  const convertTickerData = (rawData: any): any => {
    if (!rawData) return rawData;
    
    if (rawData.cd || rawData.code) {
      return {
        ...rawData,
        type: rawData.ty || rawData.type,
        code: rawData.cd || rawData.code,
        tradePrice: rawData.tp || rawData.trade_price || rawData.tradePrice,
        openingPrice: rawData.op || rawData.opening_price || rawData.openingPrice,
        highPrice: rawData.hp || rawData.high_price || rawData.highPrice,
        lowPrice: rawData.lp || rawData.low_price || rawData.lowPrice,
        prevClosingPrice: rawData.pcp || rawData.prev_closing_price || rawData.prevClosingPrice,
        change: rawData.c || rawData.change,
        changePrice: rawData.cp || rawData.change_price || rawData.changePrice,
        changeRate: rawData.cr || rawData.change_rate || rawData.changeRate,
        signedChangePrice: rawData.scp || rawData.signed_change_price || rawData.signedChangePrice,
        signedChangeRate: rawData.scr || rawData.signed_change_rate || rawData.signedChangeRate,
        tradeVolume: rawData.tv || rawData.trade_volume || rawData.tradeVolume,
        accTradeVolume: rawData.atv || rawData.acc_trade_volume || rawData.accTradeVolume,
        accTradeVolume24h: rawData.atv24h || rawData.acc_trade_volume_24h || rawData.accTradeVolume24h,
        accTradePrice: rawData.atp || rawData.acc_trade_price || rawData.accTradePrice,
        accTradePrice24h: rawData.atp24h || rawData.acc_trade_price_24h || rawData.accTradePrice24h,
        tradeDate: rawData.tdt || rawData.trade_date || rawData.tradeDate,
        tradeTime: rawData.ttm || rawData.trade_time || rawData.tradeTime,
        tradeTimestamp: rawData.ttms || rawData.trade_timestamp || rawData.tradeTimestamp,
        askBid: rawData.ab || rawData.ask_bid || rawData.askBid,
        timestamp: rawData.tms || rawData.timestamp || Date.now(),
        streamType: rawData.st || rawData.stream_type || rawData.streamType
      };
    }
    
    if (typeof rawData === 'object' && rawData !== null) {
      const converted: Record<string, any> = {};
      for (const [key, value] of Object.entries(rawData)) {
        converted[key] = convertTickerData(value);
      }
      return converted;
    }
    
    return rawData;
  };

  const subscribeAll = () => {
    if (!stompClientRef.current) return;
    
    log('모든 코인 구독 시작...');
    
    allCoinsSubscriptionRef.current = stompClientRef.current.subscribe('/topic/tickers', (message) => {
      try {
        const rawData = JSON.parse(message.body);
        const data = convertTickerData(rawData);
        log(`모든 코인 데이터 수신: ${Object.keys(data).length}개 코인`);
        setAllCoinsData(data);
        setLastUpdate(new Date());
      } catch (e) {
        log('메시지 파싱 오류: ' + e, 'error');
      }
    });
  };

  const unsubscribeAll = () => {
    if (allCoinsSubscriptionRef.current) {
      allCoinsSubscriptionRef.current.unsubscribe();
      allCoinsSubscriptionRef.current = null;
      log('모든 코인 구독 해제');
      setAllCoinsData({});
    }
  };

  const subscribeCustom = () => {
    if (!stompClientRef.current) return;
    
    if (selectedCoins.length === 0) {
      log('선택된 코인이 없습니다.', 'error');
      return;
    }
    
    log(`맞춤 구독 시작: ${selectedCoins.join(', ')}`);
    
    stompClientRef.current.publish({
      destination: "/app/subscribe/custom",
      body: JSON.stringify({ marketCodes: selectedCoins })
    });
    
    customCoinsSubscriptionRef.current = stompClientRef.current.subscribe('/user/topic/tickers', (message) => {
      try {
        const rawData = JSON.parse(message.body);
        const data = convertTickerData(rawData);
        log(`맞춤 코인 데이터 수신: ${Object.keys(data).length}개 코인`);
        setCustomCoinsData(data);
        setLastUpdate(new Date());
      } catch (e) {
        log('메시지 파싱 오류: ' + e, 'error');
      }
    });
  };

  const unsubscribeCustom = () => {
    if (customCoinsSubscriptionRef.current) {
      if (stompClientRef.current) {
        stompClientRef.current.publish({
          destination: "/app/unsubscribe",
          body: "{}"
        });
      }
      
      customCoinsSubscriptionRef.current.unsubscribe();
      customCoinsSubscriptionRef.current = null;
      log('맞춤 코인 구독 해제');
      setCustomCoinsData({});
    }
  };

  const subscribeSingle = () => {
    if (!stompClientRef.current) return;
    
    log(`단일 코인 구독 시작: ${selectedSingleCoin}`);
    
    singleCoinSubscriptionRef.current = stompClientRef.current.subscribe(`/topic/ticker/${selectedSingleCoin}`, (message) => {
      try {
        const rawTicker = JSON.parse(message.body);
        const ticker = convertTickerData(rawTicker);
        log(`단일 코인 데이터 수신: ${ticker.code} - ${ticker.tradePrice}원`);
        setSingleCoinData(ticker);
        setLastUpdate(new Date());
      } catch (e) {
        log('메시지 파싱 오류: ' + e, 'error');
      }
    });
  };

  const unsubscribeSingle = () => {
    if (singleCoinSubscriptionRef.current) {
      singleCoinSubscriptionRef.current.unsubscribe();
      singleCoinSubscriptionRef.current = null;
      log('단일 코인 구독 해제');
      setSingleCoinData(null);
    }
  };

  return {
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
  };
}; 