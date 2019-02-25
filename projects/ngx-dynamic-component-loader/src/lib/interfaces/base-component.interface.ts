import { InjectionToken, Type } from '@angular/core';


export interface BaseComponent {
    getClassName(): string;
    initDemoMode(): void;
}

export const COMPONENT_LIST = new InjectionToken<Type<BaseComponent>[]>('COMPONENT_LIST');

