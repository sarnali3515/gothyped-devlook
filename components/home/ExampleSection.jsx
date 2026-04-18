"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const cards = [
    {
        id: 1,
        title: "Van nul naar vol,\nbinnen 3 weken",
        tag: "Bullit",
        video: "/videos/examples/case-1.mp4",
        color: "#ff4d1c",
    },
    {
        id: 2,
        title: "Zacht in smaak,\nsterk in beeld",
        tag: "Roasta",
        video: "/videos/examples/case-2.mp4",
        color: "#2f80ed",
    },
    {
        id: 3,
        title: "Content die écht\nsmaakt (en raakt)",
        tag: "Loco",
        video: "/videos/examples/case-3.mp4",
        color: "#27ae60",
    },
];

export default function ExampleSection() {
    const refs = useRef([]);

    const [isMobile, setIsMobile] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);


    const handleMouseEnter = (index) => {
        const video = refs.current[index];
        if (!video) return;

        const playPromise = video.play();
        playPromise?.catch(() => { });
    };

    const handleMouseLeave = (index) => {
        const video = refs.current[index];
        if (!video) return;

        video.pause();
        video.currentTime = 0;
    };

    return (
        <section className="py-20 md:py-28 md:pb-48">
            <div className="max-w-7xl lg:max-w-[1400px] xl:max-w-[1600px] mx-auto px-6">

                {/* Top */}
                <div className="">
                    <h1 className="text-4xl md:text-7xl lg:text-[120px] font-bold tracking-tighter mb-2">
                        Content <br />dat scoort.
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl xl:text-[28px] font-bold max-w-md tracking-tight mt-4">
                        Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. Met creatieve content die werkt en het verschil maakt.
                    </p>

                    <button className="mt-6 flex items-center gap-3 border border-black rounded-xl px-2 py-1 text-base font-semibold cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:skew-x-[8deg] hover:skew-y-[-4deg] hover:scale-x-110 hover:scale-y-105 hover:rounded-lg">
                        Bekijk al ons werk
                        <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-black text-white">
                            →
                        </span>
                    </button>
                </div>

                {/* Cards */}
                <div className="flex flex-col md:flex-row gap-8 lg:gap-14 2xl:gap-24 pt-8 md:pt-0">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            className={`relative group w-full md:w-1/3 border-[6px] md:border-[8px] overflow-hidden transition-transform duration-300 md:rotate-0 hover:-rotate-3
                                rounded-[40px] cursor-pointer
                                ${index === 1 ? "-rotate-2" : "rotate-2"}
                                ${index === 0 ? "md:translate-y-32" : ""}
                                ${index === 1 ? "md:translate-y-16" : ""}
                                ${index === 2 ? "md:translate-y-0" : ""}
                            `}
                            style={{ borderColor: card.color }}
                            onMouseEnter={() => !isMobile && setActiveIndex(index)}
                            onMouseLeave={() => !isMobile && setActiveIndex(null)}
                        >
                            {/* Video */}
                            <div className="relative h-[380px] lg:h-[500px] 2xl:h-[580px] w-full">
                                {isMobile ? (
                                    // mobile
                                    <video
                                        src={card.video}
                                        muted
                                        loop
                                        playsInline
                                        autoPlay
                                        preload="metadata"
                                        className="w-full h-full object-cover"
                                    />
                                ) : activeIndex === index ? (
                                    //Desktop hover 
                                    <video
                                        src={card.video}
                                        muted
                                        loop
                                        playsInline
                                        autoPlay
                                        preload="none"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    // Desktop thumbnail
                                    <img
                                        src={`/images/examples/card-${card.id}.avif`}
                                        alt={card.title}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>

                            {/* Overlay */}
                            <div className="absolute bottom-4 left-4 right-4 z-10">

                                {/* background shape */}
                                <div
                                    className="absolute inset-0 rounded-[22px]"
                                    style={{
                                        background: card.color,
                                        clipPath:
                                            "polygon(0% 28%, 100% 0%, 100% 100%, 0% 100%)",
                                    }}
                                />

                                {/* content */}
                                <div className="relative text-white p-4 md:p-6 pt-16 md:pt-20">
                                    <h3 className="text-xl md:text-3xl font-semibold leading-tight whitespace-pre-line">
                                        {card.title}
                                    </h3>

                                    <span className="inline-block mt-3 text-sm bg-white/25 px-3 py-2 rounded-md">
                                        {card.tag}
                                    </span>
                                </div>
                            </div>

                            {/* Arrow */}
                            <div className="absolute bottom-[130px] md:bottom-[180px] right-6 bg-white rounded-full p-3 shadow-lg z-20 overflow-hidden">
                                <div className="relative w-5 h-5">

                                    {/* main arrow */}
                                    <ArrowUpRight className="w-5 h-5 text-black transition-all duration-500 ease-in-out group-hover:translate-x-8 group-hover:-translate-y-8 opacity-100 group-hover:opacity-0" strokeWidth={2.8} />

                                    {/* incoming arrow */}
                                    <ArrowUpRight className="w-5 h-5 text-black absolute top-0 left-0 translate-x-[-8px] translate-y-[8px] opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" strokeWidth={2.8} />

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
