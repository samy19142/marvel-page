import { Button, Card, Dimmer, Image, Loader, Icon } from "semantic-ui-react";
import "./ListSeries.scss"

const ListSeries = ({ listSeries, renderSeries, setRenderSeries }) => {
  const { loading, result } = listSeries;

  if (loading || !result)
    return (
      <Dimmer active inverted>
        <Loader inverted>Cargando...</Loader>
      </Dimmer>
    );

  const { results } = result.data;
  console.log(results);

  const loadMoreSeries = () => {
    const numberSeries = renderSeries;
    setRenderSeries(numberSeries + 5);
  };

  return (
    <Card.Group itemsPerRow={5}>
      {results.map((res, index) => (
        <Card key={index} className="list-series">
          <Image
            src={`${res.thumbnail.path}.${res.thumbnail.extension}`}
            alt="Series"
          />
          <Card.Content>
            <Card.Header>{res.title}</Card.Header>
            <Card.Meta>
              <span>Digital ID:{res.id}</span>
            </Card.Meta>
          </Card.Content>
          <Button
            animated
            fluid
            as="a"
            href={res.urls[0].url}
            target="_blank"
            color="black"
          >
            <Button.Content visible>Mas informacion</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </Card>
      ))}

      <div className="container-button">
        <Button color="red" onClick={() => loadMoreSeries()}>
          <Icon name="plus" />
          Cargar mas Series
        </Button>
      </div>
    </Card.Group>
  );
};

export default ListSeries;
