"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import Image from "next/image"
import { Card, CardHeader, CardBody } from "@nextui-org/card"

import bride from "@/assets/bride.png"
import groom from "@/assets/groom.png"

export default function CoupleCards() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    return (
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
            <motion.div
                initial={{opacity: 0, y: 50}}
                animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                transition={{duration: 0.5, ease: "easeOut"}}
                className="flex"
            >
                <Card
                    className="flex flex-col w-full max-w-[450px] p-4 md:p-6 bg-white/20 backdrop-blur-md hover:bg-white/30 mx-auto">
                    <CardHeader className="flex flex-col items-center pb-4 md:pb-6">
                        <motion.h3
                            initial={{y: -20, opacity: 0}}
                            animate={isInView ? {y: 0, opacity: 1} : {y: -20, opacity: 0}}
                            transition={{delay: 0.2, duration: 0.4}}
                            className="text-xl md:text-3xl font-semibold text-white"
                        >
                            Chú rể
                        </motion.h3>
                    </CardHeader>
                    <CardBody className="flex flex-col items-center gap-4 md:gap-6 overflow-hidden flex-grow">
                        <motion.div
                            initial={{scale: 0.8, opacity: 0}}
                            animate={isInView ? {scale: 1, opacity: 1} : {scale: 0.8, opacity: 0}}
                            transition={{delay: 0.3, duration: 0.5}}
                            className="relative w-48 h-48 md:w-64 md:h-64"
                        >
                            {/* Container with background */}
                            <div className="relative w-full h-full p-2">
                                {/* Image container */}
                                <div className="relative w-full h-full rounded-full bg-pink-100 ">
                                    <Image
                                        src={"/groom.png"}
                                        alt={"Chú rể"}
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                {/* SVG Border container */}
                                <div className="absolute inset-0 z-10 ml-2">
                                    <Image
                                        src="/6.svg"
                                        alt="Border"
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="scale-110"
                                    />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{y: 20, opacity: 0}}
                            animate={isInView ? {y: 0, opacity: 1} : {y: 20, opacity: 0}}
                            transition={{delay: 0.5, duration: 0.4}}
                            className="text-center flex-grow flex flex-col justify-between"
                        >
                            <div>
                                <h2 className="text-3xl md:text-4xl text-white mb-2 md:mb-4">
                                    Đỗ Trung Huyên
                                </h2>
                                <div className="text-white text-lg md:text-xl space-y-1 md:space-y-2">
                                    <p>Con ông: Đỗ Trung Việt</p>
                                    <p>Con bà: Nguyễn Thị Bằng</p>
                                </div>
                            </div>
                            <p className="mt-3 md:mt-4 text-white text-sm max-w-sm mx-auto leading-relaxed">
                                Là một người thân thiện, hòa đồng. Thích đi du lịch, thích kiếm tiền và tiêu
                                tiền. Đặc biệt là &quot;Thích Phượng&quot;. Luôn coi trọng tình cảm và yêu thương
                                gia đình.
                            </p>
                        </motion.div>
                    </CardBody>
                    <div className="absolute top-10 left-5 w-16 h-16 border-l-3 border-t-3 border-pink-200"/>
                    <div className="absolute top-10 right-5 w-16 h-16 border-r-3 border-t-3 border-pink-200"/>
                    <div className="absolute bottom-8 left-5 w-16 h-16 border-l-3 border-b-3 border-pink-200"/>
                    <div className="absolute bottom-8 right-5 w-16 h-16 border-r-3 border-b-3 border-pink-200"/>
                </Card>
            </motion.div>

            <motion.div
                initial={{opacity: 0, y: 50}}
                animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                transition={{duration: 0.5, ease: "easeOut", delay: 0.2}}
                className="flex"
            >
                <Card
                    className="flex flex-col w-full max-w-[450px] p-4 md:p-6 bg-white/20 backdrop-blur-md hover:bg-white/30 mx-auto">
                    <CardHeader className="flex flex-col items-center pb-4 md:pb-6">
                        <motion.h3
                            initial={{y: -20, opacity: 0}}
                            animate={isInView ? {y: 0, opacity: 1} : {y: -20, opacity: 0}}
                            transition={{delay: 0.4, duration: 0.4}}
                            className="text-xl md:text-3xl font-semibold text-white tracking-wider"
                        >
                            Cô dâu
                        </motion.h3>
                    </CardHeader>
                    <CardBody className="flex flex-col items-center gap-4 md:gap-6 flex-grow overflow-hidden">
                        <motion.div
                            initial={{scale: 0.8, opacity: 0}}
                            animate={isInView ? {scale: 1, opacity: 1} : {scale: 0.8, opacity: 0}}
                            transition={{delay: 0.3, duration: 0.5}}
                            className="relative w-48 h-48 md:w-64 md:h-64"
                        >
                            {/* Container with background */}
                            <div className="relative w-full h-full p-2">
                                {/* Image container */}
                                <div className="relative w-full h-full rounded-full bg-pink-100 ">
                                    <Image
                                        src={bride}
                                        alt={"Cô dâu"}
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                {/* SVG Border container */}
                                <div className="absolute inset-0 z-10 ml-2">
                                    <Image
                                        src="/6.svg"
                                        alt="Border"
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="scale-110"
                                    />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{y: 20, opacity: 0}}
                            animate={isInView ? {y: 0, opacity: 1} : {y: 20, opacity: 0}}
                            transition={{delay: 0.7, duration: 0.4}}
                            className="text-center flex-grow flex flex-col justify-between"
                        >
                            <div>
                                <h2 className="text-3xl md:text-4xl font-dancing-script text-white mb-2 md:mb-4">
                                    Nguyễn Thị Phượng
                                </h2>
                                <div className="text-white text-lg md:text-xl space-y-1 md:space-y-2">
                                    <p>Con ông: Nguyễn Quang Lô</p>
                                    <p>Con bà: Hoàng Thị Vang</p>
                                </div>
                            </div>
                            <p className="mt-3 md:mt-4 text-white text-sm max-w-sm mx-auto leading-relaxed">
                                Là một người hay cười nhưng lại sống nội tâm và hay khóc thầm, không thích gặp
                                nhiều người nhưng thích đi chơi, thích đi du lịch, không thích trồng hoa nhưng
                                thích cắm hoa. Và mình cũng cực thích Huyên; nữa :3
                            </p>
                        </motion.div>
                    </CardBody>

                    <div className="absolute top-10 left-5 w-16 h-16 border-l-3 border-t-3 border-pink-200"/>
                    <div className="absolute top-10 right-5 w-16 h-16 border-r-3 border-t-3 border-pink-200"/>
                    <div className="absolute bottom-8 left-5 w-16 h-16 border-l-3 border-b-3 border-pink-200"/>
                    <div className="absolute bottom-8 right-5 w-16 h-16 border-r-3 border-b-3 border-pink-200"/>
                </Card>
            </motion.div>
        </div>
    )
}

