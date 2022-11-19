import { Class } from "./Class";

export class Course {
  id:String= '';
  name:String= '';
  enrollmentStartDate:String= '';
  enrollmentEndDate:String= '';
  startDate:String= '';
  endDate:String= '';
  cost:number= 0;
  classes?:Class[];
}
