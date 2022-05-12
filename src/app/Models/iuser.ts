export interface IUser {
    userName:string,
    email:string,
    PhoneNumber:string[],
    address:{
        city:string,
        street:string,
        postalCode:string
    },
    password:string,
    day: string,
    specifyDay?:string
}
