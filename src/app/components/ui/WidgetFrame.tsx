interface WidgetFrameProps {
  children: React.ReactNode;
}

const WidgetFrame: React.FC<WidgetFrameProps> = ({children}) => {
  return (
    <div className="rounded-md w-full md:w-2/3 xl:w-1/2 bg-slate-700 flex flex-col justify-center p-3 drop-shadow-lg">
      {children}
    </div>
  );
}

export default WidgetFrame