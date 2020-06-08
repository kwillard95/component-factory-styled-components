import React from 'react';
import Theme from "../src/components/Theme/Theme";

const StylesDecorator = storyFn => (
   <Theme>
      {storyFn()}
    </Theme>);

export default StylesDecorator;



