import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

const server = setupServer(
	rest.get(
		"https://swapi.dev/api/people",
		(_req, res, ctx) => {
			return res(
				ctx.json([
					{
						name: "Luke Skywalker",
						height: "172",
						mass: "77",
						hair_color: "blond",
						skin_color: "fair",
						eye_color: "blue",
						birth_year: "19BBY",
						gender: "male",
					},
					{
						name: "C-3PO",
						height: "167",
						mass: "75",
						hair_color: "n/a",
						skin_color: "gold",
						eye_color: "yellow",
						birth_year: "112BBY",
						gender: "n/a",
					},
				])
			);
		}
	)
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("loads and displays Luke name", async () => {
	render(<App />);
	const Hero = await screen.findByText("Luke Skywalker");
	expect(Hero).toBeInTheDocument();
});
