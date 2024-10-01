import {patchState, signalStore, withComputed, withMethods} from "@ngrx/signals";
import {computed} from "@angular/core";
import {withCountResource} from "./count-resource.feature";

export const CountStore = signalStore(
  withCountResource(),
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
