import { useEffect ,useRef} from "react";
import close from "../ui/Modal"


export default function useOutSideClick(handler) {
    const ref=useRef();

        useEffect(() => {
            function handleClick(e) {
              if (ref.current && !ref.current.contains(e.target)) {
                handler();
              }
            }
          
            document.addEventListener("click", handleClick, true);
          
            // Cleanup function to remove the event listener when the component unmounts or when `close` changes
            return () => {
              document.removeEventListener("click", handleClick, true);
            };
          }, [handler, ref])
    

    return ref;
}


