"use client"

interface CountDownProps {
    timeLeft: { [key: string]: number }
}

export default function CountDown(
    {
        timeLeft
    }: CountDownProps
) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 space-x-8 md:space-x-0 md:gap-8 max-w-4xl mx-auto">
            {Object.entries(timeLeft).map(([key, value]) => (
                <div key={key} className="flex flex-col items-center">
                    <div
                        className="flex aspect-square  items-center justify-center rounded-lg bg-background/10 backdrop-blur backdrop-saturate-150"
                    >
                        <div className={"p-4 "}>
                            <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-pink-200">
                                {value.toString().padStart(2, '0')}
                             </span>
                            <div className="text-center text-pink-200">
                                {
                                    key === 'days' ? 'Ngày' :
                                        key === 'hours' ? 'Giờ' :
                                            key === 'minutes' ? 'Phút' :
                                                key === 'seconds' ? 'Giây' : ''
                                }
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}