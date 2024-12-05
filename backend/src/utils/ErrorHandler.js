class ErrorHandler extends error{
    constructor(message, statusCode){
        super(message);
        Error.captureStackTrace(this);
        this.statusCode = statusCode;
    }
}

module.exports = ErrorHandler;