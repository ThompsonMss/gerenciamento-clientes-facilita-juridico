import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { Container, TitleHeader } from "./styles";

interface TitleProps {
    title: string;
    onHide?: (...args: any) => any;
}

export function Title({ title, onHide = undefined }: TitleProps) {
    return (
        <Container>
            <TitleHeader>{title}</TitleHeader>

            {onHide !== undefined && (
                <FontAwesomeIcon onClick={onHide} icon={faCircleXmark} />
            )}
        </Container>
    );
}