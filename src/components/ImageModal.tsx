import { useEscapeKeyDown } from "./hooks";

/**
* Type definition for the properties accepted by the ImageModal component.
*/
type ImageModalProps = {
    src: string;
    alt: string;
    close: any;
};

/**
* The ImageModal component is a modal dialog that displays an image and a close button.
* It uses the useEscapeKeyDown hook to allow closing the modal with the Escape key.
*
* @param {ImageModalProps} props - The properties passed to the component.
* @returns {React.ReactElement} - The rendered modal element.
*/
const ImageModal: React.FC<ImageModalProps> = ({ src, alt, close }: ImageModalProps): React.ReactElement => {

    // Hook that triggers the 'close' function when the Escape key is pressed.
    useEscapeKeyDown(close)

    return (
        <div
            className={`pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300`}>
            <div
                className="relative m-4 w-3/4 min-w-[75%] max-w-[75%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
                role="dialog">
                <div
                    className="flex items-center justify-between p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
                    <div className="flex items-center gap-3">
                        <div className="flex flex-col -mt-px">
                            <p className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                                {alt}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            className="select-none rounded-lg bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            onClick={() => close}
                        >
                            Close
                        </button>
                    </div>
                </div>
                <div
                    className="relative p-0 font-sans text-base antialiased font-light leading-relaxed border-t border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
                    <img
                        className="h-[70rem] w-full object-cover object-center"
                        src={src}
                        alt={alt}
                    />
                </div>
            </div>
        </div>
    )
}
export default ImageModal