import type { NextPage } from 'next';
import useSound from 'use-sound';
import { useState } from 'react';

import Image from 'next/image';
import * as Slider from '@radix-ui/react-slider';
import { Layout } from '@/components/Layout';

/**
 * サンプラーページ
 */
const Sampler: NextPage = () => {
  const [volume, setVolume] = useState(0.5);
  const [play] = useSound('/sound/inimini.mp3', { interrupt: true, volume });

  return (
    <Layout>
      <button onClick={() => play()} className="active:scale-95">
        <Image src="/images/seiya.png" alt="" width="106" height="134" />
      </button>
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
