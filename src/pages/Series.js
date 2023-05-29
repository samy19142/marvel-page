import { useState } from "react";
import ListSeries from "../components/ListSeries/ListSeries";
import Container from "../components/Container/Container";
import useFetch from "../hooks/useFetch";
import { Grid, Header } from "semantic-ui-react";

const Series = () => {
  const [renderSeries, setRenderSeries] = useState(20);
  const listSeries = useFetch(
    `${process.env.REACT_APP_URL_BASE}/series?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=startYear&limit=${renderSeries}`
  );

  return (
    <div>
      <div className="series-page">
        <div id="slide-series-image" />
        <Grid>
          <Grid.Column>
            <Container bg="light">
              <Header as="h2">LAS SERIES RECIENTES DE MARVEL</Header>
              <ListSeries
                listSeries={listSeries}
                renderSeries={renderSeries}
                setRenderSeries={setRenderSeries}
              />
            </Container>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default Series;
