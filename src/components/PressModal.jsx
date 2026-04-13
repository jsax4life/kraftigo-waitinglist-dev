const PressModal = ({ pressType, day, title, desc, pic, readTime }) => {
  return (
    <div className="flex justify-between items-start mt-15">
      <div className="space-y-3">
        <span className="flex gap-3 items-center text-[14px] pb-2">
          <p>{pressType}</p>
          <span className="w-1 h-1 rounded-full bg-black inline-block"></span>
          <p className="text-[#00000099]">{day}</p>
        </span>
        <h1 className="font-semibold text-2xl w-130">{title}</h1>
        <p className="text-[16px] w-130">{desc}</p>
        <p className="text-[14px]">{readTime}</p>
      </div>
      <img
        src={pic}
        alt="press1"
        className="w-120 h-50 object-cover rounded-lg border border-[#0000001A] "
      />
    </div>
  );
};

export default PressModal;
