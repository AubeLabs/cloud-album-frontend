"use client"; // 클라이언트 컴포넌트 지시자 추가

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const Login = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');
    console.log('Token:', token);
    if (token) {
      localStorage.setItem('token', token as string);
      router.push('/albums');
    }
  }, [router, searchParams]);

  const handleGoogleLogin = () => {
    console.log('window.location.href = ', `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`)
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`;
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

const LoginPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Login />
    </Suspense>
  );
};

export default LoginPage;