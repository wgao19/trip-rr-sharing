import React from "react";
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Quote,
  Slide,
  Text,
  Notes,
  Typeface
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#C1638E",
    highlight: "#F78679",
    dark: "#371749",
    bg: "white"
  },
  {
    primary: {
      name: "Kirang Haerang",
      googleFont: true
    },
    secondary: "Montserrat"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="dark">
            Trip RR
          </Heading>
          <Text margin="10px 0 0" textColor="white" size={1} fit>
            Trip to React Rally, Aug 2018
          </Text>
        </Slide>
        <Slide
          bgImage="https://cdn.dribbble.com/users/870476/screenshots/4363322/slc1.png"
          bgSize="contain"
          bgRepeat="no-repeat"
          bgColor="dark"
          key="slc-1"
        >
          <Heading size={1} fit caps lineHeight={1} textColor="dark">
            Salt Lake City
          </Heading>
          <Notes>
            <Text textFont="secondary">
              <h4>Slide notes</h4>
            </Text>
            <ol>
              <li>The Leonardo</li>
              <li>The Great Salt Lake</li>
            </ol>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="dark">
            Workshop
          </Heading>
          <Text textFont="secondary">Advanced React Component</Text>
        </Slide>
        <Slide bgColor="dark">
          <Heading size={1} fit caps lineHeight={1} textColor="highlight">
            React Rally
          </Heading>
          <Text textFont="secondary" textColor="primary">
            The Real 💩
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="dark">
            Climbing
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="dark" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
