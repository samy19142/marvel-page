import { Card, Icon, Image, Dimmer, Loader, Button } from "semantic-ui-react";
import "./LastEvents.scss";


const LastEvents = ({ lastEventsFetch }) => {
  const { loading, result } = lastEventsFetch;

  if (loading || !result)
    return (
      <Dimmer active inverted>
        <Loader inverted>Cargando</Loader>
      </Dimmer>
    );

  const { results } = result.data;

  return results.map((event, index) => (
    <Card key={index} className="last-event">
      <Image
        src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{event.title}</Card.Header>
        <Card.Meta>
          <span>
            <Icon name="book" />
            {event.comics.available} Comics
          </span>
        </Card.Meta>
        <Card.Description>{event.description}</Card.Description>
      </Card.Content>

      <Card.Content extra>
        <Button
          animated
          fluid
          as="a"
          href={event.urls[0].url}
          target="_blank"
          color="black"
        >
        <Button.Content visible>Ver evento</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </Card.Content>
    </Card>
  ));
};

export default LastEvents;
