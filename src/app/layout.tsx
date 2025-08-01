import '../globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Premastes - Professional Presentation Templates',
  description: 'Get access to professional presentation templates and design assets.',
};

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}

export default RootLayout;