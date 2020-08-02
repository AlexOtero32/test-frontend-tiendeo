import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import Header from "../../components/Header";
import { toggleModal } from "../../redux/ui";

const mockStore = configureStore([]);

describe("Header component", function () {
  let store;

  const initialState = {
    ui: {
      isModalOpen: false,
    },
    cards: { editingCard: {} },
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it("Renderiza correctamente", function () {
    const component = renderer.create(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Botón 'Crear tarjeta' abre el modal", function () {
    store.dispatch = jest.fn();

    const component = renderer.create(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    renderer.act(() => {
      component.root.findAllByType("button")[0].props.onClick();
    });

    expect(store.dispatch).toHaveBeenCalledWith(toggleModal());
  });

  it("Botón 'ordenar' abre el menú de ordenación", function () {
    const setState = jest.fn();
    const stateSpy = jest.spyOn(React, "useState");
    stateSpy.mockImplementation(init => [init, setState]);

    const component = renderer.create(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    renderer.act(() => {
      component.root.findAllByType("button")[1].props.onClick();
    });

    expect(setState).toHaveBeenCalledWith(true);
  });
});
