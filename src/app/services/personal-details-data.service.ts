import { Injectable } from '@angular/core';

@Injectable()
export class PersonalDetailsDataService {

  constructor() { }

  personalDetails:{name,profession,dob,phoneNo,email,address}={
    name:'Name',
    profession:'Profession',
    dob:'Dob',
    phoneNo:'Phone',
    email:'Email',
    address:'Address'
  }

  newFields:{fieldName:string,fieldInfo:string}[]=[];
  newFieldId:number=-1;

  onSetPersonalDetails(personalDetails){
    this.personalDetails=personalDetails;
  }

  onSetNewFields(newFields){
    this.newFields=newFields;
  }

  onAddNewFields(){
    this.newFields.push({
      fieldName:'Field:',fieldInfo:'Info'
    });
  }

  onRemoveNewFields(){
    this.newFields.pop();
  }

  onSetNewFieldsId(id){
    this.newFieldId=id;
  }

}
