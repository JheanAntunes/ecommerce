import { useState } from 'react'

/**
 *
 * @description Hook personalizado de toggle com estado inicial em false.
 *
 * @return {
 *
 * estadoToggle,
 * setEstadoToggle,
 * shortcut_Set_Toggle_Function}
 */

function useToggle() {
    const [toggle, setToggle] = useState(false)

    const shortcut_Set_Toggle_Function = () => {
        setToggle((toggle) => !toggle)
    }

    return {
        toggle,
        setToggle,
        shortcut_Set_Toggle_Function,
    }
}

export default useToggle
