import clsx from "clsx";

export const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={clsx("mx-auto w-full max-w-screen-xl  md:px-20", className)}
    >
      {children}
    </div>
  );
};
