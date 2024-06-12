import create from "./httpService";

export interface User {
    id: number
    name: string
}

export default create('/users')



// import apiClient from "./apiClient";

// interface User {
//     id: number
//     name: string
// }

// // create a class and method

// class UserService {
    
//     // create our create method  lets create a get all users method
//     getAllUsers() {
//         const request = apiClient.get('/users')
//         return {request}
//     }

//     // Delete user method 
//     deleteUser(id:number) {
//         return apiClient.delete('/users/' + id)
//     }

//     // Add user method
//     createUser(user: User) {
//         return apiClient.post('/users',user)
//     }

//     // update user method
//     updateUser(user: User) {
//         return apiClient.put('/users/' + user.id, user)
//     }
// }

// export default new UserService();