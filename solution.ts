const formatValue = (input: string | number | boolean): string | number | boolean =>{
    if (typeof input === "number"){
        return input*10;
    } else if (typeof input === "string"){
        return input.toUpperCase();
    } else if (typeof input === "boolean"){
        return !input;
    }

    throw new Error("Invalid input type");
}

const getLength = <T extends string | any[] >(value :T) =>{
    if (typeof value === "string"){
        return value.length;
    } else if (Array.isArray(value)) {
    return value.length;
    }
}

class Person{
    constructor(public name: string, public age: number){
    }

    getDetails (){
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}

const filterByRating =(books: { title: string; rating: number }[]): { title: string; rating: number }[]=>{
    for (const book of books){
        if (book.rating>5){
            throw new Error (`Invalid rating for ${book.title}`)
        }
    }
    const goodBooks = books.filter((book)=>book.rating>4)
    return goodBooks;
}

const filterActiveUsers =(users: { id: number; name: string; email: string; isActive: boolean }[]): { id: number; name: string; email: string; isActive: boolean }[]=>{
    const activeUsers= users.filter((user)=>user.isActive===true)
   
    return activeUsers;
}

interface Book{
    title: string,
    author: string,
    publishedYear: number,
    isAvailable: boolean;
}

function printBookDetails (book: Book): void{
    const bookAvailability = book.isAvailable? "Yes":"No"
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${bookAvailability}`)
}


function getUniqueValues <T extends string|number>(arr1: T[], arr2:T[]): T[]{
    const uniqueArr: T[]=[];
    let x=0;

    function contains(array: T[], value: T): boolean {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        const value = arr1[i];
        if (value !== undefined && !contains(uniqueArr, value)) {
            uniqueArr[x] = value;
            x++;
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        const value = arr2[i];
        if (value !== undefined && !contains(uniqueArr, value)) {
            uniqueArr[x] = value;
            x++;
        }
    }
    
    return uniqueArr;
}



function calculateTotalPrice (products: { name: string; price: number; quantity: number; discount?: number }[]): number {
    if (products.length ===0){
        return 0;
    }

    let totalPrice= products.map((product)=>{
    const total= product.price*product.quantity;
    const discount= product.discount? (total*product.discount )/100 : 0;
    return total-discount;
    }).reduce((acc, curr) => {
        return acc + curr;
    }, 0);
    return totalPrice;
        
}
