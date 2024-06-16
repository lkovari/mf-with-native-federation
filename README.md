Create an Angular Workspace: ng new micro-fe-workspace --create-application=false

Go to the workspace folder, create the Shell Project
Create Microfrontend Projects:
- ng generate application shell --routing=true --style=scss
- ng generate application mf-a --routing=true --style=scss (Create mf-a)
- ng generate application mf-b --routing=true --style=scss (Create mif-b)

Create Shared Library: ng generate library lk-common-lib

Add "style": "scss" to angular.json at lk-common-lib

Add a component (AngularVersionComponent) to Shared Library: ng generate component angular-version --project=shared-

Build and Publish Shared Library: (Navigate to the workspace root) ng build lk-common-lib --configuration production

(Navigate to the `dist/lk-common-lib` directory) npm publish --access=public (After version bump)

Install Bootstrap for Styling: npm install @ng-bootstrap/ng-bootstrap

Install Native Federation Dependency: npm i @angular-architects/native-federation -D

Configure Microfrontends for Federation:
- mf-b: ng add @angular-architects/native-federation:init --project mf-b --port 4202 -type remote
- mf-a: ng add @angular-architects/native-federation:init --project mf-a --port 4201 -type remote
- configure Shell as Dynamic Host: ng add @angular-architects/native-federation:init --project shell --port 4200 -type dynamic-host
  
Rename Application Component Selectors (if necessary) to avoid conflicts.

Add Routes to Shell Application: (Create `app.routes.ts` in the shell project)

Implement Navigation in Shell: (Modify `app.component.html` in the shell project)

Add nav element for navigation bar.

Create an unordered list ul within nav for navigation links.

Add list items li with `routerLink` directives for each navigation link.

