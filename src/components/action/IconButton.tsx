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
        'flex items-center justify-center h-9 w-9 rounded-md border transition-all duration-200 cursor-pointer',

        // Remove Default Ring/Outline
        'outline-none! focus:outline-none! ring-0! focus:ring-0!',

        // Light Mode
        'bg-white! border-neutral-990/10! text-secondary-400 hover:border-neutral-300',

        // Dark Mode
        'dark:bg-neutral-900! dark:border-neutral-100/10! dark:text-primary-400 dark:hover:border-neutral-700',

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
