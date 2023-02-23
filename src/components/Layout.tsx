import type { FC, ReactNode } from 'react';
import Head from 'next/head';

type Title = {
  title?: string;
  children: ReactNode;
};

export const Layout: FC<Title> = ({ children, title = 'inimini' }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-mono text-gray-800">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <footer className="flex h-12 w-full items-center justify-center border-t">
        @ inimini
      </footer>
    </div>
  );
};
