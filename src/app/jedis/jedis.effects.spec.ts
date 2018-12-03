import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { JedisEffects } from './jedis.effects';

describe('JedisEffects', () => {
  let actions$: Observable<any>;
  let effects: JedisEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        JedisEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(JedisEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
