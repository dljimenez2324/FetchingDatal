import apiClient from "./apiClient";

interface Entity {
    id: number
}
//Create a class and a method 
class HttpService {
//type string endpoint
    endpoint: string;
    ///need a constructor any time you call the class it will create instance of that class.
    //What ever is in our constructor it will create an instance.
    constructor(endpoint: string) {
        this.endpoint = endpoint
    }


//lets create a getAllUsers method
getAll<T>() {
    const request = apiClient.get<T[]>(this.endpoint)
    return {request}
}

//Delete User Method
delete(id: number) {
   return apiClient.delete( this.endpoint + '/' + id)
}

//Add User method
create<T>(entity: T) {
   return apiClient.post( this.endpoint + '/',entity)
}
//update user Method
update<T extends Entity>(entity: T) {
   return apiClient.put(this.endpoint + '/' + entity.id,entity)
}


}
const create = (endpoint: string) => new HttpService(endpoint);

export default create;