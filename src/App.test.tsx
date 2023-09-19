/**
 * @jest-environment jsdom
 */
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
						hair_color: "blond",
						eye_color: "blue",
						birth_year: "19BBY",
					},
					{
						name: "C-3PO",
						hair_color: "n/a",
						eye_color: "yellow",
						birth_year: "112BBY",
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
	const Hero = await screen.findByText(/Luke Skywalker/i);
	expect(Hero).toBeInTheDocument();
});
