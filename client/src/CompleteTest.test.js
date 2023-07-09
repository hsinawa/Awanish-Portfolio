import { render, fireEvent } from "@testing-library/react";
import { screen, configure } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// All Components
import NavBar from "./component/navbar";
import Skills from "./screen/skills";
const { default: HomeScreen } = require("./screen/homescreen");

describe("Testing ", () => {

  test(" the about section ", () => {
    render(<HomeScreen />);

    const aboutText = screen.getByText("passionate", { exact: false });

    expect(aboutText).toBeInTheDocument();
  });

  test(` the Navbar to have 2 Elements and Working Redirection Link`, () => {
    const result = render(<NavBar />);

    const CheckNavigation = screen.getByText(`Let's Connect`);

    expect(screen.getByText(`Let's Connect`).closest("a")).toHaveAttribute(
      "href",
      "/connect"
    );
    expect(CheckNavigation).toBeInTheDocument();
    const someElement = result.container.querySelector("#navbar-logo");
    expect(someElement).toBeInTheDocument();
  });

  test(` the homescreen to have an Emoji image`, () => {
    const homescreen = render(<HomeScreen />);
    const EmojiCHeck = homescreen.container.querySelector("#logo");
    expect(EmojiCHeck).toBeInTheDocument();
  });

  test(` the grid to contain 3 sections`, () => {
    const gridComponent = render(<Skills />);
    const checkgrid = screen.getAllByRole("heading");
    expect(checkgrid).toHaveLength(9);
  });

 


});
