"use client"; // 클라이언트 컴포넌트 지시자 추가

import { useState } from 'react';
import axios from 'axios';

const CreateAlbum = () => {
  const [year, setYear] = useState<number>(2024);
  const [month, setMonth] = useState<number>(7);
  const [message, setMessage] = useState<string>('');

  const handleCreateAlbum = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('Please login first');
      return;
    }

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/albums/photos`, {
        year,
        month
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMessage('Album created successfully');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error message:', error.message);
        console.error('Status code:', error.response?.status);
        if (error.response?.status == 401 || error.response?.status == 403) {
          setMessage('Please login again');
          localStorage.removeItem('token');
        } else {
          setMessage('Failed to create album');
        }
      } else {
        console.error('Unexpected error:', error);
        setMessage('Failed to create album');
      }
    }
  };

  return (
    <div>
      <h1>Create Album</h1>
      <label>
        Year:
        <input type="number" value={year} onChange={(e) => setYear(parseInt(e.target.value))} />
      </label>
      <label>
        Month:
        <input type="number" value={month} onChange={(e) => setMonth(parseInt(e.target.value))} />
      </label>
      <button onClick={handleCreateAlbum}>Create Album</button>
      <p>{message}</p>
    </div>
  );
};

export default CreateAlbum;
