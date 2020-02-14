import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Players = props => {
    const {
        className
    } = props;

    const [ modal, setModal ] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div className='player-info'>
            <div className='players' data-testid="playersDiv">
                {/* <h1>Searched</h1>
                <h1>Country</h1> */}
                <Button color='primary' onClick={toggle}>{props.name}</Button>
                    <Modal isOpen={modal} toggle={toggle} className={className}>
                        <ModalHeader className="name" style={{color: 'blue'}}>{props.name}</ModalHeader>
                        <ModalBody className="country" style={{color: 'blue'}}>Country - {props.country}</ModalBody>
                        <ModalBody className="searched" style={{color: 'blue'}}>Searched - {props.searches}</ModalBody>
                        <ModalFooter>
                            <Button color='secondary' onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
            </div>
        </div>
    )
}

export default Players;