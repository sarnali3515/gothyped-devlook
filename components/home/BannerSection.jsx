"use client";
import { useEffect, useState } from "react";

export default function HypeSection() {
    const [active, setActive] = useState(null);
    const [rotations, setRotations] = useState([]);


    const cards = [
        { type: "blue", title: "10M+", text: "Organische views", subtext: "Groei door slimme content" },
        { type: "video1" },
        { type: "green", title: "30+", text: "Merken geholpen", subtext: "Van start-up tot multinational" },
        { type: "video2" },
    ];

    useEffect(() => {
        const randomAngles = cards.map(() => (Math.random() * 20 - 10));
        // -10deg to +10deg
        setRotations(randomAngles);
    }, []);


    return (
        <section className="bg-[#faf4ec] py-24 lg:pt-28 px-3 sm:px-6 md:px-16 overflow-hidden">
            <div className="max-w-7xl lg:max-w-[1400px] xl:max-w-[1600px] 2xl:max-[2000px] mx-auto">

                {/* Heading */}
                <div className="mb-16">
                    {/* Mobile version */}
                    <h1 className="text-5xl font-bold leading-tight sm:hidden">
                        Get Hyped.<br />
                        Get Noticed.<br />
                        Get Results.
                    </h1>

                    {/* Desktop version */}
                    <h1 className="hidden sm:block text-5xl md:text-6xl lg:text-7xl xl:text-[100px] 2xl:text-[120px] font-semibold tracking-tighter">
                        Get Hyped. Get <br /> Noticed. Get Results.
                    </h1>
                    <p className="text-lg sm:text-2xl font-bold mt-5">Klaar met gokken op content <br />
                        die niets oplevert?</p>
                </div>

                {/* Cards */}
                <div className="flex justify-center items-center relative">
                    {cards.map((card, i) => {
                        const isActive = active === i;

                        // distance from active card
                        const distance = active !== null ? i - active : 0;

                        return (
                            <div
                                key={i}
                                onMouseEnter={() => setActive(i)}
                                // onMouseLeave={() => setActive(null)}
                                onMouseLeave={() => {
                                    const randomAngle = Math.random() * 20 - 10; // -10 to +10

                                    setRotations((prev) => {
                                        const updated = [...prev];
                                        updated[i] = randomAngle;
                                        return updated;
                                    });

                                    setActive(null);
                                }}
                                className={`
        relative w-[250px] md:w-[420px] xl:w-[430]
        h-[250px] md:h-[520px] xl:h-[560px]
        rounded-xl lg:rounded-[50px] overflow-hidden
        transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]

        ${i !== 0 ? "-ml-10 sm:-ml-10" : ""}

        ${i === 0 ? "z-30 sm:z-10" : ""}
        ${active === i ? "z-40" : "z-10"}

        ${i > 1 ? "hidden sm:block" : ""}
        ${i > 2 ? "sm:hidden md:block" : ""}
    `}
                                style={{
                                    transform:
                                        active !== null
                                            ? active === i
                                                ? "scale(1.1) rotate(0deg)"
                                                : `${i < active
                                                    ? "translateX(-170px)"
                                                    : i > active
                                                        ? "translateX(170px)"
                                                        : ""
                                                } rotate(${rotations[i]}deg)`
                                            : `rotate(${rotations[i]}deg)`
                                }}
                            >

                                {/* Content */}
                                {card.type === "blue" && (
                                    <div className="bg-blue-500 p-3 lg:p-8 h-full flex flex-col justify-between">
                                        <h2 className="text-4xl lg:text-7xl font-bold">
                                            {card.title}
                                        </h2>
                                        <div>
                                            <p className="text-lg md:text-3xl font-semibold border-b border-black pb-1">{card.text}</p>
                                            <p className="text-xs lg:text-base pt-1 font-semibold">{card.subtext}</p>
                                        </div>
                                    </div>
                                )}

                                {card.type === "green" && (
                                    <div className="bg-emerald-400 p-3 lg:p-8 h-full flex flex-col justify-between">
                                        <h2 className="text-4xl lg:text-7xl font-bold">
                                            {card.title}
                                        </h2>
                                        <div>
                                            <p className="text-lg md:text-3xl font-semibold border-b border-black pb-1">{card.text}</p>
                                            <p className=" pt-1 font-semibold">{card.subtext}</p>
                                        </div>
                                    </div>
                                )}

                                {card.type === "video1" && (
                                    <video
                                        src="/videos/banner-1.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                )}

                                {card.type === "video2" && (
                                    <>
                                        <video
                                            src="/videos/banner-2.mp4"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="w-full h-full object-cover"
                                        />

                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}