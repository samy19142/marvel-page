import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container/Container";
import useFetch from "../hooks/useFetch";
import ListComics from "../components/ListComics/ListComics";
import { useState } from "react";

const Comics = () => {
  const [renderComics, setRenderComics] = useState(10);
  console.log(renderComics)
  const listComics = useFetch(
    `${process.env.REACT_APP_URL_BASE}/comics?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=focDate&limit=${renderComics}`
  );

  return (
    <div className="comics-page">
      <div id="slide-comics-image" />
      <Grid>
        <Grid.Column>
          <Container bg="light">
            <Header as="h2">Los mejores Comics</Header>
            <ListComics
              listComics={listComics}
              renderComics={renderComics}
              setRenderComics={setRenderComics}
            />
          </Container>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Comics;
