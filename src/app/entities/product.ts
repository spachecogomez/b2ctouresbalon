export interface IProduct {
    ciudad:string;
    espectaculo:IEspectacle;
    fechaEspectaculo:Date;
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

export interface ListProduct {
    prodID:number;
    espectaculo:IEspectacle;
    estadia: IEstadia;
    transporte : ITransporte;
    ciudad : string;
    fechaEspectaculo : Date;

}

export interface IEstadia{
    estado:number;
    fechaCreacion:string;
    fechaModificacion:string;
    idEstadia:number;
    descripcion:string;
    precio:number;
}

export interface ITransporte{
    estado:number;
    fechaCreacion:string;
    fechaModificacion:string;
    idTransporte:number;
    nombre:string;
    precio:number;
}