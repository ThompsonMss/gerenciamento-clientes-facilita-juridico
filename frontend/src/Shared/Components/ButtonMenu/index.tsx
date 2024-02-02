import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { Button, ContainerItem, Icon, Load } from './styles'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'styled-components';
import { Modals } from '../Modals';
import { Typography } from '../Typography';

interface ButtonMenuProps {
  buttons: {
    id: string;
    onClick: (...args: any) => any;
    label: string;
    loading?: boolean;
    disabled?: boolean;
    negativeAction?: boolean;
    confirmAction?: boolean;
  }[]
}

export function ButtonMenu({ buttons }: ButtonMenuProps) {

  const theme = useTheme();

  const [showConfirm, setShowConfirm] = React.useState(false);
  const [callbackConfirm, setCallbackConfirm] = React.useState<(...args: any) => any>(() => null);

  const idInput = React.useMemo(() => {
    return Math.random() * 99999999 + new Date().getTime() + 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }, []);

  const Loading = () => (
    <Load>
      <div></div><div></div><div></div><div></div>
    </Load>
  );

  function handleClick(confirmAction: boolean, event: React.MouseEvent<HTMLElement, MouseEvent>, callback: (...args: any) => any) {
    if (!!confirmAction) {

      setCallbackConfirm(() => {
        return () => callback(event);
      });

      setShowConfirm(true);
    } else {
      callback(event);
    }
  }

  const CustomToggle = React.forwardRef(({ children, onClick }: any, ref: any) => (
    <Button id={idInput} ref={ref} onClick={onClick}>
      <Icon icon={faEllipsisV} />
    </Button>
  ));

  return (
    <>
      <Dropdown>

        <Dropdown.Toggle as={CustomToggle} id={idInput}>
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ width: 'auto' }}>

          {buttons.map(button => (
            <Dropdown.Item
              key={button.id}
              onClick={!!button.disabled ? () => null : (event) => handleClick(!!button?.confirmAction, event, button.onClick)}
              style={{
                color: !!button?.disabled
                  ? theme.Ice700 : !!button?.negativeAction
                    ? theme.Negative500 : theme.Background700,
                cursor: !!button?.disabled ? 'not-allowed' : 'pointer'
              }}>
              <ContainerItem>
                {button.label} {!!button?.loading && (<Loading />)}
              </ContainerItem>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Modals.Default
        show={showConfirm}
        onHide={() => {
          setShowConfirm(false);
          setCallbackConfirm(() => null);
        }}
        title='Atenção'
        children={
          <>
            <Typography.BodyLarge>{'Deseja realizar essa operação?'}</Typography.BodyLarge>
          </>
        }
        full={false}
        actions={{
          buttonCancelar: {
            label: 'Cancelar', onClick: () => {
              setShowConfirm(false);
              setCallbackConfirm(() => {
                return () => null;
              });
            }
          },
          buttonOk: {
            label: 'Confirmar',
            onClick: () => {
              setShowConfirm(false);
              callbackConfirm();
              setCallbackConfirm(() => {
                return () => null;
              });
            }
          }
        }}
      />
    </>
  );
}