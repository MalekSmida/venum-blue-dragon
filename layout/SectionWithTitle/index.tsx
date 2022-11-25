// typing
interface PropsSectionWithTitle {
  title: string;
  children: React.ReactNode;
}

const SectionWithTitle: React.FC<PropsSectionWithTitle> = ({
  title,
  children,
}) => {
  return (
    <div className="mx-auto w-full max-w-1920 p-7">
      <h1 className="pt-12 pb-7 text-5xl">{title}</h1>
      {children}
    </div>
  );
};

export default SectionWithTitle;
