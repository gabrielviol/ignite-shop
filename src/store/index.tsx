import { createStore, legacy_createStore } from "redux"
import { stripe } from "../lib/stripe"
import Stripe from "stripe"

 
async function reducer(state , action){
    const response = await stripe.products.list({
        expand: ['data.default_price']
      })

      const products = response.data.map(product => {
        const price = product.default_price as Stripe.Price
    
        return {
          id: product.id,
          name: product.name,
          imageUrl: product.images[0],
          price: new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(price.unit_amount / 100),
        }
      })
      state = [...products]
      //console.log(state)
      return state
    
}

export default legacy_createStore(reducer)