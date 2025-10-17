interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outlined';  // Added 'outlined'
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  href,
  onClick,
  className = ''
}: ButtonProps) {
  
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary';
  
  const variantStyles = {
    primary: 'bg-primary text-black hover:bg-primary/90 shadow-lg cursor-pointer',
    secondary: 'bg-white/10 text-white hover:bg-white/20 cursor-pointer',
    outlined: 'border-2 border-primary text-primary bg-transparent hover:bg-primary/10 cursor-pointer'  // New variant
  };
  
  const sizeStyles = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-base'
  };
  
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}