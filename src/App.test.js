import { render, screen } from "@testing-library/react";
import App from "./App";

describe('App',() => {
  it('should render while authenticating', async () => {
    render(<App />);

    expect(screen.getByText('Vite + Reactooooo')).toBeInTheDocument();
  });
});