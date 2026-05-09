interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="border border-white/20 px-6 py-2 inline-block rounded-lg">
        <h2 className="text-xl font-sans font-medium text-white tracking-wide uppercase">
          {children}
        </h2>
      </div>
    </div>
  );
};

export default SectionHeading;
