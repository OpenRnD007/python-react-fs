import { useState } from "react";

/**
* Type definition for the properties accepted by the Image component.
*/
export type ImageProps = {
    src: string;
    alt?: string;
    showSkeleton?: boolean,
    onclick?: React.MouseEventHandler<HTMLImageElement> | any;
};

/**
* The Image component is responsible for displaying an image with optional alt text.
* It can also show a skeleton screen while the image is loading.
* 
* @param {ImageProps} props - The properties passed to the component.
* @returns {React.ReactElement} - The rendered image element.
*/
const Image: React.FC<ImageProps> = ({ src, alt, showSkeleton, onclick }: ImageProps): React.ReactElement => {
    const [state, setState] = useState<boolean>(false) // State to track if the image has loaded.
    return (
        <>
            {showSkeleton && !state && <ImageSkeleton />} {/* Show the skeleton screen if the image hasn't loaded.*/}
            <img
                className="cursor-pointer"
                onClick={onclick}
                src={src}
                alt={alt}
                onLoad={() => showSkeleton && setState(true)}
            />
        </>
    )
}

export default Image

/**
* The ImageSkeleton component displays a placeholder skeleton screen while the image is loading.
* 
* @returns {React.ReactElement} - The rendered skeleton screen element.
*/
const ImageSkeleton: React.FC = (): React.ReactElement => {
    return (
        <div role="status" className="rounded-xl space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
            <div className="flex items-center justify-center w-[325px] h-[490px] bg-gray-300 rounded-xl">
                <svg className="w-10 h-10 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
            </div>
        </div>
    )
}