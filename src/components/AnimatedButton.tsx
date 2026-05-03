import { ArrowRight } from 'lucide-react';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
}

export default function AnimatedButton({ children, icon, className = '', ...props }: AnimatedButtonProps) {
  return (
    <button
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full font-bold transition-all duration-300 ${className}`}
      {...props}
    >
      <span className="relative flex items-center transition-transform duration-300 group-hover:-translate-x-2">
        {children}
      </span>
      <span className="absolute right-4 translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        {icon || <ArrowRight className="h-5 w-5" />}
      </span>
    </button>
  );
}
