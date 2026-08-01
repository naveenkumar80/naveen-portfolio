import { cn } from '../../lib/utils';

export const NeumorphicCard = ({ children, className, inset = false }) => {
  return (
    <div className={cn(
      "rounded-[30px] transition-all duration-300",
      inset ? "shadow-nm-inset" : "shadow-nm-flat",
      className
    )}>
      {children}
    </div>
  );
};

export const NeumorphicButton = ({ children, className, onClick, active = false }) => {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "px-6 py-3 rounded-2xl font-medium transition-all duration-200 active:shadow-nm-inset",
        active ? "shadow-nm-inset text-blue-600" : "shadow-nm-flat hover:scale-[1.02]",
        className
      )}
    >
      {children}
    </button>
  );
};

export const NeumorphicInput = ({ className, ...props }) => {
  return (
    <input 
      className={cn(
        "w-full px-5 py-3 rounded-2xl bg-nm-bg shadow-nm-inset outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-400/30",
        className
      )}
      {...props}
    />
  );
};

export const NeumorphicTextArea = ({ className, ...props }) => {
  return (
    <textarea 
      className={cn(
        "w-full px-5 py-3 rounded-2xl bg-nm-bg shadow-nm-inset outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-400/30 min-h-[120px]",
        className
      )}
      {...props}
    />
  );
};
