# NgxDynamicComponentLoaderDemo

Dynamically create components with preset customized template and fetched data. See https://laxersnine.github.io/ngx-dynamic-component-loader/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Table of Contents

- [NgxDynamicComponentLoaderDemo](#ngxdynamiccomponentloaderdemo)
  - [Table of Contents](#table-of-contents)
  - [Get Started](#get-started)
    - [Demo mode](#demo-mode)
  - [Todo List](#todo-list)
  - [Run the project](#run-the-project)
    - [Development server](#development-server)
    - [Build](#build)
    - [Running unit tests](#running-unit-tests)
    - [Running end-to-end tests](#running-end-to-end-tests)

## Get Started

Start by installing from `npm`

`npm i -s @laxersnine/ngx-dynamic-component-loader`

Import the loader module in the app's module.

**app.module.ts**
```typescript
import { NgxDynamicComponentLoaderModule } from  '@laxersnine/ngx-dynamic-component-loader'
...

@NgModule({
    ...
    imports: [ NgxDynamicComponentLoaderModule ],
    ...
});
```

Create your own template components that implements `BaseComponent`:

```typescript
import { BaseComponent } from '@laxersnine/ngx-dynamic-component-loader';
...

@Component({
    selector: 'app-first-template',
    template: '<div>Hello {{name}}!</div>'
})
export class HelloWorldComponent implements OnInit, BaseComponent {
    name: string
    isDemoMode = false;
    ...
    ngOnInit() {
        if (this.isDemoMode) {
            this.initDemoMode();
        }
    }

    getClassName(): string {
        // Return component name
        return 'HelloWorldComponent';
    }

    initDemoMode(): void {
        // Do your action here for the demo mode, most of time, assign value for properties
        this.name = 'foo'
    }
}
```

After creating components, we will need to configure them.

**app.module.ts**
```typescript
import { NgxDynamicComponentLoaderModule, BaseComponent, COMPONENT_LIST } from  '@laxersnine/ngx-dynamic-component-loader'
...
const componentList: Type<BaseComponent>[] = [
  HelloWorldComponent
];
...
@NgModule({
    ...
    declarations: [
        HelloWorldComponent
    ],
    providers: [
        { provide: COMPONENT_LIST, useValue: componentList }
    ],
    entryComponents: [...componentList]
})
```

Generally, it's recommanded to create a module for configuring all templates instead of configuring in the `AppModule` directly.

**template.module.ts**
```typescript
import { BaseComponent, COMPONENT_LIST } from '@laxersnine/ngx-dynamic-component-loader';

const componentList: Type<BaseComponent>[] = [
    FirstTemplateComponent,
    SecondTemplateComponent,
    ThirdTemplateComponent
];

@NgModule({
    declarations: [
        FirstTemplateComponent,
        SecondTemplateComponent,
        ThirdTemplateComponent
    ],
    providers: [
        { provide: COMPONENT_LIST, useValue: componentList }
    ],
    entryComponents: [...componentList]
})
export class TemplateModule { }
```

**app.module.ts**
```typescript
@NgModule({
    ...
    imports: [
        TemplateModule
    ]
})
```

And you can use the renderer to render components:

**your.component.html**
```html
<ngx-dcl-content-render [pages]="model" isDemoMode="false"></ngx-dcl-content-render>
```
**your.component.ts**
```typescript
import { DynamicComponent } from '@laxersnine/ngx-dynamic-component-loader';
...
@Component({ templateUrl: './your.component.html' })
export class YourComponent {
    model: DynamicComponent[] = [
        {name: 'HelloWorldComponent', properties: {name: 'bar'}},
        {name: 'HelloWorldComponent', properties: {name: 'foobar'}}
    ];
}
```

### Demo mode
Sometimes we need to demo all templates to others.

**demo.component.html**
```html
<ngx-dcl-content-renderer [pages]="demoComponents" [isDemoMode]="true"></ngx-dcl-content-renderer>
```
**demo.component.ts**
```typescript
@Component({...})
export class DemoComponent implements OnInit {
    demoComponents: DynamicComponent[] = [];

    constructor(@Inject(COMPONENT_LIST) private readonly components: any[]) { }

    ngOnInit() {
        for (const com of this.components) {
            this.demoComponents.push({
                name: new com().getClassName(),
                properties: null
            });
        }
    }
}
```

## Todo List
- Beautify the demo page
- Unit test & e2e test

## Run the project

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the demo project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Run `ng build ngx-dynamic-component-loader` to build the library. The build artifacts will be stored in the `dist/@laxersnine/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
