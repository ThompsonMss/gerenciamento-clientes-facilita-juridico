import { SectionTitle } from "@Shared/Components/SectionTitle";
import { useController } from "../Controller/useController";
import { LoadComponent } from "@Shared/Components/Load";
import { ContainerActions, ContainerLoad, ContainerPaginate, TextEmpty, TextLoad } from "./styles";

import Table from 'react-bootstrap/Table';
import { Mask } from "@Shared/Helpers/Mask";
import { nomeESobrenome } from "@Shared/Helpers/nomeESobrenome";
import { Buttons } from "@Shared/Components/Buttons";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export function ListClients() {

  const controller = useController();

  if (controller.states.load) {
    return (
      <>
        <SectionTitle text="Meus Clientes" />
        <ContainerLoad>
          <LoadComponent />
          <TextLoad>Carregando seus clientes...</TextLoad>
        </ContainerLoad>
      </>
    )
  }

  return (
    <>
      <SectionTitle text="Meus Clientes" />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>

          {controller.states.data.length === 0 ? (
            <tr>
              <td colSpan={4}><TextEmpty>Nenhum cliente encontrado</TextEmpty></td>
            </tr>
          ) : (
            <>
              {controller.states.data.map((client) => {

                const dataPhone = `${client.dddphone}${client.phone}`;
                const phoneMask = dataPhone.length <= 10 ? Mask.telefone.setMask(dataPhone) : Mask.celular.setMask(dataPhone)

                return (
                  <tr style={{ verticalAlign: 'middle' }}>
                    <td>{nomeESobrenome(client.name)}</td>
                    <td>{client.email}</td>
                    <td>{phoneMask}</td>
                    <td>
                      <ContainerActions>
                        <Buttons.ButtonIcon
                          icon={faEdit}
                          format="square"
                          mostrarSombra={false}
                        />

                        <Buttons.ButtonIcon
                          icon={faTrash}
                          negativeAction
                          format="square"
                          mostrarSombra={false}
                          confirmAction
                        />
                      </ContainerActions>
                    </td>
                  </tr>
                )
              })}
            </>
          )}
        </tbody>
      </Table>

      {controller.states.data.length !== 0 && (
        <ContainerPaginate>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item"><a className="page-link" href="#">Anterior</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Próximo</a></li>
            </ul>
          </nav>
        </ContainerPaginate>
      )}
    </>
  )
}