/**
 * Next.js 13+ App Router 구조에서 page.tsx는 페이지 엔트리 파일로 특정 경로에 대한 UI를 정의하는 역할을 한다. 
 * 
 */
"use client"; // 클라이언트 컴포넌트 지시자 추가

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('You are not logged in. Please log in to access your albums.');
    } else {
      router.push('/albums');
    }
  }, [router]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Cloud Album</h1>
      <p>{message}</p>
      <p>
        <a href="/auth/login">Login</a> to get started.
      </p>
    </div>
  );
};

export default Home;
