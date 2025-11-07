import { Box, Modal } from "@mui/material"
import './style.css'

export const ModalApi = ({open, close, user}) => {

    if(!user) return null

    return(
        <Modal open={open} onClose={close}>
            <Box className="modal-container">
                <Box className="card-modal">
                    <h2>{user.name}</h2>
                    <img src={user.image} alt="" />
                    <p>{user.species}</p>
                </Box>                
            </Box>
        </Modal>
    )
}