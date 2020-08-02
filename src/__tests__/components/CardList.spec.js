import React from "react";
import Card from "../../components/Card";
import CardList from "../../components/CardList";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureStore([]);

describe("CardList component", function () {
  let store;

  const createCard = () => ({
    date: new Date(),
    titulo: "Tarjeta",
    id: Math.random().toString(),
    descripcion: "Descripción",
    url: undefined,
  });

  beforeEach(() => {
    store = mockStore({
      cards: {
        cardList: [createCard(), createCard(), createCard()],
      },
    });
  });

  it("Renderiza correctamente", function () {
    const component = renderer.create(
      <Provider store={store}>
        <CardList />
      </Provider>
    );

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Renderiza las Cards correctamente", function () {
    const component = renderer.create(
      <Provider store={store}>
        <CardList />
      </Provider>
    );

    const wrapper = component.root.findByType("main");

    expect(wrapper.children.length).toBe(3);
  });
});
