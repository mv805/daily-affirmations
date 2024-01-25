const HeaderBar = () => {

  const today = new Date();

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const dateString = today.toLocaleDateString(undefined, options);

  return (
    <header className="bg-cyan-800 h-20 flex justify-center flex-col items-center">
      <div className="italic text-xl font-bold">Daily Affirmations!</div>
      <div>{dateString}</div>
    </header>
  );
};

export default HeaderBar;
