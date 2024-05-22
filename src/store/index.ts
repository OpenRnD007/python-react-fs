import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
* Type definition for a shipment object.
*/
export type IShipment = {
    id: number,
    type: string,
    title: string,
    position: number,
    image: string
}

/**
* Interface defining the shape of the store's state.
*/
interface StoreState {
    shipments: IShipment[]; // Array of shipment objects.
    fetchShipmentsApi: (data: IShipment[]) => void; // Function to populate shipments with dummy data.
    showLastUpdated: string;
    fetchNewData: boolean;
    setShowLastUpdated: (time: string) => void;
    setFetchNewData: (flag: boolean) => void;
}

// Create the store with Zustand and add persistence.
export const useStore = create<StoreState>()(persist((set) => ({
    shipments: [], // Initial state of shipments is an empty array.
    showLastUpdated: '',
    fetchNewData: false,
    // Function to populate the 'shipments' state with provided dummy data.
    fetchShipmentsApi: (data: IShipment[]) => {
        set({ shipments: data })
    },
    // Function to set last version datetime.
    setShowLastUpdated: (time: string) => {
        set({ showLastUpdated: time })
    },
    //function to toggle the newData state loading.
    setFetchNewData: (flag: boolean) => {
        set({ fetchNewData: flag })
    },
}), {
    "name": "meow-store"
}))



/**
 * Note
 * The store manages the state of shipments, 
 * providing functions to populate this state with either dummy data or data fetched from a server. 
 * The persist middleware is used to persist the store's state across sessions. 
 * The fetchShipmentsAPI function is designed to be abortable, allowing for cancellation of in-flight requests, 
 * which is particularly useful for handling component unmounts or navigations. 
 * The store is named 'meeow-store' for persistence, 
 * The IShipment type defines the structure of a shipment object within the store's state.
 */