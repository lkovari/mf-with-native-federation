import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularVersionComponent } from '../../../lk-common-lib/src/lib/angular-version/angular-version.component';

@Component({
    selector: 'app-mf-a',
    imports: [CommonModule, NgbModule, AngularVersionComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mf-a';
}
