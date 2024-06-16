import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AngularVersionComponent } from "../../../lk-common-lib/src/lib/angular-version/angular-version.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-shell-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RouterLink, NgbModule, AngularVersionComponent]
})
export class AppComponent {
  title = 'Micro Frontend Shell (host)';
}
/*
 [WARNING] Polyfill for "@angular/localize/init" was added automatically. [plugin angular-polyfills]

  In the future, this functionality will be removed. Please add this polyfill in the "polyfills" section of your "angular.json" instead.
*/
