import { Card } from "@components/Card";
import { fireEvent, render } from "@testing-library/react-native";

describe('Card', () => {
  it('should render a card with client name and salary', () => {
    const client = {
      id: '1',
      name: 'John Doe',
      salary: 1000,
      companyValuation: 10000,
    };

    const { getByText } = render(
      <Card client={client} />
    );

    const clientName = getByText('John Doe');
    const clientSalary = getByText('Salário: R$ 1.000,00');
    const companyValuation = getByText('Empresa: R$ 10.000,00');

    // console.log(clientName, clientSalary, companyValuation);

    expect(clientName).toBeDefined();
    expect(clientSalary).toBeDefined();
    expect(companyValuation).toBeDefined();
  });

  it('should call openModalDelete when delete icon is pressed', () => {
    const client = {
      id: '1',
      name: 'John Doe',
      salary: 1000,
      companyValuation: 10000,
    };

    const openModalDelete = jest.fn();

    const { getByTestId } = render(
      <Card client={client} openModalDelete={openModalDelete} />
    );

    const deleteIcon = getByTestId('delete-icon');
    fireEvent.press(deleteIcon);

    expect(openModalDelete).toHaveBeenCalledWith(client);
  });

  it('should call openModalEdit when edit icon is pressed', () => {
    const client = {
      id: '1',
      name: 'John Doe',
      salary: 1000,
      companyValuation: 10000,
    };

    const openModalEdit = jest.fn();

    const { getByTestId } = render(
      <Card client={client} openModalEdit={openModalEdit} />
    );

    const editIcon = getByTestId('edit-icon');
    fireEvent.press(editIcon);

    expect(openModalEdit).toHaveBeenCalledWith(client);
  });

  it('should call addClient when plus icon is pressed', () => {
    const client = {
      id: '1',
      name: 'John Doe',
      salary: 1000,
      companyValuation: 10000,
    };

    const addClient = jest.fn();

    const { getByTestId } = render(
      <Card client={client} addClient={addClient} />
    );

    const plusIcon = getByTestId('plus-icon');
    fireEvent.press(plusIcon);

    expect(addClient).toHaveBeenCalledWith(client);
  });

  it('should call removeStoredClient when minus icon is pressed', () => {
    const client = {
      id: '1',
      name: 'John Doe',
      salary: 1000,
      companyValuation: 10000,
    };

    const removeStoredClient = jest.fn();

    const { getByTestId } = render(
      <Card client={client} storedClients removeStoredClient={removeStoredClient} />
    );

    const minusIcon = getByTestId('minus-icon');
    fireEvent.press(minusIcon);

    expect(removeStoredClient).toHaveBeenCalledWith(client);
  });

  it('should not render plus icon when storedClients is true', () => {
    const client = {
      id: '1',
      name: 'John Doe',
      salary: 1000,
      companyValuation: 10000,
    };

    const { queryByTestId } = render(
      <Card client={client} storedClients />
    );

    const plusIcon = queryByTestId('plus-icon');

    expect(plusIcon).toBeNull();
  });

  it('should not render edit icon when storedClients is true', () => {
    const client = {
      id: '1',
      name: 'John Doe',
      salary: 1000,
      companyValuation: 10000,
    };

    const { queryByTestId } = render(
      <Card client={client} storedClients />
    );

    const editIcon = queryByTestId('edit-icon');

    expect(editIcon).toBeNull();
  });

  it('should not render delete icon when storedClients is true', () => {
    const client = {
      id: '1',
      name: 'John Doe',
      salary: 1000,
      companyValuation: 10000,
    };

    const { queryByTestId } = render(
      <Card client={client} storedClients />
    );

    const deleteIcon = queryByTestId('delete-icon');

    expect(deleteIcon).toBeNull();
  });

  it('should render minus icon when storedClients is true', () => {
    const client = {
      id: '1',
      name: 'John Doe',
      salary: 1000,
      companyValuation: 10000,
    };

    const { getByTestId } = render(
      <Card client={client} storedClients />
    );

    const minusIcon = getByTestId('minus-icon');

    expect(minusIcon).toBeDefined();
  });
});
