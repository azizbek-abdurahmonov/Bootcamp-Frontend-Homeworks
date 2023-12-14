import type { Guid } from "guid-typescript";

export class Location{
    public id:Guid;
    public placeName:string;
    public builtIn:string;
    public awayInKm:number;
    public days:string;
    public price:number;
    public rate:number;
    public imageUrl:string;
}