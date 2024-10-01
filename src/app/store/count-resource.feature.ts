import {signalStoreFeature, withState} from "@ngrx/signals";

const initialState: CountState = {
  count: 0
}

type CountState = {
  count: number;
}

export function withCountResource() {
  return signalStoreFeature(
    withState<CountState>(initialState)
  )
}
