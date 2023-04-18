import "./ListComics.scss";
import { Card, Icon, Image, Dimmer, Loader, Button } from "semantic-ui-react";

const ListComics = ({ listComics }) => {
    const { loading, result } = listComics;


 if (loading || !result)
 return (
   <Dimmer active inverted>
     <Loader inverted>Cargando</Loader>
   </Dimmer>
 );

const{results} =result.data;

  return <p>test</p>;
};

export default ListComics;
