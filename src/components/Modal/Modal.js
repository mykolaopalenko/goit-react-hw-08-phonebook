import { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ContactForm from 'components/ContactForm';
import { StyledBox, StyledClose } from './Modal.styled';
import AddIcon from '@mui/icons-material/Add';

const ModalEl = () => {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   return (
      <>
         <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleOpen}
            sx={{
               backgroundColor: '#1976d2',
               opacity: 1,
               '&:hover': {
                  opacity: 0.8,
                  backgroundColor: '#1976d2',
               },
            }}
         >
            Add new contact
         </Button>

         <Modal open={open} >
            <StyledBox>
               <StyledClose onClick={handleClose}>
                  <svg >
                     <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path>
                  </svg>
               </StyledClose>
               <ContactForm closeModal={handleClose} />
            </StyledBox>
         </Modal>
      </>
   );
};

export default ModalEl;
