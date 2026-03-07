import { designSystemMenus } from '@/constants/common';
import Typography from '@/components/foundation/Typography';
import SpotlightCard from '@/components/interaction/SpotlightCard';
import SplitText from '@/components/interaction/SplitText';
import CountUp from '@/components/interaction/CountUp';
import { BsStars } from 'react-icons/bs';

const parseComponent = (component: {
  id: string;
  label: string;
  href: string;
}) => {
  switch (component.id) {
    case 'splitText':
      return (
        <SplitText
          variant="H3"
          text="Split Text"
          classes="translate-y-[-16px]"
          delay={100}
          repeat
        />
      );
    case 'countUp':
      return (
        <CountUp
          to={100}
          repeat
          className="font-mono text-4xl font-bold text-primary-500"
        />
      );
    default:
      return (
        <img
          src={`/image/${component.id}_thumbnail.png`}
          alt={`${component.label} Thumbnail`}
          className="object-contain w-full h-full rounded-lg"
          loading="lazy"
        />
      );
  }
};

export default function App() {
  return (
    <div className="flex flex-col w-full gap-6 px-4 py-10">
      {designSystemMenus.map((menu) => (
        <div key={menu.id} className="grid w-full grid-cols-12 gap-4 mb-10">
          <div className="flex items-center col-span-12 gap-2">
            <BsStars className="text-xl text-primary-400! shrink-0" />
            <Typography variant="H3" classes="!text-primary-400">
              {menu.id}
            </Typography>
          </div>
          {menu.items.map((item) => (
            <div
              key={item.id}
              className="col-span-12 md:col-span-4 lg:col-span-3"
            >
              <SpotlightCard
                spotlightColor="rgba(80, 180, 255, 0.7)"
                href={item.href}
              >
                <div className="flex flex-col items-start w-full gap-4 pb-4">
                  <div className="bg-neutral-990 pointer-events-none relative flex aspect-[3/2] w-full items-center justify-center rounded-lg text-white">
                    {parseComponent(item)}
                  </div>
                  <Typography
                    variant="B2"
                    classes="!text-neutral-100 !font-semibold"
                  >
                    {item.label}
                  </Typography>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
