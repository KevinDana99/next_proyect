import * as React from 'react';
import { red } from '@mui/material/colors';
import { Container, SubTitle, Title } from './styled';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { Divider } from '@mui/material';
import Post from '../../Post';

export function FolderList() {
  return (
 
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
           <Divider/>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <Divider/>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <Divider/>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
      <Divider/>
    </List>
  );
}


const CardProfile = () => {
  return (

<Container>
        <Avatar sx={{ bgcolor: red[500],  width: 120, height: 120 }} aria-label="recipe">
          R
        </Avatar>
     <Title 
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
     ><>My profile</></Title>

     <FolderList/>

     <SubTitle 
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
   ><>Your Posts</></SubTitle>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
        </Container>
  
  )
    }

export default CardProfile