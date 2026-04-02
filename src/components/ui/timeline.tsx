"use client";
import {
    useMotionValueEvent,
    useScroll,
    useTransform,
    motion,
} from "motion/react";
import React, {useEffect, useRef, useState} from "react";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline = ({data}: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    // const containerRef = useRef<any>(null);
    const [height, setHeight] = useState(1000);

    // useEffect(() => {
    //     if (ref.current) {
    //         const rect = ref.current.getBoundingClientRect();
    //         setHeight(rect.height);
    //     }
    // }, [ref]);

    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full font-sans md:px-10"
            color={""}
            ref={containerRef}
        >

            <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                <h2 className="text-lg md:text-4xl mb-4 text-black max-w-4xl motion-preset-shrink motion-duration-2000 font-geist-mono">
                    ♥ Hành Trình Tình Yêu: Chuyện Đôi Ta
                </h2>
                <TextGenerateEffect
                    words={"Từ những ngày đầu gặp gỡ, qua từng khoảnh khắc ngọt ngào đến những dấu mốc đáng nhớ, cùng nhau vẽ nên bức tranh tình yêu rực rỡ. Hãy cùng nhìn lại hành trình đặc biệt mà chỉ đôi ta hiểu!"}/>
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-40 md:gap-10"
                    >
                        <div
                            className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div
                                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-pink-100 flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-pink-400 border border-neutral-300 p-2"/>
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-pink-400 font-geist-mono">
                                {item.title}
                            </h3>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
                                {item.title}
                            </h3>
                            {item.content}{" "}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[3px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
