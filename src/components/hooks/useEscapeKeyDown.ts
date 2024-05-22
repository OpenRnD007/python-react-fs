import { useEffect } from "react";

/**
* A custom React hook that listens for the Escape keydown event and executes a callback function when the event occurs.
*
* @param callback - A function to be called when the Escape key is pressed.
*/
const useEscapeKeyDown = (callback: Function) => {

    useEffect(() => {
        /**
        * The event handler that gets called when any key is pressed.
        * If the pressed key is Escape, it calls the provided callback function.
        *
        * @param event - The keyboard event.
        */
        const handleEsc = (event: any) => {
            if (event.key === 'Escape') {
                callback()
            }
        }

        // Add the event listener for the 'keydown' event on the window object.
        window.addEventListener('keydown', handleEsc);

        // Cleanup function to remove the event listener when the component unmounts or the effect re-runs.
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);
}

export default useEscapeKeyDown

/**
 * Note:
 * This hook is useful for adding keyboard navigation and control to your components. 
 * It can be used to close modals, cancel operations, or trigger any action when the user presses the Escape key. 
 * Remember to pass a stable callback, or wrap it with useCallback to prevent unnecessary effect executions.
 */