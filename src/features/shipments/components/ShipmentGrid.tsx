import { IShipment, useStore } from "../../../store";
import ShipmentCard from "./ShipmentCard"
import { ReactSortable } from "react-sortablejs";

/**
* The ShipmentGrid component is responsible for rendering a grid of shipment cards.
* It allows for the reordering of shipment cards via drag-and-drop functionality provided by ReactSortable.
*/
const ShipmentGrid: React.FC = (): React.ReactElement => {
    const shipments: IShipment[] = useStore((state) => state.shipments);
    const fetchShipmentsApi = useStore((state) => state.fetchShipmentsApi);

    return (

        <ReactSortable
            list={shipments}
            setList={fetchShipmentsApi}
            className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3"
        >
            {shipments.map((shipment) =>
                <ShipmentCard
                    key={shipment.id}
                    shipInfo={shipment}
                />
            )}
        </ReactSortable>

    )
}

export default ShipmentGrid

/**
 * Note:
 * The ShipmentGrid component displays a collection of ShipmentCard components in a grid layout. 
 * It uses the ReactSortable component to enable drag-and-drop sorting of the shipment cards. 
 * The shipments array is sourced from the application's state management store, 
 * and the fetchShipmentsApi function is used to update the state when the order of the shipments changes. 
 * Each ShipmentCard is rendered with a unique key and the shipment information passed as props. 
 * The grid layout is responsive, adjusting the number of columns based on the screen size.
 */