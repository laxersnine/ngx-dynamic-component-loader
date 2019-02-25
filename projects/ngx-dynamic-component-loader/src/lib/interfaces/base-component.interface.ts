import { InjectionToken, Type } from '@angular/core';


export interface BaseComponent {
    /**
     * @returns Component name
     */
    getClassName(): string;
    /**
     * @description Hardcode to assign required component properties when doing demo.
     */
    initDemoMode(): void;
}

export const COMPONENT_LIST = new InjectionToken<Type<BaseComponent>[]>('COMPONENT_LIST');

