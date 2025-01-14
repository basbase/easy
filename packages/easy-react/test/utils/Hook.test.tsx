import React, { useEffect } from 'react';
import '@thisisagile/easy-test';
import { rendersWait } from '@thisisagile/easy-test-react';
import { useEntity, useList, useToggle } from '../../src';
import { Address, toList } from '@thisisagile/easy';
import { queryByText } from '@testing-library/react';

const city = 'Amsterdam';

const ToggleHook = () => {
  const [toggle, setToggle] = useToggle(false);
  const [, setVisible] = useToggle();

  useEffect(() => {
    setToggle();
    setVisible();
  }, []);
  return <div id={'42'}>{`${toggle}`}</div>;
};

const EntityHook = () => {
  const [address, setAddress] = useEntity<Address>();

  useEffect(() => {
    setAddress(new Address({ city }));
  }, []);
  return <>{`${address}`}</>;
};

const ListHook = () => {
  const [list, setList] = useList<Address>();

  useEffect(() => {
    setList(toList<Address>(new Address({ city })));
  }, []);
  return <>{`${list.first()}`}</>;
};

describe('Hooks', () => {
  test('component with useToggle hook renders correctly.', async () => {
    const { container } = await rendersWait(<ToggleHook />);
    expect(container).toMatchSnapshot();
    expect(queryByText(container, 'true')).toBeDefined();
    expect(queryByText(container, 'false')).toBeNull();
  });

  test('component with useEntity hook renders correctly.', async () => {
    const { container } = await rendersWait(<EntityHook />);
    expect(container).toMatchSnapshot();
    expect(queryByText(container, city)).toBeDefined();
  });

  test('component with useList hook renders correctly.', async () => {
    const { container } = await rendersWait(<ListHook />);
    expect(container).toMatchSnapshot();
    expect(queryByText(container, city)).toBeDefined();
  });
});
