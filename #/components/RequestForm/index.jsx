function ReuqestForm(props) {
  return (
    <section className="bg-black | py-10 md:py-14 | relative | overflow-hidden">
      <div className="relative | container mx-auto z-50 | space-y-5 md:space-y-7">
        <h3 className="relative | text-3xl md:text-5xl font-bold text-white font-gm | text-center">
          Leave us a message <span className="py-2 block"></span> to recieve a
          callback
        </h3>

        <p className="font-exo text-white opacity-60 text-xs md:text-sm text-center">
          Leave a request <br />
          and we will contact you shortly
        </p>

        <div className="fcc flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name:"
            className="w-4/5 md:w-1/5 text-sm md:text-base | bg-black border border-white text-white py-2 md:py-3 px-3 placeholder:text-white placeholder:opacity-80"
          />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="+998 __"
            className="w-4/5 md:w-1/5 text-sm md:text-base | bg-black border border-white text-white py-2 md:py-3 px-3 placeholder:text-white placeholder:opacity-80"
          />

          <button className="w-4/5 md:w-1/5 | bg-white text-orange-primary px-10 py-2 md:py-3 text-base md:text-lg font-bold font-poppins click:scale">
            Send
          </button>
        </div>
      </div>

      <div className="bounce w-[35rem] h-[30rem] opacity-[72%] absolute -top-48 -left-20 | blur-2xl duration-150 rounded-[50%] bg-[#FB7A1A]"></div>
    </section>
  );
}

export default ReuqestForm;
