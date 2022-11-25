// typing
interface PropsSection {
  title?: string;
  children: React.ReactNode;
}

const Section: React.FC<PropsSection> = ({ title, children }) => {
  return (
    <div className="mx-auto w-full max-w-1920 p-7">
      {title && (
        <h1 className="pt-12 pb-7 text-5xl font-semibold text-dark-custom">
          {title}
        </h1>
      )}
      {children}
    </div>
  );
};

export default Section;
