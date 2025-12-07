// frontend/src/app/page.tsx
"use client";

import React, { useState } from 'react';
import LandingPage from '@/components/LandingPage'; // <--- Imports your new file
import Dashboard from '@/components/Dashboard';

export default function Home() {
  const [showApp, setShowApp] = useState(false);

  return (
    <main>
      {showApp ? (
        <Dashboard />
      ) : (
        // Passes the "Start" click handler to your Landing Page
        <LandingPage onStart={() => setShowApp(true)} />
      )}
    </main>
  );
}