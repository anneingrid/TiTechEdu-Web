import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function EncerrarConta() {
  const [encerramentoContaResultado, setEncerramentoContaResultado] = useState(null);

  const excluirConta = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/perfil/id_do_perfil_aqui', {
        method: 'DELETE',
      });

      const data = await response.json();
      setEncerramentoContaResultado(data.message);
    } catch (error) {
      console.error('Erro ao excluir conta', error);
    }
  };

  return (
    <div className="modal show" style={{ display: 'block', position: 'initial' }}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Encerrar Conta</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Tem certeza de que deseja encerrar sua conta?</p>
          {encerramentoContaResultado && <p>{encerramentoContaResultado}</p>}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => excluirConta()}>
            Encerrar Conta
          </Button>
          <Button variant="primary">Cancelar</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default EncerrarConta;
