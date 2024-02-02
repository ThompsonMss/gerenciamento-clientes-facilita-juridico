import { TypeBaseTheme } from "@Shared/Styles/Themes/interfaces";
import { ContainerList, Load } from "./styles";

export type InterfaceTamanho = 50 | 40 | 30 | 20

interface InterfaceLoadComponent {
    color?: TypeBaseTheme;
    tamanho?: InterfaceTamanho
    isDataList?: boolean
}

export function LoadComponent({ color = "Background300", tamanho = 40, isDataList = false }: InterfaceLoadComponent) {

    if (isDataList) {
        return (
            <ContainerList>
                <Load size={tamanho} color={color}>
                    <div></div><div></div><div></div><div></div>
                </Load>
            </ContainerList>
        );
    }

    return (
        <Load size={tamanho} color={color}>
            <div></div><div></div><div></div><div></div>
        </Load>
    )
}