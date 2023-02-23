import type { FC, ReactNode } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { Noto_Sans_JP } from '@next/font/google';

const notoSans = Noto_Sans_JP({
  weight: '900',
  preload: false,
});

type Title = {
  title?: string;
  children: ReactNode;
};

export const Layout: FC<Title> = ({ children, title = 'イニミニ' }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-mono text-gray-800">
      <Head>
        <title>{title}</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <main
        className={`${notoSans.className} relative flex w-screen flex-1 flex-col items-center justify-center`}
      >
        {children}
      </main>
      <footer className="flex h-12 w-full items-center justify-center border-t">
        <Image
          src="/images/title.png"
          alt="イニミニ"
          width={229 / 3.5}
          height={75 / 3.5}
        />
      </footer>
    </div>
  );
};
