import { useCallback, useState } from "react"

export const useHandleOpen = () => {
    const [open, setIsOpen] = useState(false)

    const handleOpen = useCallback(() => {
        setIsOpen(true)
    },[])

    const handleClose = useCallback(() => {
        setIsOpen(false)
    },[])

    return { handleOpen, handleClose, open}
}