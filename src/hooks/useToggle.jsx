import { useState } from "react";

export function useToggle(initialValue = false) {
    const [isToggled, setToggle] = useState(initialValue);

    const toggle = () => {
        setToggle(prevValue => !prevValue);
    };

    return [isToggled, toggle];
}