import { BASE_URL } from "./baseURL";
import { commonAPI } from "./commonApi";


// ALL FOODS

// get all Foods
export const getAllfoods = async ()=>{
    // get request to http://localhost:4000/foods for viewing all food from foods json and return response to MenuPage.jsx
    return await commonAPI("GET",`${BASE_URL}/foods`,"")
}

// Post all Foods
export const addFood = async (food)=>{
    // post request to http://localhost:4000/foods for adding a  food to foods json and  response to MenuPage.jsx
    return await commonAPI("POST",`${BASE_URL}/foods`,food)
}

//get a single food from /foods 
export const getAFood =  async(id)=>{
    //  post request to http://localhost:4000/foods for getting food from foods json  and  response to MenuPage.jsx
    return await commonAPI("GET",`${BASE_URL}/foods/${id}`,"")
}

//delete a single from foods
export const deleteAFood =  async(id)=>{
    //  post request to http://localhost:4000/foods to delete a food from foods json  and  response to MenuPage.jsx
    return await commonAPI("DELETE",`${BASE_URL}/foods/${id}`,{})
}


// CATEGORIES

// get all Categories
export const getAllCategories = async ()=>{
    // get request to http://localhost:4000/categories to get all Categories  from categories json and  response  MenuPage.jsx
    return await commonAPI("GET",`${BASE_URL}/categories`,"")
}

// get a food from category
export const getCategoryFood = async (id)=>{
    // get request to http://localhost:4000/categories/id tp get asper Category from categories json and  response to MenuPage.jsx
    return await commonAPI("GET",`${BASE_URL}/categories/${id}`,"")
}

// Add a Category 
export const addCategory = async(body)=>{
    //  post request to http://localhost:4000/categories for adding a category in categories json and  response to MenuPage.jsx
    return await commonAPI("POST",`${BASE_URL}/categories`,body)
}

// Add a food to categories 
export const addFoodCategory = async(id,body)=>{
    //POST request to http://localhost:4000/categories/id for inserting a food to selected category in categories json and return MenuPage.jsx
    return await commonAPI("PUT",`${BASE_URL}/categories/${id}`,body)
}

//delete a single from categories
export const deleteAFoodcategories =  async(id)=>{
    //Delete request to http://localhost:4000/categories to delete a food in categories json and  response to MenuPage.jsx
    return await commonAPI("DELETE",`${BASE_URL}/categories/${id}`,{})
}


// CART

// Insert a food to cart
export const addFoodCart = async(food)=>{
// Post request to http://localhost:4000/cart for adding food to car json and response to  cart.jsx
    return await commonAPI("POST",`${BASE_URL}/cart`,food)
}

// get all foods from cart
export const getCart = async()=>{
// Get request to http://localhost:4000/cart to get all foods in cart json  and response to cart.jsx 
    return await commonAPI("GET",`${BASE_URL}/cart`,"")
}

// delete a food from cart 
export const deleteACart = async(id)=>{
//  Delete request to http://localhost:4000/cart to delete a food from cart json and  response to cart.jsx
    return await commonAPI("DELETE",`${BASE_URL}/cart/${id}`,{})
}





    