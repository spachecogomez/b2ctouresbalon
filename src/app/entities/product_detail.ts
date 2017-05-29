export interface IProductDetail {
    prodID:number,
    fechaEspectaculo:any,
    fechaLlegada:string,
    fechaSalida:string,
    ciudad:string,
    espectaculo:IEspectaculoDetail,
    estadia:IEstadiaDetail,
    transporte:ITransporteDetail
}

export interface IEspectaculoDetail {
	idEspectaculo:number,
	nombre:string,
	precio:number,
	estado:number
}

export interface IEstadiaDetail {
	idEspectaculo:number,
	descripcion:string,
	precio:number,
	estado:number
}

export interface ITransporteDetail {
	idTransporte:number,
	nombre:string,
	precio:number,
	estado:number
}