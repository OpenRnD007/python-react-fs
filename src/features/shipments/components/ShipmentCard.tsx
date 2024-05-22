import { Image, ImageModal } from "../../../components";
import { IShipment } from "../../../store";
import { useModal } from 'react-hooks-use-modal';

/**
* Type definition for the props of the ShipmentCard component.
*/
type ShipmentCardProps = {
    shipInfo: IShipment;
};

/**
* The ShipmentCard component is responsible for rendering individual shipment cards.
* It utilizes the Image and ImageModal components to display shipment images and handle modal interactions.
*
* @param {ShipmentCardProps} props - The properties passed to the component.
* @returns {React.ReactElement} - The rendered shipment card element.
*/
const ShipmentCard: React.FC<ShipmentCardProps> = ({ shipInfo }: ShipmentCardProps): React.ReactElement => {
    // Hook to manage modal state and interactions.
    const [Modal, open, close, _isOpen] = useModal('image-popup', {
        preventScroll: true
    });
    return (
        <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
            <div className="p-2">
                <h2 className="text-slate-800 font-semibold text-center">{shipInfo.title}</h2>
            </div>
            <div className="mt-1 relative flex items-end overflow-hidden rounded-xl">
                <Image
                    showSkeleton={true}
                    src={shipInfo.image}
                    alt={`${shipInfo.id} - ${shipInfo.title}`}
                    onclick={open}
                />
            </div>

            <Modal>
                <ImageModal src={shipInfo.image} alt={`${shipInfo.id} - ${shipInfo.title}`} close={close} />
            </Modal>
        </article>
    )
}

export default ShipmentCard

/**
 * Note
 * The ShipmentCard component displays a card with shipment information, including a title and an image. 
 * When the image is clicked, it opens a modal dialog with a larger view of the image, which can be closed by the user. 
 * The component uses the useModal hook from react-hooks-use-modal to manage the modal's state 
 * And provide functions to open and close the modal. 
 * The Image component is used to display the shipment's image with a skeleton screen while loading, 
 * And the ImageModal component is used to display the image within the modal dialog. 
 * The shipInfo prop is expected to be an object conforming to the IShipment type, containing the necessary information to render the card.
 */