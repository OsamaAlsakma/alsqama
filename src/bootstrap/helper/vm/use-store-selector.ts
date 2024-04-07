/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Store from "~/bootstrap/helper/store/store-type";

export type Selector<STATE, DATATYPE> = (
  state: STATE,
  prevState?: STATE
) => DATATYPE;

/**
 * this hook allows React hooks to subscribe to changes in
 *  store and access selected data from it and rerenders component on store chagnes.
 *
 * Note: If you don't want to rerender component on store changes use useRefStoreSelector
 * @param store store object.
 * @param selector This is a function that takes the current
 *  state and previous state as arguments and returns the
 *  selected data from the state.
 * @param initial This is the initial value for the selected data.
 */
export default function useStoreSelector<STATE, DATATYPE>(
  store: Store<STATE>,
  selector?: Selector<STATE, DATATYPE>,
  initial?: DATATYPE
) {
  const defaultSelector: Selector<STATE, DATATYPE> = (store: STATE) =>
    store as unknown as DATATYPE;
  const finalSelector: Selector<STATE, DATATYPE> = selector || defaultSelector;
  const [data, setData] = useState(initial || finalSelector(store.getState()));

  useEffect(() => {
    const unsubscriber = store.subscribe((state, prevState) => {
      const newData = finalSelector(state, prevState);
      setData(newData);
    });

    return () => unsubscriber();
  }, []);

  return data;
}
