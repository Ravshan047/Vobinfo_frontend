import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

const CardContent = ({ children, className = '' }: CardContentProps) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

const CardHeader = ({ children, className = '' }: CardHeaderProps) => {
  return <div className={`p-6 border-b border-gray-200 ${className}`}>{children}</div>;
};

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

const CardFooter = ({ children, className = '' }: CardFooterProps) => {
  return <div className={`p-6 border-t border-gray-200 ${className}`}>{children}</div>;
};

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

const CardTitle = ({ children, className = '' }: CardTitleProps) => {
  return <h3 className={`text-xl font-bold ${className}`}>{children}</h3>;
};

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

const CardDescription = ({ children, className = '' }: CardDescriptionProps) => {
  return <p className={`text-sm text-gray-500 mt-1 ${className}`}>{children}</p>;
};

export { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription };