"use client"

import {FocusCards} from "@/components/ui/focus-cards";
import {Button} from "@nextui-org/react";
import {Link} from "@nextui-org/link";

export default function SectionFour() {
    const cards = [
        {
            title: "Ảnh cưới 1",
            src: "/album/NHO02790.JPG",
        },
        {
            title: "Ảnh cưới 2",
            src: "/album/NHO02988.JPG",
        },
        {
            title: "Ảnh cưới 3",
            src: "/album/NHO03081.JPG",
        },
        {
            title: "Ảnh cưới 4",
            src: "/album/NHO03102.JPG",
        },
        {
            title: "Ảnh cưới 5",
            src: "/album/NHO03152.JPG",
        },
        {
            title: "Ảnh cưới 6",
            src: "/album/NHO03246.JPG",
        },
        {
            title: "Ảnh cưới 7",
            src: "/album/NHO03594.JPG",
        },
        {
            title: "Ảnh cưới 8",
            src: "/album/NHO03631.JPG",
        }, {
            title: "Ảnh cưới 9",
            src: "/album/NHO03653.JPG",
        },
        {
            title: "Ảnh cưới 10",
            src: "/album/NHO03668.JPG",
        },
        {
            title: "Ảnh cưới 11",
            src: "/album/NHO03956.JPG",
        },
        {
            title: "Ảnh cưới 12",
            src: "/album/NHO04177.JPG",
        },
        {
            title: "Ảnh cưới 13",
            src: "/album/NHO04275.JPG",
        }, {
            title: "Ảnh cưới 14",
            src: "/album/NHO04364.JPG",
        }, {
            title: "Ảnh cưới 15",
            src: "/album/NHO04406.JPG",
        }, {
            title: "Ảnh cưới 16",
            src: "/album/NHO04433.JPG",
        },
    ];

    return (
        <div className={"flex h-screen flex-col items-center overflow-y-scroll bg-[#FFFFF0]"}>
            <div className={"flex flex-col text-4xl font-bold mt-20 mb-10 text-black"}>
                <p>Album hình cưới</p>
                <Button
                    as={Link}
                    href={"https://www.flickr.com/photos/terasumi/albums/72177720322594599/"}
                    variant={"ghost"}
                    className={"text-xl bg-pink-300"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Xem toàn bộ album
                </Button>

            </div>
            <FocusCards cards={cards}/>
        </div>
    )
}