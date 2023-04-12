import {Container as Content} from 'semantic-ui-react';
import "./Container.scss"
const Container =({children, bg})=>{
return (
    <div className={bg !== "light" ? "container-bg":null}>
       <Content>{children}</Content> 
    </div>
);

}

export default Container;