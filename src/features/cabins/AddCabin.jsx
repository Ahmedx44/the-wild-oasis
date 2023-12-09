import {  useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {



    return (
        <Modal>
            <Modal.Open open="cabin-form">
                <Button>Add new Cabin</Button>
            </Modal.Open>
            <Modal.Window name="cabin-form"> 
                <CreateCabinForm/>
            </Modal.Window>
        </Modal>
    )













    // const [isOpenModal, setIsOpenModal] = useState(false);
    // return (
    //     <>
    //     <Button onClick={() => setIsOpenModal(!isOpenModal)}>Add new Cabin</Button>

    //     {isOpenModal && 
    //     <Modal onClose={()=>setIsOpenModal(false)}>
    //         <CreateCabinForm onCloseModal={()=>setIsOpenModal(false)} />
    //         </Modal>}
    //     </>
    
    // )
}

export default AddCabin
