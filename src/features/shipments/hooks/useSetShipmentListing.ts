import { useEffect } from "react"
//import { dummyShipments } from "../../../store/dummyData"
import { IShipment, useStore } from "../../../store"
import { makePostApiCall } from "../../../utils/apiCall";

/**
* This custom hook is responsible for initializing the shipment data in the store when the component mounts.
* It fetches shipment data from an API and updates the store accordingly.
* The hook is designed to be used in conjunction with interval-based updates and data fetching logic elsewhere in the application.
*/
const useSetShipmentListing = (): void => {
    const fetchShipmentsApi = useStore((state: { fetchShipmentsApi: (shipments: IShipment[]) => void }) => state.fetchShipmentsApi);
    const setShowLastUpdated = useStore((state: { setShowLastUpdated: (time: string) => void }) => state.setShowLastUpdated);
    const setFetchNewData = useStore((state: { setFetchNewData: (flag: boolean) => void }) => state.setFetchNewData);
    const showLastUpdated = useStore((state) => state.showLastUpdated);


    const getAllData = (controller: AbortController) => {
        setFetchNewData(true)
        makePostApiCall(import.meta.env.VITE_API_URL, {
            'rf': showLastUpdated
        }, controller)
            .then(resp => {
                if (resp) {
                    if (resp.shipping && resp.shipping.length) {
                        fetchShipmentsApi(resp.shipping);
                        setShowLastUpdated(resp.version.datetime)
                    }
                }
            })
            .finally(() => {
                setFetchNewData(false)
            })
    }

    useEffect(() => {
        const controller = new AbortController();
        getAllData(controller)
        const intervalId = setInterval(() => {
            getAllData(controller)
        }, import.meta.env.VITE_SET_API_CALL_TIMEOUT)
        return () => {
            controller.abort()
            clearInterval(intervalId)
        }
    }, [fetchShipmentsApi, showLastUpdated]);
}

export default useSetShipmentListing;

/**
 * Note
 * The useSetShipmentListing hook is part of the application's state management logic. 
 * It leverages the useStore hook to dispatch an action that populates the store shipping items. 
 * This hook should be used within a component that requires the shipment data to be initialized when the component is first rendered. 
 * The useEffect hook ensures that the action is only dispatched once when the component mounts, as indicated by the empty dependency array. 
 * The dummyShipments data is imported from a local module and represents the initial state of the shipment data in the store.
 */