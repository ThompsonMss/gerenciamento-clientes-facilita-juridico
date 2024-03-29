import { SectionTitle } from "@Shared/Components/SectionTitle";
import { useController } from "../Controller/useController";
import { LoadComponent } from "@Shared/Components/Load";
import { CardClient, ContainerActions, ContainerLoad, ContainerPaginate, ContainerRoutes, TextEmpty, TextLoad, TextTotalDistance } from "./styles";

import Table from 'react-bootstrap/Table';
import { Mask } from "@Shared/Helpers/Mask";
import { Buttons } from "@Shared/Components/Buttons";
import { faEdit, faFilter, faPlus, faRoute, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Modal } from 'react-bootstrap';
import { Forms } from "@Shared/Components/Forms";
import { Col } from "react-bootstrap";

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
      <SectionTitle
        text="Meus Clientes"
        children={
          <>
            <Buttons.ButtonDefault
              label="Novo Cliente"
              iconLeft={faPlus}
              onClick={() => controller.handles.handleRegisterClient()}
            />

            <Buttons.ButtonDefault
              label="Rota"
              iconLeft={faRoute}
              onClick={() => controller.handles.handleShowModalRoute(true)}
              variant="secondary"
            />

            <Buttons.ButtonIcon
              icon={faFilter}
              variant="secondary"
              mostrarSombra={false}
              onClick={() => controller.handles.handleShowModalFilters(true)}
            />
          </>
        }
      />

      <Table striped bordered hover responsive>
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
                  <tr style={{ verticalAlign: 'middle' }} key={client.id}>
                    <td>{client.name}</td>
                    <td>{client.email}</td>
                    <td>{phoneMask}</td>
                    <td>
                      <ContainerActions>
                        <Buttons.ButtonIcon
                          icon={faEdit}
                          format="square"
                          mostrarSombra={false}
                          size="small"
                          onClick={() => controller.handles.handleUpdateClient(client)}
                        />

                        <Buttons.ButtonIcon
                          size="small"
                          icon={faTrash}
                          negativeAction
                          format="square"
                          mostrarSombra={false}
                          confirmAction
                          loading={controller.states.loadDeleteClient === client.id}
                          onClick={() => controller.handles.handleDeleteClient(client.id as string)}
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
              {controller.states.pages.map((_, index) => (
                <li
                  style={{ cursor: 'pointer' }}
                  onClick={() => controller.handles.handlePage(index + 1)}
                  className={`page-item ${(controller.states.page === index + 1 || (controller.states.page === 0 && index === 0)) ? 'active' : ''}`}>
                  <a className="page-link">{index + 1}</a></li>
              ))}
            </ul>
          </nav>
        </ContainerPaginate>
      )}

      <Modal show={controller.states.showModalFilters} onHide={() => controller.handles.handleShowModalFilters(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Filtros</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <Forms.FormContainer noPaddingAndBackground>
              <>
                <Forms.FormRow>
                  <>
                    <Col md={12}>
                      <Forms.InputDefault
                        label='Nome'
                        placeholder='Ex.: Fulano de Tal'
                        value={controller.states.filters.name as any}
                        onChange={(e: any) => {
                          controller.handles.handleFilters('name', e.target.value)
                        }}
                      />
                    </Col>
                  </>

                </Forms.FormRow>

                <Forms.GapRow />

                <Forms.FormRow>
                  <>
                    <Col md={6}>
                      <Forms.InputDefault
                        label='E-mail'
                        placeholder='Ex.: fulano@gmail.com'
                        value={controller.states.filters.email as any}
                        onChange={(e: any) => {
                          controller.handles.handleFilters('email', e.target.value)
                        }}
                      />
                    </Col>

                    <Forms.Gap />

                    <Col md={6}>
                      <Forms.InputDefault
                        label='Telefone'
                        placeholder='Ex.: (61) 3333-7777'
                        value={controller.states.filters.phone as any}
                        onChange={(e: any) => {
                          controller.handles.handleFilters('phone', e.target.value)
                        }}
                      />
                    </Col>
                  </>
                </Forms.FormRow>

                <Forms.GapRow />

              </>
            </Forms.FormContainer>
          </>
        </Modal.Body>
        <Modal.Footer>

          <Buttons.ButtonDefault
            label="Limpar"
            variant="tertiary"
            onClick={() => controller.handles.handleClearFilters()}
          />

          <Buttons.ButtonDefault
            label="Filtrar"
            onClick={() => controller.handles.handleDoFilter()}
          />

        </Modal.Footer>
      </Modal>

      <Modal show={controller.states.showModalRoute} onHide={() => controller.handles.handleShowModalRoute(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Ordem de Visitação</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {controller.states.loadCalcRoute ? (
            <ContainerLoad style={{ height: '6.25rem' }}>
              <LoadComponent />
              <TextLoad>Calculando a rota...</TextLoad>
            </ContainerLoad>
          ) : (
            <ContainerRoutes>

              {controller.states.dataRoute.clients.map((item, index) => (
                <CardClient key={item.client.id}>
                  <div id="position">
                    <h5>{index + 1}º</h5>
                  </div>
                  <div id="wrapper">
                    <div id="section">
                      <p>Nome:</p>
                      <h6>{item.client.name}</h6>
                    </div>
                    <div id="section">
                      <p>E-mail:</p>
                      <h6>{item.client.email}</h6>
                    </div>
                    <div id="section">
                      <p>Telefone:</p>
                      <h6>{Mask.telefone.setMask(`${item.client.dddphone}${item.client.phone}`)}</h6>
                    </div>

                    <div id="row-route">
                      <div id="section">
                        <p>Coordenadas:</p>
                        <h6>(X: {item.client.xcoordinate}, Y: {item.client.ycoordinate})</h6>
                      </div>
                      <div id="section">
                        <p>{index === 0 ? 'Distância da empresa para o Cliente:' : 'Distância até Cliente Anterior:'}</p>
                        <h6>{item.distance}</h6>
                      </div>
                    </div>

                  </div>
                </CardClient>
              ))}

              <TextTotalDistance>Distância Total: {controller.states.dataRoute.totalDistance}</TextTotalDistance>
            </ContainerRoutes>
          )}

        </Modal.Body>
        <Modal.Footer>

          <Buttons.ButtonDefault
            label="Fechar"
            variant="tertiary"
            onClick={() => controller.handles.handleShowModalRoute(false)}
          />

        </Modal.Footer>
      </Modal>
    </>
  )
}