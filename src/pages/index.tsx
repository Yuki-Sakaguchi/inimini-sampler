import type { NextPage } from 'next';
import useSound from 'use-sound';

import Image from 'next/image';
import { Layout } from '@/components/Layout';

/**
 * サンプラーページ
 */
const Sampler: NextPage = () => {
  const [play] = useSound('/sound/inimini.mp3');
  return (
    <Layout>
      <button onClick={() => play()}>
        <Image src="/images/seiya.png" alt="" width="106" height="134" />
      </button>
    </Layout>
  );
};

export default Sampler;
