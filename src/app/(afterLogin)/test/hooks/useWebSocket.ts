import { useRef, useState } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

interface LogEntry {
  message: string;
  type: string;
  timestamp: Date;
}

export const useWebSocket = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const stompClientRef = useRef<Client | null>(null);

  const log = (message: string, type: string = 'info') => {
    setLogs(prev => [...prev, { message, type, timestamp: new Date() }]);
  };

  const connect = () => {
    log('WebSocket 서버에 연결 시도 중...');
    try {
      const socket = new SockJS('http://localhost:8080/ws');
      const client = new Client({
        webSocketFactory: () => socket,
        onConnect: () => {
          log('WebSocket 연결 성공', 'success');
          setIsConnected(true);
        },
        onDisconnect: () => {
          log('WebSocket 연결 해제', 'info');
          setIsConnected(false);
        },
        onStompError: (frame) => {
          log('STOMP 오류: ' + frame.headers['message'], 'error');
          setIsConnected(false);
        }
      });

      client.activate();
      stompClientRef.current = client;
    } catch (e) {
      log('연결 시도 중 오류: ' + e, 'error');
    }
  };

  const disconnect = () => {
    if (stompClientRef.current) {
      stompClientRef.current.deactivate();
      stompClientRef.current = null;
      setIsConnected(false);
    }
  };

  return {
    isConnected,
    logs,
    stompClientRef,
    connect,
    disconnect,
    log
  };
}; 