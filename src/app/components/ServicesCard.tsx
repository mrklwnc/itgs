const ServicesCard = ({ span, count, children }) => {
  return (
    <div
      className={`relative ${span} bg-mrk-shipcove rounded-lg w-[276px] flex justify-center`}
    >
      {children}

      <div className="absolute bottom-0 left-0 w-16 h-16 flex justify-center items-center rounded-full text-white font-bold text-[1.8rem] bg-mrk-darkblue bg-opacity-50 translate-x-4 -translate-y-4">
        {count}
      </div>
    </div>
  );
};

export default ServicesCard;
