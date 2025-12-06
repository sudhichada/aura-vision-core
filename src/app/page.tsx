// frontend/src/app/page.tsx
"use client";

import React, { useState } from 'react';
import LandingPage from '../components/LandingPage';
import Dashboard from '@/components/Dashboard';

export default function Home() {
  // State to track if user has clicked "Start"
  const [showApp, setShowApp] = useState(false);

  return (
    <main>
      {showApp ? (
        // If true, show the full Dashboard (the code you just moved)
        <Dashboard />
      ) : (
        // If false, show the Landing Page
        <LandingPage onStart={() => setShowApp(true)} />
      )}
    </main>
  );
}