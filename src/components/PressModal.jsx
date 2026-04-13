const PressModal = ({ pressType, day, title, desc, pic, readTime }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-8 md:mt-15 gap-6 md:gap-10">
      <div className="space-y-3 order-2 md:order-1 flex-1">
        <span className="flex gap-3 items-center text-sm pb-1">
          <p className="font-medium">{pressType}</p>
          <span className="w-1 h-1 rounded-full bg-black inline-block"></span>
          <p className="text-[#00000099]">{day}</p>
        </span>
        <h1 className="font-semibold text-xl md:text-2xl text-black leading-tight">
          {title}
        </h1>
        <p className="text-sm md:text-base text-[#1C1C1CCC] line-clamp-3">
          {desc}
        </p>
        <p className="text-xs md:text-sm text-gray-500">{readTime}</p>
      </div>
      <div className="w-full md:w-auto order-1 md:order-2">
        <img
          src={pic}
          alt={title}
          className="w-full md:w-120 h-48 md:h-50 object-cover rounded-xl border border-[#0000001A] shadow-sm"
        />
      </div>
    </div>
  );
};

export default PressModal;
