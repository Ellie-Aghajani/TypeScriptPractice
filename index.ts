//use interface for representing results of calling user/ product API endpoints

interface Result<T>{
    data: T | null;
    error: string | null; 
}

