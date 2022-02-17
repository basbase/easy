import { Struct } from './Struct';
import { Id, json, Json, toId } from '../types';
import { required } from '../validation';

export abstract class Child extends Struct {
  @required() readonly id: Id = this.state.id ?? toId();
  protected merge = (a: Json): Json => json.parse({ ...this, ...a, id: this.id });
}
