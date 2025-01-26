'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
export default function Page() {
  const router = useRouter();

  return (
    <div className="page-container">
      <h1 className="page-title">3D Reconstruction</h1>
      <p className="page-intro">Introduction</p>
      <button className="page-button" onClick={() => router.push('/home')}>
        Go to Dashboard
      </button>
    </div>
  );
}