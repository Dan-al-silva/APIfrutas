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

export async function salvarNovaFruta(uid,fruta,valor,foto){
    try{
        await Api.post(`/hortfruit`,{
        uid: uid,
        fruta: fruta,
        valor: valor,
        foto: foto,
    });
    return 'Sucesso';
    }catch(error){
        console.log();
        return[];
    }

}

export async function alterarFruta(uid, fruta, valor, foto){
    try{
        await Api.put(`/hortfruit/${uid}`,{
            uid: uid,
            fruta: fruta,
            valor: valor,
            foto: foto,            
        });
        return 'Sucesso';
    }catch (error){
        console.log(error)
        return[]
    }
}

export async function deletarFruta(uid){
    try{
        await Api.delete(`/hortfruit/${uid}`);
        return 'Sucesso';
    }catch(error){
        console.log(error);
        return'erro';
    }
}