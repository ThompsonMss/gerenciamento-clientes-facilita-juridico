import { toast } from "@Shared/Helpers/toast";

export function catchError(
    error: any,
    mensagemPadrao = "Não foi possível concluir essa operação."
) {
    if (error?.response) {
        toast.erro(`${error.response?.data?.mensagem}`);
    } else if (error?.request) {
        if (error?.data?.mensagem) {
            toast.erro(error?.data?.mensagem);
        } else {
            toast.erro(mensagemPadrao);
        }
    } else {
        if (error?.mensagem) {
            toast.erro(error?.mensagem);
        } else {
            if (error?.mensagem) {
                toast.erro(error?.mensagem)
            } else {
                toast.erro(mensagemPadrao);
            }
        }
    }
}