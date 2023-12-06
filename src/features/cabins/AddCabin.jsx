import {  useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    return (
        <>
        <Button onClick={() => setIsOpenModal(!isOpenModal)}>Add new Cabin</Button>

        {isOpenModal && 
        <Modal onClose={()=>setIsOpenModal(false)}>
            <CreateCabinForm />
            </Modal>}
        </>
    
    )
}

export default AddCabin
