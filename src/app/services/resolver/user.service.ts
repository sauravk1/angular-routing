export class UserService {
    getUser(id: string) {
        if(id === '1') {
            return {
                id: '1',
                name: 'leela'
            }
        } else {
            return {
                id:id,
                name: 'saurav'
                
            }
        }
    }
}