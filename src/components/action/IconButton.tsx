import { cn } from '@/libs/utils';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

const IconButton = ({ icon, className, ...props }: IconButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        // Base layout
        'flex items-center justify-center h-8 w-8 p-0! rounded-md transition-all duration-200 cursor-pointer bg-transparent!',

        // Remove Default Ring/Outline
        'outline-none! focus:outline-none! ring-0! focus:ring-0!',

        // Light Mode
        'text-secondary-400',

        // Dark Mode
        'dark:text-primary-400 ',

        // Interaction Logic
        'group active:scale-95',
        className,
      )}
    >
      {/* In v4, we can trigger the animation on group-hover. 
        'animate-bounce-up' is a custom animation we'll define in index.css 
      */}
      <div className="group-hover:animate-[bounce-up_0.4s_ease-in-out]">
        {icon}
      </div>
    </button>
  );
};

export default IconButton;
