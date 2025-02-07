import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'




import { product } from './product'
import { postType } from './postType'
import { authorType } from './authorType'
import { orderType } from './orderType'
import shipping from './shipment'
import { category } from './category'
import { review } from './review'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, category, authorType , postType,  product, orderType, shipping,review],
}
