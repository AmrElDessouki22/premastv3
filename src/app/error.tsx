'use client';

import { ReactNode } from 'react';

export default function ErrorBoundary({ children }: { children: ReactNode }) {
  return <>{children}</>;
}