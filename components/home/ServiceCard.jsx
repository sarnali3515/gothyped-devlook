export default function ServiceSection({ title, subtitle, desc, bg, video, number = "01" }) {
    const isFirst = number === "01";

    return (
        <section className="section h-screen flex items-center justify-center">

            {/* CARD WRAPPER */}
            <div className={`relative w-full max-w-7xl lg:max-w-[1400px] xl:max-w-[1700px] rounded-3xl md:rounded-[36px] ${bg} h-[calc(100vh-6.5rem)] overflow-hidden`}>

                {/* NUMBER */}
                <div className="absolute right-4 md:right-10 top-8 md:top-20 text-[40px] md:text-[110px] font-bold text-black/10 select-none leading-none">
                    {number}
                </div>

                <div className="section-content w-full h-full">
                    <div className="section-inner h-full flex flex-col justify-center">

                        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 px-6 md:px-16 py-10 md:py-16">

                            {/* LEFT CONTENT - Desktop */}
                            <div className="hidden lg:flex flex-col justify-between h-full min-w-0">

                                {/* TOP */}
                                <div>
                                    <span className={`px-2 md:px-3 py-1 md:py-2 text-sm md:text-xl font-semibold rounded-md w-fit mb-2 md:mb-6 inline-block ${isFirst ? "bg-black/10" : "bg-white"}`}>
                                        Expertise
                                    </span>

                                    <h1 className="text-4xl md:text-6xl lg:text-[120px] font-bold tracking-tighter leading-tight md:whitespace-nowrap">
                                        {title}
                                    </h1>
                                </div>

                                {/* BOTTOM */}
                                <div className="mt-6 lg:mt-0">
                                    <p className="text-md md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight">
                                        {subtitle}
                                    </p>

                                    <p className="max-w-md text-sm md:text-xl font-semibold text-gray-900 mb-6 tracking-tight">
                                        {desc}
                                    </p>

                                    <button className={`mt-4 flex items-center gap-3 border rounded-xl px-3 py-2 text-sm md:text-base font-semibold cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:skew-x-[8deg] hover:skew-y-[-4deg] hover:scale-x-110 hover:scale-y-105 hover:rounded-lg ${isFirst
                                        ? "bg-[#fa5424] text-white border-[#fa5424]"
                                        : "bg-white text-black"
                                        }`}>
                                        Leer ons kennen
                                        <span className={`w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-lg ${isFirst ? "bg-white text-black" : "bg-black text-white"}`}>
                                            →
                                        </span>
                                    </button>
                                </div>

                            </div>

                            {/* RIGHT VIDEO - Desktop */}
                            <div className="hidden lg:flex items-center lg:items-end justify-center lg:justify-end relative mt-8 lg:mt-0">

                                <div
                                    className={`relative z-10 rotate-0 lg:rotate-3 rounded-3xl overflow-hidden border-4 md:border-8 shadow-2xl ${isFirst
                                        ? "border-[#fa5424] bg-[#fa5424]"
                                        : "border-white bg-white"
                                        }`}
                                >
                                    <video
                                        src={video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-[220px] md:w-[350px] h-[320px] md:h-[470px] object-cover"
                                    />
                                </div>

                            </div>

                            {/* MOBILE LAYOUT */}
                            <div className="lg:hidden flex flex-col h-full justify-center gap-4">

                                {/* Title */}
                                <div>
                                    <span className={`px-2 py-1 text-sm font-semibold rounded-md w-fit inline-block ${isFirst ? "bg-black/10" : "bg-white"}`}>
                                        Expertise
                                    </span>
                                    <h1 className="text-4xl font-bold tracking-tighter leading-tight mt-2">
                                        {title}
                                    </h1>
                                </div>

                                {/* Video */}
                                <div className="flex justify-start ml-5 -rotate-3">
                                    <div
                                        className={`relative z-10 rounded-3xl overflow-hidden border-4 shadow-2xl ${isFirst
                                            ? "border-[#fa5424] bg-[#fa5424]"
                                            : "border-white bg-white"
                                            }`}
                                    >
                                        <video
                                            src={video}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-[180px] h-[230px] object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Subtitle, Desc, Button */}
                                <div className="mt-2">
                                    <p className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
                                        {subtitle}
                                    </p>
                                    <p className="text-sm font-semibold text-gray-900 mb-4 tracking-tight">
                                        {desc}
                                    </p>
                                    <button className={`flex items-center gap-3 border rounded-xl px-3 py-2 text-sm font-semibold cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:skew-x-[8deg] hover:skew-y-[-4deg] hover:scale-x-110 hover:scale-y-105 hover:rounded-lg ${isFirst
                                        ? "bg-[#fa5424] text-white border-[#fa5424]"
                                        : "bg-white text-black"
                                        }`}>
                                        Leer ons kennen
                                        <span className={`w-7 h-7 flex items-center justify-center rounded-lg ${isFirst ? "bg-white text-black" : "bg-black text-white"}`}>
                                            →
                                        </span>
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}