function NameCard() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full">
        <label htmlFor="first-name" className="text-end text-[12px] mb-1">
          نام
        </label>
        <input
          type="text"
          className="w-full h-12 border-1 border-[#505050] rounded-2xl mb-7"
        />
      </div>
      <div className="w-full">
        <label htmlFor="last-name" className="text-end text-[12px] mb-1">
          نام خانوادگی
        </label>
        <input
          type="text"
          className="w-full h-12 border-1 border-[#505050] rounded-2xl mb-7"
        />
      </div>
      <button className="bg-[#017785] h-12 w-full rounded-2xl text-[18px] text-white">
        ادامه
      </button>
    </div>
  );
}

export default NameCard;
