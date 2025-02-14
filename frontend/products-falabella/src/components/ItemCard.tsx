import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { ItemCardProps } from '../types/item';

export default function ItemCard({ itemId, imageSource, imageTitle, itemTitle, itemPrice }: ItemCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imageSource}
        title={imageTitle}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {itemTitle}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {`$${itemPrice}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/items/${itemId}`} className="seeMore">See More</Link>
      </CardActions>
    </Card>
  );
}
