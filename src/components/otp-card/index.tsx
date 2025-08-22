function OtpCard() {
  return (
    <div className="flex flex-col items-center p-4">
      <p className="text-[18px] font-bold mb-2">کد تایید را وارد نمایید. </p>
      <div className="mb-6 flex items-center gap-1">
        <p className="text-[10px]">Edit</p>
        <p className="text-[10px]"> کد تایید برای شما ارسال خواهد شد</p>
      </div>
      <div className="flex items-center gap-3">
        <input
          type="number"
          className="w-12 h-12 border-1 border-[#D2D1D1] rounded-lg mb-7"
        />
        <input
          type="number"
          className="w-12 h-12 border-1 border-[#D2D1D1] rounded-lg mb-7"
        />
        <input
          type="number"
          className="w-12 h-12 border-1 border-[#D2D1D1] rounded-lg mb-7"
        />
        <input
          type="number"
          className="w-12 h-12 border-1 border-[#D2D1D1] rounded-lg mb-7"
        />
        <input
          type="number"
          className="w-12 h-12 border-1 border-[#D2D1D1] rounded-lg mb-7"
        />
      </div>
      <button className="bg-[#017785] h-12 w-full rounded-2xl text-[18px] text-white">
        ادامه
      </button>
    </div>
  );
}

export default OtpCard;
