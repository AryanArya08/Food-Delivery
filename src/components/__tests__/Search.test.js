import Body from "../Body";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTUARANT_DATA } from "../../mocks/data";
import "@testing-library/jest-dom/";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTUARANT_DATA);
    },
  });
});

test("Shimmer Should load on homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer");

  expect(shimmer).toBeInTheDocument();
  console.log(shimmer);

  // console.log(body);
});
