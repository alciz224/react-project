import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import fallbackImage from '../../assets/images/default.jpg'

export default function PostCard({post}) {
  return (
    <Card sx={{ maxWidth: 500, margin: 'auto', mt: 4, boxShadow: 5 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: 'red' }}>R</Avatar>}
        action={<IconButton><MoreVertIcon /></IconButton>}
        title={post.user}
        subheader={post.created_at}
      />
      <CardMedia
        component="img"
        height="200"
        image={post.photo || fallbackImage}
        alt={post.user || "Post  Image"}
      />
      <CardContent>
        <Typography variant="h6" color="text.primary" gutterBottom>
    {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like the post">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Box sx={{ ml: 'auto' }}>
          <Button size="small" variant="outlined">Read More</Button>
        </Box>
      </CardActions>
    </Card>
  );
}
