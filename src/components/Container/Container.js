import {Container as Content} from 'semantic-ui-react';
import "./Container.scss"
const Container =({children})=>{
return (
    <div className="container-bg">
       <Content>{children}</Content> 
    </div>
);

}

export default Container;