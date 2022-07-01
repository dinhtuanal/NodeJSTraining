class ApiError{
    private status: number
    private message: string
    constructor(status: number, message: string){
        this.status = status,
        this.message = message
    }   
}

export {ApiError}
