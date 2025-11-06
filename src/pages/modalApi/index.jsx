import { Box, Modal } from "@mui/material"

export const ModalApi = ({open, close}) => {
    return(
        <Modal open={open} onclose={close}>
            <Box>
                <h2>Modal aberto</h2>

            </Box>
        </Modal>
    )
}