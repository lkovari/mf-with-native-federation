Create an Angular Workspace: ng new micro-fe-workspace --create-application=false

Go to the workspace folder

Create Microfrontend Projects:

- ng generate application shell --routing=true --style=scss
- ng generate application mf-a --routing=true --style=scss (Create mf-a)
- ng generate application mf-b --routing=true --style=scss (Create mif-b)

Create Shared Library: ng generate library lk-common-lib

Add "style": "scss" to angular.json at lk-common-lib

Add a component (AngularVersionComponent) to Shared Library: ng generate component angular-version --project=shared-lib

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

Prepare to deployment, added exact URLs into federation.manifes.json and added scripts to deploy prepare-gh-pages which copy to proper folders, and add deploy-gh

#About the Apps structure and deployment

Structure
workspace
projects
shell (main) app
mf-a (remote) app
mf-b (remote) app
lk-common-lib (contains only one component AngularVersionComponent)

Deployment steps
npm run remove-dists (dist, dist-gh)
npm run build-all (npm run build-lib && npm run build-mf-a && npm run build-mf-b && npm run build-shell)
npm run deploy-gh (npm run prepare-gh-pages && gh-pages -d dist-gh -b gh-pages)

Local Run (do not forget cd workspace)
npm run build-lib-dev
npm run start-b
npm run start-a
npm run start-s
localhost:4200

Next To do:

- Alignment of nav bar, footer vertically middle, it is a UI. cosmetics only
- Use Tailwind with PrimeNG
- Implement the Micro-Frontend A and Micro-Frontend B (remote) apps menu hierarchy
- Containerize the different apps
