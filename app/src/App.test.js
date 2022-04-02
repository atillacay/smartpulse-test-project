import React from "react";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import "@testing-library/jest-dom";
import App from "./App";

const server = setupServer(
  rest.get("/message", (req, res, ctx) => {
    return res(ctx.json({ message: "Smart Pulse Test Project" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("handlers server error", async () => {
  server.use(
    rest.get("http://localhost:3030", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
});

test("gets 200", async () => {
  server.use(
    rest.get("http://localhost:3030", (req, res, ctx) => {
      return res(ctx.status(200));
    })
  );
});

test("loads data from server", async () => {
  render(<App />);

  await screen.findByRole("heading");

  expect(screen.getByRole("heading")).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent(
    "Smart Pulse Test Project"
  );
  const tables = await screen.findAllByRole("table");

  expect(tables[0]).toHaveTextContent(/Tarih/i);
  expect(tables[0]).toHaveTextContent(/Toplam İşlem Miktari\(MWh\)/i);
  expect(tables[0]).toHaveTextContent(/Toplam İşlem Tutarı\(TL\)/i);
  expect(tables[0]).toHaveTextContent(/Ağırlıklı Ortalama Fiyat\(TL\/MWh\)/i);

  expect(tables[1]).toBeInTheDocument();
});
