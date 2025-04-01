'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function TestPage() {
  const { data: session, status } = useSession();
  const [apiResponse, setApiResponse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function checkServerSession() {
      try {
        const res = await fetch('/api/test/session');
        const data = await res.json();
        setApiResponse(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    checkServerSession();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">세션 테스트 페이지</h1>
      
      <div className="mb-8 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">클라이언트 측 세션 정보 (useSession)</h2>
        <p className="mb-2">Status: <span className="font-medium">{status}</span></p>
        
        {status === 'loading' ? (
          <p>Loading session...</p>
        ) : status === 'authenticated' ? (
          <div>
            <p className="text-green-600 font-medium">인증됨</p>
            <pre className="bg-gray-700 text-white p-3 mt-2 rounded overflow-auto">
              {JSON.stringify(session, null, 2)}
            </pre>
          </div>
        ) : (
          <p className="text-red-600 font-medium">인증되지 않음</p>
        )}
      </div>

      <div className="p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">서버 측 세션 정보 (API)</h2>
        
        {loading ? (
          <p>Loading API data...</p>
        ) : error ? (
          <p className="text-red-600">Error: {error}</p>
        ) : (
          <div>
            <p className="mb-2">
              인증 상태: 
              <span className={apiResponse.authenticated ? "text-green-600 ml-2 font-medium" : "text-red-600 ml-2 font-medium"}>
                {apiResponse.authenticated ? "인증됨" : "인증되지 않음"}
              </span>
            </p>
            <pre className="bg-gray-700 text-white p-3 mt-2 rounded overflow-auto">
              {JSON.stringify(apiResponse, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
