import {useEffect} from "react";

export function useOnClickOutside(idItem, handler) {
    useEffect(
        () => {
            const listener = (event) => {

                if (idItem === event.target.id) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },

        [idItem, handler]
    );
}
