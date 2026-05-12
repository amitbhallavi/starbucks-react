export default function HeroSection({ section }) {
  const { image, imageSide, bg, title, desc, btnText } = section;

  const imgBlock = (
    <div
      className="w-full md:w-1/2 h-64 md:h-auto min-h-[400px] bg-cover bg-center"
      style={{ backgroundImage: `url('${image}')` }}
    />
  );

  const textBlock = (
    <div
      className="w-full md:w-1/2 flex flex-col justify-center items-center gap-6 px-8 py-16 text-white"
      style={{ backgroundColor: bg }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center leading-tight">
        {title}
      </h2>
      <p className="text-base md:text-lg text-center leading-relaxed text-white/90 max-w-sm">
        {desc}
      </p>
      <button
        className="border border-white text-white font-bold text-sm px-6 py-2.5 rounded-full hover:bg-white/20 transition-colors duration-300"
      >
        {btnText}
      </button>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row w-full mt-8">
      {imageSide === "left" ? (
        <>{imgBlock}{textBlock}</>
      ) : (
        <>{textBlock}{imgBlock}</>
      )}
    </div>
  );
}
