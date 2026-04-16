"use client";

import { useState, useEffect, useRef } from "react";

export default function BrandSection() {
    const brands = [
        "/images/brands/brand-1.svg",
        "/images/brands/brand-2.svg",
        "/images/brands/brand-3.svg",
        "/images/brands/brand-4.svg",
        "/images/brands/brand-5.svg",
        "/images/brands/brand-6.svg",
        "/images/brands/brand-7.svg",
        "/images/brands/brand-8.svg",
        "/images/brands/brand-9.svg",
        "/images/brands/brand-10.svg",
        "/images/brands/brand-11.svg",
    ];

    // duplicate for seamless loop
    const loopedBrands = [...brands, ...brands];

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [rotations, setRotations] = useState([]);

    const containerRef = useRef(null);
    const animationRef = useRef(null);

    // AUTO SCROLL
    useEffect(() => {
        const animate = () => {
            if (!isDragging) {
                setTranslateX((prev) => {
                    let newX = prev - 2; // speed

                    const totalWidth =
                        containerRef.current?.scrollWidth || 0;

                    const singleWidth = totalWidth / 2;

                    // 🔁 seamless loop reset
                    if (Math.abs(newX) >= singleWidth) {
                        newX = 0;
                    }

                    return newX;
                });
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationRef.current);
    }, [isDragging]);

    //  DRAG START
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);

        const randomRotations = brands.map(
            () => (Math.random() - 0.5) * 30
        );
        setRotations(randomRotations);
    };

    //  DRAG MOVE
    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const delta = e.clientX - startX;

        setTranslateX((prev) => prev + delta);
        setStartX(e.clientX);
    };

    //  DRAG END
    const handleMouseUp = () => {
        setIsDragging(false);
        setRotations([]);
    };

    return (
        <section className="w-full py-20 overflow-hidden">
            {/* TITLE */}
            <div className="px-6 md:px-16 mb-12">
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold">
                    These brands<br />got hyped.
                </h2>
            </div>

            {/* MARQUEE */}
            <div
                className="relative w-full cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <div
                    ref={containerRef}
                    className="flex w-max gap-2 md:gap-6"
                    style={{
                        transform: `translateX(${translateX}px)`,
                    }}
                >
                    {loopedBrands.map((logo, i) => {
                        const rotation =
                            rotations[i % brands.length] || 0;

                        return (
                            <div
                                key={i}
                                className="min-w-[120px] md:min-w-[320px] h-[120px] md:h-[320px] flex items-center justify-center bg-[#faf4ec] border border-black/40 rounded-2xl transition-transform duration-500"
                                style={{
                                    transform: isDragging
                                        ? `rotate(${rotation}deg) translateY(${Math.abs(
                                            rotation
                                        )}px)`
                                        : "rotate(0deg)",
                                }}
                            >
                                <img
                                    src={logo}
                                    alt="brand"
                                    className="max-w-[120px] md:max-w-[200px] object-contain pointer-events-none"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}