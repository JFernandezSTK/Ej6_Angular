export class factura{
    private _idFactura: number
    private _idCliente: string
    private _totalFactura: number
    private _iva: number


    constructor(idFactura:number,idCliente:string,totalFactura:number,iva:number){
        this._idFactura=idFactura
        this._idCliente=idCliente
        this._totalFactura=totalFactura
        this._iva=iva
    }
    public get idFactura(): number {
        return this._idFactura
    }
    public set idFactura(value: number) {
        this._idFactura = value
    }
    public get idCliente(): string {
        return this._idCliente
    }
    public set idCliente(value: string) {
        this._idCliente = value
    }
    public get totalFactura(): number {
        return this._totalFactura
    }
    public set totalFactura(value: number) {
        this._totalFactura = value
    }
    public get iva(): number {
        return this._iva
    }
    public set iva(value: number) {
        this._iva = value
    }
}