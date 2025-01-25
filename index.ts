//use interface for representing results of calling user/ product API endpoints

interface Result<T>{
    data: T | null;
    error: string | null; 
}

function fetch<T>(url : string) :Result<T>{
    return {data: null, error: null}
}