import react, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const CartContext = react.createContext({})


export function CartContextProvider({children}) {
    const [cartItems, setCartItems] = useState(()=>{
        try {
            const productosEnLocalStorage = localStorage.getItem('cartProducts')
            return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : []
        } catch (error) {
            return [];
        }
    })
    
    const changePriceTotal = ()=>{
        if (typeof window !== 'undefined') {
            if (localStorage.getItem("cartProducts")) {
                let _price = 0;
                cartItems.map((item)=>{
                    //El precio total es igual al valor de precio total + precio del producto multiplicadp por la cantidad
                    return _price =_price + item.sale_price * item.quantity
                })
                return _price
            }
        }

        return 0.00
    }

    const [priceTotal, setPriceTotal] = useState(changePriceTotal) 

    const changeCountCart = ()=>{
        if (typeof window !== 'undefined') {
            if (localStorage.getItem("cartProducts")) {
                //Recorremos el carrito
                let _count = 0
                cartItems.forEach((item)=>{
                    //El precio total es igual al valor de precio total + precio del producto multiplicadp por la cantidad
                    _count = _count + item.quantity
                })  
                return _count     
            }
        }
        return 0
    }

    const [countCart, setCountCart] = useState(changeCountCart)
    const [showAlert, setShowAlert] = useState(false)

    useEffect(()=>{
        localStorage.setItem('cartProducts', JSON.stringify(cartItems))
    }, [cartItems])

    const addItemToCart = (item)=>{
        let quantity = 1;
        //Extraemos todos los datos del producto que seleccionemos
        const itemCart= {...item, quantity}
        setPriceTotal(priceTotal + itemCart.sale_price * itemCart.quantity)
        
        const exist = cartItems.some((product) => product.id === itemCart.id);

         //En caso de que así sea sumamos 1 a la cantidad del producto, y si no es así agregamos el producto al render
        if (exist) {
            const pro = cartItems.map((product)=>{
                if (product.id === itemCart.id) {
                    product.quantity+= itemCart.quantity
                    setCountCart(countCart + itemCart.quantity)
                    return product
                }else{
                    return product
                }
            })
            setCartItems([...pro])
        }else{
            setCartItems([...cartItems, itemCart])
            setCountCart(countCart + itemCart.quantity)
        }
        toast.success('Producto añadido al carrito!')
    }

    const deleteItemToCart = (idProduct)=>{
        cartItems.forEach((item)=>{
            if (item.id === idProduct) {
                let priceReduce = item.sale_price * item.quantity
                setPriceTotal(priceTotal - priceReduce)
                setCountCart(countCart - item.quantity)
            }
        })
        setCartItems(cartItems.filter((item) => item.id !== idProduct))
        localStorage.setItem("cartProducts", JSON.stringify(cartItems));
        toast.success('Producto eliminado al carrito!')
    }

    const updateItem = (value, item)=>{
        const pro = cartItems.map((product)=>{
            if (product.id === item.id) {
                product.quantity = value
                setPriceTotal(changePriceTotal)
                setCountCart(changeCountCart)
                return product
            }else{
                return product
            }
        })
        setCartItems([...pro])
    }
    

    return (
        <CartContext.Provider value={{countCart, priceTotal, cartItems, addItemToCart, deleteItemToCart, updateItem, setShowAlert, showAlert}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;