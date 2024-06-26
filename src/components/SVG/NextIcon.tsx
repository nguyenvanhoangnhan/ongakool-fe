import React, { FC, useEffect, useRef, useState } from "react"

export type NextIconProps = {
    fill?: string
    hoverFill?: string
}

const NextIcon: FC<NextIconProps> = ({
    fill = "white",
    hoverFill = "white",
}) => {
    const [_fill, setFill] = useState(fill)

    const ref = useRef<SVGSVGElement>(null)

    useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener("mouseenter", () => {
                if (hoverFill) {
                    setFill(hoverFill)
                }
            })
            ref.current.addEventListener("mouseleave", () => {
                setFill(fill)
            })
        }
    }, [])

    return (
        <svg
            ref={ref}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.30975 20.09C5.73975 20.09 5.17976 19.94 4.65976 19.64C3.61976 19.04 3.00977 17.98 3.00977 16.78V7.21001C3.00977 6.02001 3.62976 4.95002 4.65976 4.35002C5.69976 3.75002 6.92975 3.75002 7.95975 4.35002L16.2498 9.13002C17.2798 9.73002 17.8997 10.8 17.8997 11.99C17.8997 13.18 17.2798 14.25 16.2498 14.85L7.95975 19.63C7.43975 19.94 6.87975 20.09 6.30975 20.09ZM6.30975 5.41002C5.99975 5.41002 5.68976 5.49001 5.40976 5.65001C4.84976 5.98001 4.50977 6.56001 4.50977 7.21001V16.78C4.50977 17.43 4.84976 18.01 5.40976 18.34C5.96976 18.66 6.64975 18.67 7.20975 18.34L15.4998 13.56C16.0598 13.23 16.3997 12.65 16.3997 12C16.3997 11.35 16.0598 10.77 15.4998 10.44L7.20975 5.66002C6.92975 5.50002 6.61975 5.41002 6.30975 5.41002Z"
                fill={_fill}
                // fill-opacity="0.6"
            />
            <path
                d="M20.2402 18.9301C19.8302 18.9301 19.4902 18.5901 19.4902 18.1801V5.82007C19.4902 5.41007 19.8302 5.07007 20.2402 5.07007C20.6502 5.07007 20.9902 5.41007 20.9902 5.82007V18.1801C20.9902 18.5901 20.6602 18.9301 20.2402 18.9301Z"
                fill={_fill}
                // fill-opacity="0.6"
            />
        </svg>
    )
}

export default NextIcon
