import { createContext, useContext } from "react";
import BatchStore from "./batchStore";
import CommonStore from "./commonStore";
import ImageStore from "./imageStore";
import ModalStore from "./modalStore";

interface Store {
    batchStore: BatchStore,
    commonStore: CommonStore,
    imageStore: ImageStore,
    modalStore:ModalStore
}

export const store: Store = {
    batchStore: new BatchStore(),
    commonStore: new CommonStore(),
    imageStore: new ImageStore(),
    modalStore: new ModalStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}