"use client"

import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/card";
import {Button, Spacer} from "@nextui-org/react";
import {Calendar, MapPin} from "lucide-react";
import Image from "next/image";

import {Link} from "@nextui-org/link";
import hero from "@/assets/hero.webp";

export default function SectionFive() {
    return (
        <div className="w-screen h-screen relative overflow-y-scroll md:overflow-y-hidden">
            <div className="absolute inset-0">
                <Image
                    src={hero}
                    alt="Hero Image"
                    fill
                    sizes="100vw"
                    quality={50} // Adjust quality as needed
                    style={{objectFit: "cover"}}
                />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-75"></div>

            {/* Lịch trình Grid */}
            <div className="w-full min-h-screen flex flex-col justify-start items-center px-4 py-8 ">
                <div className={"text-4xl font-bold mt-20 text-white"}>
                    Lịch trình
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
                    <Card className="w-full max-w-md mx-auto">
                        <CardBody className="p-0">
                            <div className="relative h-[300px]">
                                <Image
                                    alt="Wedding table setting with pink roses"
                                    src="/home.jpg"
                                    fill
                                    objectFit="cover"
                                />
                            </div>
                        </CardBody>

                        <CardBody className="text-center px-8 pt-6">
                            <h1 className="text-3xl font-medium tracking-wide text-[#FF4D6D] mb-4">
                                TIỆC CƯỚI NHÀ TRAI
                            </h1>

                            <div className="flex items-center justify-center gap-2 text-lg mb-4 text-black">
                                <Calendar className="w-5 h-5 flex-shrink-0"/>
                                <span>09:00 26/12/2024</span>
                            </div>

                            <Link
                                href="https://maps.app.goo.gl/TD8yiC5La4z65GYr7"
                                className="flex items-center justify-center gap-2 text-lg mb-6"
                            >
                                <MapPin className="w-5 h-5 flex-shrink-0 mt-1"/>
                                <span>An Thái, Bình Mỹ, Bình Lục, Hà Nam</span>
                            </Link>
                        </CardBody>

                        <CardFooter className="px-8 pb-6">
                            <Button
                                color="danger"
                                className="w-full bg-[#FF4D6D]"
                                size="lg"
                            >
                                THÊM VÀO LỊCH
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="w-full max-w-md mx-auto">
                        <CardBody className="p-0">
                            <div className="relative h-[300px]">
                                <Image
                                    alt="Wedding table setting with pink roses"
                                    src="/home.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </CardBody>

                        <CardBody className="text-center px-8 pt-6">
                            <h1 className="text-3xl font-medium tracking-wide text-[#FF4D6D] mb-4">
                                TIỆC CƯỚI NHÀ GÁI
                            </h1>

                            <div className="flex items-center justify-center gap-2 text-lg mb-4 text-black">
                                <Calendar className="w-5 h-5 flex-shrink-0"/>
                                <span>09:00 26/12/2024</span>
                            </div>

                            <Link
                                href="https://maps.app.goo.gl/y9JLbYP9AB4zLdLs6"
                                className="flex items-center justify-center gap-2 text-lg mb-6"
                            >
                                <MapPin className="w-5 h-5 flex-shrink-0 mt-1"/>
                                <span
                                    className="flex-1">Xóm 4, Thôn Hoà Trúc, Xã Hoà Thạch, Huyện Quốc Oai, TP Hà Nội</span>
                            </Link>
                        </CardBody>

                        <CardFooter className="px-8 pb-6">
                            <Button
                                color="danger"
                                className="w-full bg-[#FF4D6D]"
                                size="lg"
                            >
                                THÊM VÀO LỊCH
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                <Spacer y={24}/>
            </div>
        </div>
    )
}