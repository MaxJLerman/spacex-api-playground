interface Props {
  children: React.ReactNode;
}

export const GridBackground: React.FC<Props> = ({ children }) => {
  return (
    <div className="2xl:h-[75rem] min-h-fit w-full dark:bg-background bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-start justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_65%,black)]"></div>
      <section className={"mt-32 w-full"}>{children}</section>
    </div>
  );
};
