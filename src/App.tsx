import NameCard from "./components/name-card";

function App() {
  return (
    <section className="relative">
      <div className="bg-[#017785] rounded-br-[15px] rounded-bl-[15px] h-[207px] flex text-start p-[16px]">
        <div className="w-full">back</div>
        <div className="w-full">logo</div>
      </div>
      <div className="absolute top-10 left-0 flex justify-center p-6 w-full">
        <div className="bg-white rounded-2xl w-full shadow-[0px_3px_6px_0px_rgba(28,72,112,0.16)]">
          {/* <PhoneNumberCard /> */}
          {/* <OtpCard /> */}
          <NameCard />
        </div>
      </div>
    </section>
  );
}

export default App;
