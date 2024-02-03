import React from 'react'
import * as Styles from './styles'

import { useController } from '../Controller/useController'

import { Buttons } from '@Shared/Components/Buttons';
import { Forms } from '@Shared/Components/Forms';
import { Col } from 'react-bootstrap';
import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import { SectionTitle } from '@Shared/Components/SectionTitle';

export function RegisterAndUpdateClient() {

  const controller = useController();


  return (
    <>
      <Styles.Container>

        <SectionTitle
          text="Cadastrar Cliente"
        />

        <Forms.FormContainer>
          <>
            <Forms.FormTitleSection title='Informação' />

            <Forms.FormRow>

              <Col md={6}>
                <Forms.ControlledInputDefault
                  control={controller.states.control}
                  name='name'
                  label='Nome do cliente'
                  desc='Nesse campo insira o nome do cliente.'
                  placeholder='Ex.: Fulano de Tal'
                  errors={controller.states.errors}
                />
              </Col>

            </Forms.FormRow>

            <Forms.GapRow />

            <Forms.FormTitleSection title='Contato' />

            <Forms.FormRow>
              <>
                <Col md={6}>
                  <Forms.ControlledInputDefault
                    control={controller.states.control}
                    name='email'
                    label='E-mail'
                    desc='Insira o e-mail de contato do cliente.'
                    placeholder='Ex.: fulanodetal@gmail.com'
                    errors={controller.states.errors}
                  />
                </Col>

                <Forms.Gap />

                <Col md={6}>
                  <Forms.ControlledInputDefault
                    control={controller.states.control}
                    name='phone'
                    label='Telefone'
                    desc='Insira o telefone do cliente.'
                    placeholder='Ex.: (61) 3333-7777'
                    errors={controller.states.errors}
                    mask='telefone'
                  />
                </Col>
              </>
            </Forms.FormRow>

            <Forms.GapRow />

            <Forms.FormTitleSection title='Coordenadas' />

            <Forms.FormRow>
              <>
                <Col md={6}>
                  <Forms.ControlledInputDefault
                    control={controller.states.control}
                    name='xcoordinate'
                    label='Eixo X'
                    desc='Insira a coordenada do Eixo X'
                    placeholder='Ex.: -1'
                    errors={controller.states.errors}
                    inputOpcional
                  />
                </Col>

                <Forms.Gap />

                <Col md={6}>
                  <Forms.ControlledInputDefault
                    control={controller.states.control}
                    name='ycoordinate'
                    label='Eixo Y'
                    desc='Insira a coordenada do Eixo X'
                    placeholder='Ex.: 2'
                    errors={controller.states.errors}
                    inputOpcional
                  />
                </Col>
              </>
            </Forms.FormRow>

            <Forms.GapRow />

            <Forms.FormRow style={{ justifyContent: 'flex-end' }}>
              <>
                <Col md={4} className='d-flex justify-content-end gap-2'>
                  <Buttons.ButtonDefault
                    label='Voltar'
                    iconLeft={faArrowLeft}
                    isMobile
                    onClick={controller.handlers.handleGoBack}
                    variant='tertiary'
                  />
                  <Buttons.ButtonDefault
                    label='Salvar'
                    iconLeft={faCheck}
                    isMobile
                    onClick={controller.handlers.handleSubmit}
                    loading={controller.states.loadSubmit}
                  />
                </Col>
              </>
            </Forms.FormRow>
          </>
        </Forms.FormContainer>

      </Styles.Container>
    </>
  )

}