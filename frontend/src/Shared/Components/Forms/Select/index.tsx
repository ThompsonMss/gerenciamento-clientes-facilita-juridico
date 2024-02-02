import React, { forwardRef } from 'react'
import * as Styles from './styles'

import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { InterfaceInputSelect } from './interfaces'
import { useTheme } from 'styled-components'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'

import Dropdown from 'react-bootstrap/Dropdown';
import { Modals } from '@Shared/Components/Modals'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faGear, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { Forms } from '..'

function Input({
    temErro = false,
    autoFocus,
    disabled,
    disabledButtonIcon,
    stylesContainer = {},
    desc,
    descErro,
    label,
    inputOpcional = false,
    iconLeft,
    focusErro,
    placeholder = "",
    value = "",
    onChange = (event: any) => null,
    onChangeValue = () => null,
    dataList,
    isMulti = false,
    valueMulti = [],
    onChangeValueMulti = () => null,
    titleModal = 'Escolha uma opção'
}: InterfaceInputSelect, ref?: any) {

    const theme = useTheme()

    const [valorSelecionado, setValorSelecionado] = React.useState('');
    const [filteredDataList, setFilteredDataList] = React.useState(dataList);
    const [inputValue, setInputValue] = React.useState('');

    const [showModal, setShowModal] = React.useState(false);

    const idInput = React.useMemo(() => {
        return Math.random() * 99999999 + new Date().getTime() + 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }, []);

    function requestInput() {
        document.getElementById(idInput)?.focus();
    }

    function onClickIconButton(event: React.MouseEvent<HTMLDivElement>) {
        event.stopPropagation();

        alert('sd')
    }

    const filterDataList = (input: string) => {

        if (!!input) {
            const filteredList = dataList.filter((item: any) => item.label.toLowerCase().includes(input.toLowerCase()));
            setFilteredDataList(filteredList);
        } else {
            setFilteredDataList(dataList);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setInputValue(inputValue);
        filterDataList(inputValue);
    };

    React.useEffect(() => {
        if (!!focusErro && temErro) {
            requestInput();
        }
    }, [temErro])

    React.useEffect(() => {
        if (!!value && !isMulti) {
            const item = dataList.find(itemList => itemList.value === value);
            if (item) setValorSelecionado(item.label as any)
        }
    }, [value]);

    const CustomToggle = React.forwardRef(({ children, onClick }: any, ref: any) => (
        <Styles.Container ref={ref} style={stylesContainer} onClick={onClick}>
            {!!label && (
                <Styles.Label>{label}:{!!inputOpcional ? <Styles.TextpOpcional> (opcional)</Styles.TextpOpcional> : ''}</Styles.Label>
            )}
            <Styles.InputWrapper disabled={!!disabled} temErro={temErro}>

                {!!iconLeft && (
                    <Styles.Icon icon={iconLeft} />
                )}

                {isMulti ? (
                    <input onClick={onClick} ref={ref} readOnly autoFocus={!!autoFocus} id={idInput} value={valueMulti.map(item => item.label).join(', ')} placeholder={placeholder} />
                ) : (
                    <input onClick={onClick} ref={ref} readOnly autoFocus={!!autoFocus} id={idInput} value={valorSelecionado} placeholder={placeholder} />
                )}

                {temErro && <Styles.Icon style={{ color: theme.Negative500 }} icon={faCircleExclamation} />}

                <Styles.ButtonIcon disabledButtonIcon={!!disabledButtonIcon} onClick={onClick}>
                    <Styles.IconRight icon={faSortDown} />
                </Styles.ButtonIcon>


            </Styles.InputWrapper>

            <Styles.ContainerDesc>
                {(!!descErro && temErro) ? (
                    <Styles.Desc temErro={temErro}>{descErro}</Styles.Desc>
                ) : (
                    <>
                        {!!desc && (
                            <Styles.Desc temErro={false}>{desc}</Styles.Desc>
                        )}
                    </>
                )}
            </Styles.ContainerDesc>

        </Styles.Container>
    ));

    if (isMulti) {
        return (
            <>
                <CustomToggle onClick={() => setShowModal(true)} />

                <Modals.Default
                    actions={{ buttonOk: { label: 'Fechar', onClick: () => setShowModal(false) } }}
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    title={titleModal}
                    full
                    children={
                        <>

                            <Forms.InputDefault
                                placeholder='Pesquise aqui...'
                                value={inputValue}
                                onChange={handleInputChange}
                            />

                            <Styles.ContianerItens>
                                {filteredDataList.map(item => {

                                    const selected = valueMulti.find(itemValue => item.value === itemValue.value)

                                    return (
                                        <Styles.Item
                                            onClick={() => {
                                                if (!!selected) {
                                                    onChangeValueMulti(valueMulti.filter(itemValue => itemValue.value !== selected.value) as any)
                                                } else {
                                                    onChangeValueMulti([...valueMulti, item] as any)
                                                }
                                            }}
                                            selected={!!selected}
                                        >
                                            <div>
                                                {!!selected ? <FontAwesomeIcon icon={faSquareCheck} /> : <FontAwesomeIcon icon={faSquare} />}
                                                <Styles.Title>{item.label}</Styles.Title>
                                            </div>
                                        </Styles.Item>
                                    )
                                })}
                            </Styles.ContianerItens>
                        </>
                    }
                />
            </>
        );
    }

    return (
        <Dropdown>

            <Dropdown.Toggle as={CustomToggle} id={idInput}>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ maxHeight: '9.375rem', overflowX: 'hidden', overflowY: 'scroll', zIndex: 4, marginTop: '-1.25rem' }}>

                {dataList.map(item => (
                    <Dropdown.Item key={item.value} style={{ width: '100%' }} onClick={() => {
                        if (!isMulti) {
                            onChange(item.value)
                            onChangeValue(item.value);
                            setValorSelecionado(item.label as any)
                        }
                    }}>{item.label}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export const InputSelect = forwardRef(Input);