# Workspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

0\. create an angular workspace: ng new workspace
\--create-application=false 1. go to the workspace folder, create the
project shell with: ng generate application shell \--routing=true
\--style=scss 2. create the project mf-a with: ng generate application
mf-a \--routing=true \--style=scss 3. create the project mf-b with: ng
generate application mf-b \--routing=true \--style=scss 4. create
shared-lib: ng generate library common-lib 5. add the following in
angular.json to set scss instead of css, below the \"projectType\":
\"library\", \"schematics\": { \"@schematics/angular:component\": {
\"style\": \"scss\" } }, 6. to eliminate the create of the browser
folder set the following: \"outputPath\": { \"base\": \"dist/shell\",
\"browser\": \"\" }, 7. add component to shared-lib with: ng generate
component angular-version\--project=shared-lib 8. build shared lib,
executed it in the workspace folder with: ng build common-lib
\--configuration production 9. publish shared-lib after increase it
version and change directory to dist/shared-lib with: npm publish
\--access=public 10. run npm i \@angular-architects/native-federation -D
11. npm install \@ng-bootstrap/ng-bootstrap 12. add
\@angular-architects/native-federation to mf-b with: ng add
\@angular-architects/native-federation \--project mf-b \--port 4202
-type remote 13. add \@angular-architects/native-federation to mf-a
with: ng add \@angular-architects/native-federation \--project mf-a
\--port 4201 -type remote 14. add \@angular-architects/native-federation
to shell with: ng add \@angular-architects/native-federation \--project
shell \--port 4200 -type dynamic-host 15. rename all application
app.component.ts selector cause of all set to app-root and it will be
collission 16. add the shell app.routes.ts 17. add the navigation part
\<nav\> \<ul\> \<li\> routerlink etc in app.component.html in shell app
