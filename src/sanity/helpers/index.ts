
import { client } from "../lib/client"


// export const getProducts = async() =>{
//   try {
//       const products = await client.fetch(`*[_type == "product"]
// `)
//       return products
//   } catch (error){
//       console.error('Featured products fetching error')
//   }
// }


export const getFeaturedProducts = async() =>{
  try {
      const products = await client.fetch(`*[_type == "product" && isFeaturedProduct == true]
`)
      return products
  } catch (error){
      console.error('Featured products fetching error', error)
  }
}


export const getLatestProducts = async() =>{
  try {
      const products = await client.fetch(`*[_type == "product" && isLatestProduct == true]
`)
      return products
  } catch (error){
      console.error('Featured products fetching error', error)
  }
}

export const getTrendingProducts = async() =>{
  try {
      const products = await client.fetch(`*[_type == "product" && isTrending == true ]
`)
      return products
  } catch (error){
      console.error('Featured products fetching error', error)
  }
}

export const getShopProducts = async() =>{
  try {
      const products = await client.fetch(`*[_type == "product" ]
`)
      return products
  } catch (error){
      console.error('Featured products fetching error', error)
  }
}



export const getLatestProducts2 = async() =>{
  try {
      const products = await client.fetch(`*[_type == "product" && isLatestProduct == true][0...4]
`)
      return products
  } catch (error){
      console.error('Featured products fetching error', error)
  }
}


// export const getProductBySlug = async (slug: string): Promise<Product | null> => {
//     const query = `*[_type == "product" && slug.current == $slug][0]`;
//     return await client.fetch(query, { slug });
//   };





const PRODUCT_SEARCH_QUERY = `
  *[_type == 'product' && name match $searchParam] | order(name asc)
`;

// Function to search products by name
export const searchProductByName = async (searchParam: string) => {
  try {
    // Use the client to fetch data directly
    const products = await client.fetch(PRODUCT_SEARCH_QUERY, {
      searchParam: `${searchParam}*`, // Append `*` to enable partial matches
    });

    return products || [];
  } catch (error) {
    console.error('Fetching product by name error:', error);
    return [];
  }
};


// export const getProductBySlug=async(slug:string)=>{
//     try {
//         const product =await sanityFetch({
//             query:PRODUCTS_BY_SLUG,
//             params:{
//                 slug,
//             }
//         });
//         return product?.data || null;
//     }catch (error) {
//             console.error("Products fextchin error", error);
//             return null
//     }
// }