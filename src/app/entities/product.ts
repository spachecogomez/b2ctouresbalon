export interface IProduct {
    ciudad:string;
    espectaculo:IEspectacle;
    fechaEspectaculo:date;
    fechaLlegada:string;
    fechaSalida:string;
    prodID:number;
}

export interface IEspectacle{
    estado:number;
    fechaCreacion:string;
    fechaModificacion:string;
    idEspectaculo:number;
    nombre:string;
    precio:number;
}


export interface IGenericResult{
    size:number;
    results:IProduct[]
}