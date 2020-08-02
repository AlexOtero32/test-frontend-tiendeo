import React from "react";
import Card from "../../components/Card";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { toggleModal } from "../../redux/ui";
import { deleteCard } from "../../redux/cards/actions";

const mockStore = configureStore([]);

describe("Card component", function () {
  let store;

  let initialState = {
    ui: {
      isModalOpen: false,
    },
    cards: {
      orderBy: "newest",
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
        <Card titulo="Titulo" descripcion="Descripción" />
      </Provider>
    );

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("El botón editar llama al dispatch de la store dos veces", function () {
    store.dispatch = jest.fn();

    // El botón editar llama a la función dispatch dos veces,
    // una para seleccionar qué Card editar
    // y otra para abrir el modal
    const component = renderer.create(
      <Provider store={store}>
        <Card titulo="Titulo" descripcion="Descripción" />
      </Provider>
    );
    renderer.act(() => {
      component.root.findAllByType("button")[0].props.onClick();
    });

    expect(store.dispatch).toHaveBeenCalledTimes(2);
  });

  it("El botón eliminar llama al dispatch de la store una vez", function () {
    store.dispatch = jest.fn();

    const component = renderer.create(
      <Provider store={store}>
        <Card titulo="Titulo" descripcion="Descripción" />
      </Provider>
    );
    renderer.act(() => {
      component.root.findAllByType("button")[1].props.onClick();
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it("El botón editar abre el modal", function () {
    store.dispatch = jest.fn();

    const component = renderer.create(
      <Provider store={store}>
        <Card {...initialState.cards.cardList[0]} />
      </Provider>
    );
    renderer.act(() => {
      component.root.findAllByType("button")[0].props.onClick();
    });

    expect(store.dispatch).toHaveBeenLastCalledWith(toggleModal());
  });

  it("El botón eliminar elimnina la Card", function () {
    store.dispatch = jest.fn();

    const component = renderer.create(
      <Provider store={store}>
        <Card {...initialState.cards.cardList[0]} />
      </Provider>
    );
    renderer.act(() => {
      component.root.findAllByType("button")[1].props.onClick();
    });

    expect(store.dispatch).toHaveBeenLastCalledWith(
      deleteCard("un-id-aleatorio")
    );
  });
});
