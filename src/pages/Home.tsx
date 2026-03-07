import { designSystemMenus } from '@/constants/common';
import Typography from '@/components/foundation/Typography';
import { BsStars } from 'react-icons/bs';

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-6 px-4 py-10 max-w-300">
      {designSystemMenus.map((menu) => (
        <div key={menu.id} className="grid w-full grid-cols-12 gap-4 mb-10">
          <div className="flex items-center col-span-12 gap-2">
            <BsStars className="text-xl text-primary-400! shrink-0" />
            <Typography variant="H3" classes="!text-primary-400">
              {menu.id}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
}
