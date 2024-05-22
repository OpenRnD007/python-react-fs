import { ShipmentGrid } from "./components"
import { useSetShipmentListing } from "./hooks"

/**
* The Shipments component serves as the container for the shipment-related features.
* It initializes the shipment listing and renders the ShipmentGrid component.
*/
const Shipments = () => {
    // Custom hook to set the shipment listing in the store on component mount.
    useSetShipmentListing()
    return (
        <section className="pt-16 py-10 bg-gray-100">
            <ShipmentGrid />
            <div id="image-popup" />
        </section>
    )
}

export default Shipments

/**
 * Note:
 * The Shipments component is a functional component that uses the useSetShipmentListing hook to populate the store with shipment data when the component mounts. 
 * It renders a section element that contains the ShipmentGrid component, 
 * which displays the shipment cards in a grid layout. 
 * Additionally, there is a div with the ID image-popup that acts as a placeholder for modal popups. 
 * The component is styled with padding and a background color to fit the design of the application. 
 * The ShipmentGrid component is imported from the components directory, 
 * and the useSetShipmentListing hook is imported from the hooks directory. 
 * This structure ensures that the component is responsible only for initializing the state and rendering the grid layout, following best practices for component design in React.
 */