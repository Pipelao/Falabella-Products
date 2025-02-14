import { Grid2 } from "@mui/material";
import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { Product } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productsSlice";
import { RootState, AppDispatch } from "../redux/store";
import { API_URL } from "../constants/constants";


export default function Items() {

    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector((state: RootState) => state.products.items);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch(API_URL)
                const resultJSON: Product[] = await result.json();
                dispatch(setProducts(resultJSON))
                setIsLoading(false)
            } 
            catch (error) {
                console.log(`We found the next error: ${error}`)
            }
        }
        
        fetchData()
    }, [])

    if (isLoading) {
        return (
            <div className="Loading">
              <h1>Loading...</h1>
            </div>
          );
    }

    return (
        <Grid2 container spacing={2}>
            {
                products.map((item) => (
                    <Grid2 key={item.id}>
                        <ItemCard itemId={item.id} imageSource={item.image} imageTitle={item.title} 
                            itemTitle={item.title} itemPrice={item.price}>
                        </ItemCard>
                    </Grid2>
                ))
            }
        </Grid2>
    )
}