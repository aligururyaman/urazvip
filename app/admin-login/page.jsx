"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const AdminLogin = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Basit admin giriş kontrolü (gerçek uygulamada Firebase Auth kullanılmalı)
    if (credentials.username === 'admin' && credentials.password === 'urazvip2024') {
      localStorage.setItem('adminLoggedIn', 'true');
      router.push('/admin');
    } else {
      setError('Kullanıcı adı veya şifre hatalı!');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6 sm:space-y-8">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            URAZ VİP TRANSFER
          </h1>
          <p className="text-gray-300 text-sm sm:text-base">
            Admin Paneli Girişi
          </p>
        </div>

        <div className="bg-gray-900 border border-yellow-500 rounded-2xl shadow-xl p-6 sm:p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-900 border border-red-500 rounded-lg text-red-300 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Kullanıcı Adı
              </label>
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-yellow-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Kullanıcı adınızı girin"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Şifre
              </label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-yellow-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Şifrenizi girin"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-yellow-500 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-yellow-500 hover:text-yellow-400 text-sm"
            >
              Ana Sayfaya Dön
            </a>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>Demo Giriş Bilgileri:</p>
          <p>Kullanıcı Adı: admin</p>
          <p>Şifre: urazvip2024</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin; 