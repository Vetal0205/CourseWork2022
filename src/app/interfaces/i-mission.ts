import { IAuto } from "./i-auto";

export interface IMission {
    id?:number;
    route:string;
    fuel:number;
    price:number;
    distance:number;
    technique:IAuto[];
}
