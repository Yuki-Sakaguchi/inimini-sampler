import type { FC, ReactNode } from 'react';
import type { NextPage } from 'next';
import useSound from 'use-sound';
import { useState } from 'react';

import Image from 'next/image';
import * as Slider from '@radix-ui/react-slider';
import { Layout } from '@/components/Layout';

const SamplerButton: FC<{
  children: ReactNode;
  onClick: () => void;
  color?: string;
}> = ({ children, onClick, color }) => {
  return (
    <button
      className="flex aspect-square w-full items-center justify-center bg-blue-400 text-sm text-white active:scale-95"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

/**
 * サンプラーページ
 */
const Sampler: NextPage = () => {
  const [volume, setVolume] = useState(0.5);
  const [playFull] = useSound('/sound/inimini-full.mp3', {
    interrupt: true,
    volume,
  });
  const [playInimini] = useSound('/sound/inimini.mp3', {
    interrupt: true,
    volume,
  });
  const [playRekapika] = useSound('/sound/rekapika.mp3', {
    interrupt: true,
    volume,
  });
  const [playReirai] = useSound('/sound/reirai.mp3', {
    interrupt: true,
    volume,
  });
  const [playOnimeka] = useSound('/sound/onimeka.mp3', {
    interrupt: true,
    volume,
  });
  const [playChikarori] = useSound('/sound/chikarori.mp3', {
    interrupt: true,
    volume,
  });
  const [playPaparanpanpush] = useSound('/sound/paparanpanpush.mp3', {
    interrupt: true,
    volume,
  });
  const [playSeiya] = useSound('/sound/seiya.mp3', {
    interrupt: true,
    volume,
  });
  const [playNannanjasorya] = useSound('/sound/nannanjasorya.mp3', {
    interrupt: true,
    volume,
  });
  const [playChingell] = useSound('/sound/chinbell.mp3', {
    interrupt: true,
    volume,
  });

  return (
    <Layout>
      <div className="mb-5 flex flex-col items-center justify-center">
        <h1 className="text-center text-lg">
          <Image
            src="/images/title.png"
            alt="イニミニ"
            width={229 / 2}
            height={75 / 2}
          />
        </h1>
        <button onClick={() => playFull()} className="active:scale-95">
          <Image src="/images/seiya.png" alt="" width="106" height="134" />
        </button>
      </div>
      <div className="grid w-full max-w-[500px] grid-cols-3 gap-4 px-6 pb-6">
        <SamplerButton onClick={() => playInimini()} color="#0362c6">
          イニミニ
        </SamplerButton>
        <SamplerButton onClick={() => playRekapika()} color="#ed3428">
          レカピカ
        </SamplerButton>
        <SamplerButton onClick={() => playReirai()} color="#139b31">
          レーライ
        </SamplerButton>
        <SamplerButton onClick={() => playOnimeka()} color="#f8b50f">
          オニメカ
        </SamplerButton>
        <SamplerButton onClick={() => playChikarori()} color="#fe50b3">
          チカロリ
        </SamplerButton>
        <SamplerButton onClick={() => playPaparanpanpush()} color="#2bcbab">
          パパランパン
          <br />
          プッシュ
        </SamplerButton>
        <SamplerButton onClick={() => playSeiya()} color="#8228ed">
          せいや
        </SamplerButton>
        <SamplerButton onClick={() => playNannanjasorya()} color="#ff7401">
          なんなんじゃ
          <br />
          そりゃ
        </SamplerButton>
        <SamplerButton onClick={() => playChingell()}>チンベル</SamplerButton>
      </div>
      <div className="absolute bottom-4 flex justify-center">
        <Slider.Root
          className="relative flex h-[20px] w-[200px] touch-none select-none items-center"
          defaultValue={[volume]}
          max={1}
          step={0.1}
          aria-label="Volume"
          onValueChange={(e) => setVolume(e[0])}
        >
          <Slider.Track className="relative h-[3px] grow rounded-full bg-gray-100">
            <Slider.Range className="absolute h-full rounded-full bg-yellow-300" />
          </Slider.Track>
          <Slider.Thumb className="block h-[20px] w-[20px] rounded-2xl bg-yellow-300 shadow-md hover:border-green-50 focus:shadow-sm focus:outline-none" />
        </Slider.Root>
      </div>
    </Layout>
  );
};

export default Sampler;
