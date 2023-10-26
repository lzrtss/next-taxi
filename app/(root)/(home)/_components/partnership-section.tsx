import { FC } from 'react';
import Image from 'next/image';

import { ButtonLink, Container } from '@/components';

const PartnershipSection: FC = () => {
  return (
    <section className="bg-neutral-50 text-neutral-800">
      <Container>
        <div className="min-h-screen m-auto max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 justify-center items-center">
          <div className="hidden lg:block relative h-full overflow-hidden">
            <Image
              src="/for-business.jpg"
              alt="A girl leaving a car"
              fill
              priority
              sizes="444px 600px"
              className="object-contain z-10"
            />
          </div>
          <div className="flex flex-col items-start gap-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl leading-snug sm:leading-snug md:leading-snug text-neutral-800 font-bold">
              Drive when you want, make what you need
            </h2>
            <p className="text-neutral-800 font-normal">
              Make money on your schedule with deliveries or rides - or both.
              You can use own car or choose a rental through GetTaxi.
            </p>
            <ButtonLink href="/partnership" dark>
              Get started
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PartnershipSection;
