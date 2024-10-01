import {patchState, signalStore, withComputed, withMethods, withState} from "@ngrx/signals";
import {computed, Signal} from "@angular/core";

type CountState = {
  count: number;
}

export const CountStore = signalStore(
  withState<CountState>({count: 0}),
  withComputed((store) => ({
    doubleCount: computed(() => store.count() * 2)
  })),
  withMethods((store) => ({
    updateCount(value: number) {
      patchState(store, {
        count: value
      })
    }
  }))
)
