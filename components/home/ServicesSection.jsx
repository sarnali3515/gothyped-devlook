"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceSection from "./ServiceCard";

export default function ServicesSection() {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.ticker.lagSmoothing(0);

        const ctx = gsap.context(() => {
            let panels = gsap.utils.toArray(".section");
            // panels.pop(); 

            panels.forEach((panel) => {
                // Get the inner content
                let innerpanel = panel.querySelector(".section-inner");
                if (!innerpanel) return;

                // Get content height
                // let panelHeight = innerpanel.scrollHeight;
                // let windowHeight = window.innerHeight;

                // let difference = panelHeight - windowHeight;

                // Calculate fake scroll ratio for long content
                // let fakeScrollRatio = difference > 0
                //     ? difference / (difference + windowHeight)
                //     : 0;

                // Add margin for long content
                // if (fakeScrollRatio) {
                //     panel.style.marginBottom = panelHeight * fakeScrollRatio + "px";
                // }

                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: panel,
                        start: "top top",
                        // end: () => fakeScrollRatio
                        //     ? `+=${innerpanel.scrollHeight}`
                        //     : "bottom top",
                        end: "bottom top",
                        pin: true,
                        pinSpacing: false,
                        scrub: 1,
                    }
                });

                // Fake scroll for long content
                // if (fakeScrollRatio) {
                //     tl.to(innerpanel, {
                //         yPercent: -100,
                //         y: window.innerHeight,
                //         duration: 1 / (1 - fakeScrollRatio) - 1,
                //         ease: "none"
                //     });
                // }

                // Scale and fade effect
                tl.fromTo(panel,
                    { scale: 1, opacity: 1 },
                    { scale: 0.8, opacity: 0.9, rotate: -3, duration: 0.9 }
                ).to(panel, { opacity: 0, duration: 0.1 });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div>
            <div id="service-section" ref={containerRef} className="mt-16 space-y-0">
                <ServiceSection
                    title="Social strategy"
                    subtitle="Slimme strategie. Sterke start."
                    desc="We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt."
                    bg="bg-white"
                    video="/videos/services/section-1.mp4"
                    number="01"
                />

                <ServiceSection
                    title="Content creation"
                    subtitle="Content die opvalt en raakt."
                    desc="We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen."
                    bg="bg-[#fcb8fa]"
                    video="/videos/services/section-2.mp4"
                    number="02"
                />

                <ServiceSection
                    title="Activation"
                    subtitle="Zichtbaar waar en wanneer het telt."
                    desc="De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt."
                    bg="bg-[#33c791]"
                    video="/videos/services/section-3.mp4"
                    number="03"
                />
            </div>

            {/* last card */}
            <ServiceSection
                title="Data"
                subtitle="Inzichten die impact maken."
                desc="We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij."
                bg="bg-[#0d8dff]"
                video="/videos/services/section-4.mp4"
                number="04"
            />
        </div>
    );
}