import React from "react";
import Palette from "../Themes/Theme";

const StyleContext = React.createContext(Palette);

/*
*
*   take in a component and return that component with theme as props
*
*/

const withStyles = stylesOrCreator => Component => {
  return props => (
    <StyleContext.Consumer>
      {theme => {
        return (
          <Component
            classes={theme && { ...stylesOrCreator(theme) }}
            {...props}
          />
        );
      }}
    </StyleContext.Consumer>
  );
};

export default withStyles;
