import React, { Suspense } from 'react';
import AppLayout from '@/components/AppLayout';
import StudentDashboardContent from './components/StudentDashboardContent';

export default function StudentDashboardPage() {
  return (
    <AppLayout>
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen text-purple-400">Loading...</div>}>
        <StudentDashboardContent />
      </Suspense>
    </AppLayout>
  );
}