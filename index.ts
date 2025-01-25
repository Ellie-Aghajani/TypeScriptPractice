//use interface for representing results of calling user/ product API endpoints
//data is a user or product
interface Result<T>{
    data: T | null;
    error: string | null; 
}

function fetch<T>(url : string) :Result<T>{
    return {data: null, error: null}
}
interface User{
    username: string;
}
interface Product{
    title: string;
}

let resultUser = fetch<User>('url');
console.log(resultUser.data?.username);

let resultProduct = fetch<Product>('url');
console.log(resultProduct.data?.title);
