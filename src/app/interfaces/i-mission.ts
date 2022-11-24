import { ITechForMission } from "./itech-for-mission";
export interface IMission {
    id?:number;
    route:string;
    fuel:number;
    price:number;
    distance:number;
    duration?:string;
    technique:ITechForMission[];
}
