import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateSnapshot } from '@angular/router';

interface MyState {
  url: string;
}

export class RoutingSerialiser implements RouterStateSerializer<MyState> {
  serialize(routerState: RouterStateSnapshot): MyState {
    const { url } = routerState;

    return { url };
  }
}
