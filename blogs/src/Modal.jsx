import {Modal, Fade, Box} from '@mui/material';
import Cross from '../public/cross.png';

const MyModal = ({ open, handleClose }) => (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            bgcolor: 'white',
            border: '2px solid #000',
            boxShadow: 20,
            p: 2,
          }}
        >
          <h2 style={{color:'black',fontFamily:'fantasy'}}>Blog Saved Successfully</h2>
          <button onClick={handleClose}>
            <img src={Cross} style={{height:'28px',width:'28px'}}/>
          </button>
        </Box>
      </Fade>
    </Modal>
)
export default MyModal;
