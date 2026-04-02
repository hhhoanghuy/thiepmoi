"use client"

import Image from "next/image";
import React from "react";
import {Timeline} from "@/components/ui/timeline";

import img_2020 from "@/assets/timeline/2020.jpeg";
import img_2021a from "@/assets/timeline/2021a.jpg";
import img_2021b from "@/assets/timeline/2021b.jpg";
import img_2022a from "@/assets/timeline/2022a.jpg";
import img_2023 from "@/assets/timeline/2023.jpg";
import img_2023a from "@/assets/timeline/2023a.jpg";
import img_2023b from "@/assets/timeline/2023b.jpg";
import img_2024a from "@/assets/timeline/2024a.jpeg";
import img_2024b from "@/assets/timeline/2024b.jpg";
import img_2024c from "@/assets/timeline/2024c.jpeg";
import img_2024d from "@/assets/timeline/2024d.jpg";
import hero from "@/assets/hero.webp";
import {Spacer} from "@nextui-org/react";
import { motion } from "motion/react"



export default function SectionThree() {
    const data = [
        {
            title: "2020",
            content: (
                <div>
                    <p className={"text-black text-xl font-geist-mono"}>
                        Chúng mình học cùng lớp hồi đại học đã từng là bạn &#34; khá thân &#34; từ hồi mới vào học.
                        Đã
                        từng nói
                        với nhau&#34; Ê ! Mày có chó nó lấy&#34; . Và chúng mình cũng chưa từng nghĩ sẽ có ngày yêu
                        nhau.
                        Vậy mà sau
                        gần 5 năm, giờ đây chúng mình đã sắp ở một &#34; Cương vị mới &#34; và sắp kêu &#34;gâu
                        gâu&#34; ^^
                    </p>
                    <div className={"grid justify-center grid-cols-1 md:grid-cols-2 gap-2 "}>
                        <Image
                            src={img_2020}
                            alt="2020"
                            className="rounded-lg motion-preset-shrink motion-duration-2000 "
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2021",
            content: (
                <div>
                    <p className={"text-black text-xl font-geist-mono"}>
                        Thời điểm đó, chúng mình đều đang độc thân. <br/> Phượng ở Quốc Oai còn mình ở Hà Nam, do
                        ảnh
                        hưởng của dịch covid nên cơ hội gặp nhau không nhiều. <br/>Dù vậy chúng mình vẫn luôn dành thời
                        gian
                        tâm sự, chia sẻ với nhau những câu chuyện trong thời gian học online tại nhà.

                    </p>
                    <div className={"grid justify-center grid-cols-1 md:grid-cols-2 gap-2"}>
                        <Image
                            src={img_2021a}
                            alt="2020"
                            className="rounded-lg"
                        />
                        <Image
                            src={img_2021b}
                            alt="2020"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div>
                    <p className={"text-black text-xl font-geist-mono"}>
                        Năm 2022 ảnh hưởng của dịch giảm dần, chúng mình quay trở lại giảng đường và có nhiều thời
                        gian đi chơi cùng nhau hơn. <br/>
                        Và rồi tới 1 ngày đặc biệt, ngày 11/05/2022 khi cả 2 đã suy nghĩ đủ kỹ về mối quan hệ, thì chúng
                        mình đã quyết định nói hết cảm xúc của mình với đối phương. <br/> Và sau ngày định mệnh đó, đã
                        có &#34;
                        Chúng mình của hiện tại&#34;

                    </p>
                    <div className={"grid justify-center grid-cols-1 md:grid-cols-2 gap-2"}>
                        <Image
                            src={img_2022a}
                            alt="2020"
                            className="rounded-lg"
                        />
                        <Image
                            src={img_2023}
                            alt="2020"
                            className="rounded-lg"
                        />
                    </div>

                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div className={""}>
                    <p className={"text-black text-xl font-geist-mono"}>
                        Đầu năm 2023, chúng mình bắt đầu thực tập ở cùng một công ty và từ đây chúng mình gần như dành
                        phần lớn thới gian cho nhau. &#34;Sáng đèo nhau đi học chiều lai nhau đi làm ^^&#34;. Đây cũng
                        là khoảng
                        thời gian vui vẻ nhất trong 4 năm sinh viên của chúng mình. Cùng nhau học tập, làm việc, ăn
                        chơi,...
                    </p>
                    <div className={"justify-center grid grid-cols-1 md:grid-cols-2 gap-2"}>
                        <Image
                            src={img_2023a}
                            alt="2020"
                            className="rounded-lg motion-preset-slide-right "
                        />
                        <Image
                            src={img_2023b}
                            alt="2020"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2024",
            content: (
                <div>
                    <p className={"text-black text-xl font-geist-mono"}>
                        Ngày chung đôi: Hơn 2 năm tình bạn, và 2 năm tình yêu không phải là quãng thời gian quá
                        dài, nhưng cũng không quá ngắn, đủ để chúng mình nhận ra nhiều điều. <br/> Cuối cùng ngày vui
                        nhất của
                        chúng mình cũng tới rồi. Cảm ơn vì chúng ta đã luôn là một phần trong cuộc sống của nhau. Em
                        và
                        anh không chỉ là người yêu mà còn là huynh đệ. <br/>Kể từ Ngày hôm nay, em là em, anh là anh và
                        chúng
                        ta là Một gia đình hạnh phúc.
                    </p>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-2"}>
                        <Image
                            src={img_2024a}
                            alt="2020"
                            className="rounded-lg"
                        />
                        <Image
                            src={img_2024b}
                            alt="2020"
                            className="rounded-lg"
                        />
                        <Image
                            src={img_2024c}
                            alt="2020"
                            className="rounded-lg"
                        />
                        <Image
                            src={img_2024d}
                            alt="2020"
                            className="rounded-lg"
                        />
                    </div>

                </div>
            ),
        },
        {
            title: "NOW AND FOREVER",
            content: (
                <div>
                    <Image
                        src={hero}
                        alt="2020"
                        className="rounded-lg"
                    />
                </div>
            ),
        },
    ];
    return (
        <div className="w-full h-screen overflow-y-scroll bg-[#FFFFF0]"
        >
            <Timeline data={data}/>
            <Spacer y={24}/>

        </div>
    );
}
