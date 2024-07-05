"use client"; // 클라이언트 컴포넌트 지시자 추가

import { useEffect, useState } from 'react';
import axios from 'axios';

const AlbumList = () => {
  const [albums, setAlbums] = useState<any[]>([]);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const fetchAlbums = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setMessage('Please login first');
        return;
      }

      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/albums`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setAlbums(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Error message:', error.message);
          console.error('Status code:', error.response?.status);
          if (error.response?.status == 401 || error.response?.status == 403) {
            setMessage('Please login again');
            localStorage.removeItem('token');
          } else {
            setMessage('Failed to fetch albums');
          }
        } else {
          console.error('Unexpected error:', error);
          setMessage('Failed to fetch albums');
        }
      }
    };

    fetchAlbums();
  }, []);

  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
      <p>{message}</p>
    </div>
  );
};

export default AlbumList;
