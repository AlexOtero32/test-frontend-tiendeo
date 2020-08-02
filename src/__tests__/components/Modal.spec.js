import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import Modal from "../../components/Modal";
import { clearEditingCard } from "../../redux/cards/actions";

const mockStore = configureStore([]);

describe("Modal component", function () {
  let store;

  const initialState = {
    ui: {
      isModalOpen: false,
    },
    cards: {
      orderBy: "newest",
      editingCard: {},
      cardList: [
        {
          date: new Date(),
          titulo: "Tarjeta",
          id: "un-id-aleatorio",
          descripcion: "Descripción",
          url: undefined,
        },
      ],
    },
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it("Renderiza correctamente", function () {
    const component = renderer.create(
      <Provider store={store}>
        <Modal />
      </Provider>
    );

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Limpia editingCard al pulsar en cancelar", function () {
    store.dispatch = jest.fn();

    const component = renderer.create(
      <Provider store={store}>
        <Modal />
      </Provider>
    );

    renderer.act(() => {
      component.root.findAllByType("button")[0].props.onClick();
    });

    expect(store.dispatch).toHaveBeenLastCalledWith(clearEditingCard());
  });
});
