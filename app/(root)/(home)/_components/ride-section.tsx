import { FC } from 'react';
import Image from 'next/image';

import { ButtonLink, Container } from '@/components';

const RideSection: FC = () => {
  return (
    <section className="bg-neutral-800">
      <Container>
        <div className="min-h-screen m-auto max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 justify-center items-center text-neutral-50 font-bold">
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-2xl sm:text-4xl md:text-5xl leading-snug sm:leading-snug md:leading-snug">
              Go anywhere with GetTaxi
            </h1>
            <ButtonLink href="/ride">Take a ride</ButtonLink>
          </div>
          <div className="hidden lg:block relative h-full overflow-hidden">
            <Image
              src="/go-anywhere.jpg"
              alt="A girl leaving a car"
              fill
              priority
              sizes="444px 600px"
              className="object-contain z-10"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RideSection;
