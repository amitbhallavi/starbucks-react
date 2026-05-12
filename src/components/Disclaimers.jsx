import { disclaimers } from "../data/starbucksData";

export default function Disclaimers() {
  return (
    <section className="py-14 px-6 md:px-20 border-b border-gray-200 flex flex-col gap-10">
      {disclaimers.map((text, i) => (
        <p key={i} className="text-xs text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
          {text}
          {i === 1 && (
            <>
              {" "}Visit{" "}
              <a href="https://amitbhallvi.github.io/Profile-Card/" target="_blank" rel="noreferrer" className="underline text-[#006242]">
                Coding By Amit Thakur
              </a>{" "}and{" "}
              <a href="https://about.starbucks.com/backtostarbucks/" target="_blank" rel="noreferrer" className="underline text-[#006242]">
                starbucks.com/refills
              </a>{" "}to learn more.
            </>
          )}
        </p>
      ))}
    </section>
  );
}
