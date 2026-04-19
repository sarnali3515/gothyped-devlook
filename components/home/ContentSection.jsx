"use client";

import Image from "next/image";

export default function ContentSection() {
    return (
        <section className="py-10 lg:py-28 px-4 sm:px-8 md:px-16">
            <div className="max-w-7xl lg:max-w-[1400px] xl:max-w-[1600px] 2xl:max-[2000px] mx-auto">

                {/* Heading */}
                <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold md:font-semibold max-w-7xl mx-auto">
                    Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
                </h1>

                {/* Bottom Content */}
                <div className="mt-16 flex flex-col md:flex-row md:justify-between items-start md:items-end">

                    {/* Image */}
                    <div className="w-[280px] h-[360px] rounded-2xl overflow-hidden shrink-0 ml-5 md:ml-0 rotate-3 md:rotate-0">

                        {/* Desktop Image */}
                        <Image
                            src="/images/section-2.webp"
                            alt="person"
                            width={280}
                            height={360}
                            className="hidden md:block w-full h-full object-cover rounded-2xl"
                        />

                        {/* Mobile Video ONLY */}
                        <video
                            src="/videos/section-2.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="block md:hidden w-full h-full object-cover rounded-2xl"
                        />
                    </div>

                    {/* Text + Button */}
                    <div className="max-w-xl mt-10 md:mt-0">
                        <p className="text-lg md:text-xl lg:text-2xl xl:text-[28px] font-bold max-w-xl">
                            We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar.
                            Zo weet je precies wat werkt en wat niet.
                            <br />
                            Nooit meer content zonder strategie.
                            <br />
                            Nooit meer content zonder resultaat.
                        </p>

                        <button className="mt-6 flex items-center gap-3 border border-black rounded-xl px-2 py-1 text-base font-semibold cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:skew-x-[8deg] hover:skew-y-[-4deg] hover:scale-x-110 hover:scale-y-105 hover:rounded-lg">
                            Leer ons kennen
                            <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-black text-white">
                                →
                            </span>
                        </button>
                    </div>

                    {/* Scroll Button */}
                    <button
                        onClick={() => {
                            document.getElementById("service-section").scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                        className="w-12 h-12 rounded-xl border border-black flex items-center justify-center text-[#fa5424] text-xl font-bold overflow-hidden relative group cursor-pointer hover:rounded-lg"
                    >
                        <div className="transform transition-all duration-300 ease-out translate-y-0 group-hover:translate-y-8">
                            ↓
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center transform transition-all duration-300 ease-out -translate-y-8 group-hover:translate-y-0">
                            ↓
                        </div>
                    </button>

                </div>
            </div>
        </section>
    );
}