import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Link } from "@nextui-org/react";

const DemoContactModal = ({ isOpen, onClose }) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      backdrop="blur"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Esta es una Demo</ModalHeader>
        <ModalBody>
          <p>
            Gracias por tu interés en nuestra aplicación de venta de extintores. Esta es una demostración creada por Iwinser Sánchez.
          </p>
          <p>
            Si estás interesado en implementar una solución similar o tienes alguna pregunta, no dudes en contactar al creador.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Cerrar
          </Button>
          <Button 
            color="primary"
            href="https:/linkedin.com/in/iwinser-aljadys-sanchez-0a62a0234"
            as={Link}
            showAnchorIcon
            target="_blank"
            variant="solid"
          >
            Contactar a Iwinser
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DemoContactModal;