import { Injectable, Inject, Type } from '@angular/core';
import { COMPONENT_LIST, BaseComponent } from '../interfaces/base-component.interface';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {

  constructor(@Inject(COMPONENT_LIST) private readonly components: Type<BaseComponent>[]) { }

  getComponent = (name: string): any => this.components.find(e => new e().getClassName() === name);
}
