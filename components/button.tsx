export const Button = ({ children, className, ...props }: React.ComponentPropsWithoutRef<'button'>) => (
  <button
    className={`rounded-full px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus:ring-primary-800 ${className}`}
    {...props}
  >
    {children}
  </button>
);
