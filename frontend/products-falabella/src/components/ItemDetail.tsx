import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProduct } from "../redux/productsSlice";
import { RootState } from "../redux/store";

export default function ItemDetail() {

  const { itemId } = useParams<{ itemId: string }>();
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.products.selectedProduct);

  useEffect(() => {
    if (itemId) dispatch(selectProduct(Number(itemId)));
  }, [itemId, dispatch]);

  if (!product) {
    return (
        <div className="Loading">
          <h1>Loading...</h1>
        </div>
      );
    }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={product.title}
      />
      <CardMedia
        component="img"
        height="194"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.category}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {`$${product.price}`}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
