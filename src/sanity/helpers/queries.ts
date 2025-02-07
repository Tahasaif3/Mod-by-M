import { defineQuery } from "next-sanity";


export const PRODUCTS_QUERY= defineQuery(`*[_type == 'product'] | order(name asc)`);


export const PRODUCTS_BY_SLUG=defineQuery(
    `*[_type == 'product' && slug.current == $slug] | order(name asc)[0]`)

