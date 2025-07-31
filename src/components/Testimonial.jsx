import React from "react";
import { twMerge } from "tailwind-merge";

const Testimonial = ({
    img,
    name,
    position,
    heading,
    description,
    borderColor,
    bgColor,
    desColor,
    nameColor,
    positionColor,
    headingColor,
    className,
    pattern,
}) => {
    return (
        <div
            className={twMerge(
                "relative p-7 rounded-lg shadow-2xl",
                bgColor,
                className
            )}
        >
            <div className="relative z-50 flex items-center gap-4">
                <div
                    className={twMerge(
                        "w-7.5 h-7.5 rounded-full overflow-hidden border-2",
                        borderColor
                    )}
                >
                    <img src={img} alt={`${name}`} className="w-full" />
                </div>
                <div>
                    <g className={twMerge("text-[14px]", nameColor)}>{name}</g>
                    <p
                        className={twMerge(
                            "text-[13px] leading-[1]",
                            positionColor
                        )}
                    >
                        {position}
                    </p>
                </div>
            </div>
            <div className="relative z-50 ">
                <div>
                    <h2
                        className={twMerge(
                            "relative z-50 font-semibold text-[20px] mt-3.5 leading-[1.2]",
                            headingColor
                        )}
                    >
                        {heading}
                    </h2>
                </div>
                <div>
                    <p
                        className={twMerge(
                            "mt-3 text-[13px] leading-[1.45]",
                            desColor
                        )}
                    >
                        {description}
                    </p>
                </div>
            </div>
            {pattern && (
                <img
                    src={pattern}
                    alt="patter quota"
                    className="hidden lg:block absolute top-0 right-[10%] z-10"
                />
            )}
        </div>
    );
};

export default Testimonial;
