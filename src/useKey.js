import { use, useEffect } from "react";

export function useKey(key, action){
    useEffect(() => {
        function handleKeyDown(e) {
            if (e.code.toLowerCase() === key.toLowerCase()  ) {
                action();
            }
        }

          // Add the event listener for the 'keydown' event
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }
}, [key, action]); // Ensure callback and key are dependencies
   
}   
