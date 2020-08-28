export interface UserI {
    id?:number,
    name:string,
    username:string,
    email:string,
    phone:string,
    website:string,
    company?:Company,
    address?:UserAddress,
}

interface Company {
    name:string,
    catchPhrase:string,
    bs:string
}

interface UserAddress {
    street:string,
    suite: string,
    city: string,
    zipcode:string,
    geo:any
}