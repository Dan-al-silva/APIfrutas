import Api from "../Api";

export async function buscarTodasFrutas(){
    try{
        const resultado = await Api.get(`/hortfruit`);
        return resultado.data;
    } catch (error){
        console.log(error);
        return[];
    }
}

export async function pesquisarNomeFruta(nomeFruta) {
    try {
        const resultado = Api.get(`/hortfruit?fruta=${nomeFruta}`);
        return resultado.data;
    } catch (error) {
        console.log(error);
    }
}

export async function salvarNovaFruta(idp,frutap,valorp,fotop){
    try{
        await Api.post(`/hortfruit`,{
        id: idp,
        fruta: frutap,
        valor: valorp,
        foto: fotop, 
    });
    return 'Sucesso';

    }catch(error) {
        console.log();
        return[];
    }
}

export async function alterarFruta(idp, frutap, valorp, fotop){
    try{
        await Api.put(`/hortfruit/${idp}`,{
            id: idp,
            fruta: frutap,
            valor: valorp,
            foto: fotop,            
        });
        return 'Sucesso';
    }catch (error){
        console.log(error)
        return[];
    }
}

export async function deletarFruta(idp){
    try{
        await Api.delete(`/hortfruit/${idp}`);
        return 'Sucesso';
    }catch(error){
        console.log(error);
        return'erro';
    }
}