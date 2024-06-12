import apiClient from "./apiClient";

// to be as generic as possible we deleted our interface and have a new interface thats generic
interface Entity {
    id: number
}

class HttpService {

    // type of endpoint that is a string
    endpoint: string;
    // we need a constructor (like C#) so when you  call a  class it will create an instance of that class
    // whatever is inside the constructor it will create an instance
    constructor(endpoint: string) {
        this.endpoint = endpoint
    }
    
    // create our create method  lets create a get all users method
    getAll<T>() {
        // remember that in this case we're making it be type anything and an array
        // this is simlar to having /'users/'  + user.id
        const request = apiClient.get<T[]>(this.endpoint)
        return {request}
    }

    // Delete user method 
    delete(id:number) {
        return apiClient.delete(this.endpoint + '/' + id)
    }

    // Add user method
    create<T>(entity: T) {
        return apiClient.post(this.endpoint + '/',entity)
    }

    // update user method
    update<T extends Entity>(entity: T) {
        return apiClient.put(this.endpoint + '/' + entity.id, entity)
    }
}
const create = (endpoint: string) => new HttpService(endpoint);

export default create;