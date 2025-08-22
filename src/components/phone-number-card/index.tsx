function PhoneNumberCard() {
  return (
    <div className="flex flex-col items-center p-4">
      <p className="text-[18px] font-bold mb-2">
        شماره موبایل خود را وارد نمایید:
      </p>
      <p className="text-[10px] mb-6"> کد تایید برای شما ارسال خواهد شد</p>
      <div>
        <label htmlFor="phone-number" className="text-end text-[12px] mb-1">
          تلفن همراه
        </label>
        <input
          type="number"
          className="w-full h-12 border-1 border-[#505050] rounded-2xl mb-7"
        />
      </div>
      <button className="bg-[#017785] h-12 w-full rounded-2xl text-[18px] text-white">
        ادامه
      </button>
    </div>
  );
}

export default PhoneNumberCard;
