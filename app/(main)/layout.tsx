type Props = {
  children: React.ReactNode;
};

const MarketingLayout = ({ children }: Props) => {
  return <div className="min-h-screen flex flex-col">{children}</div>;
};

export default MarketingLayout;
