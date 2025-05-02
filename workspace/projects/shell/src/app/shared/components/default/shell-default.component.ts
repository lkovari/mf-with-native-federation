import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell-default',
  imports: [],
  templateUrl: './shell-default.component.html',
  styleUrl: './shell-default.component.scss'
})
export class ShellDefaultComponent implements OnInit {
  githubLogoPath!: string;

  ngOnInit(): void {
    this.githubLogoPath = 'assets/logos/GitHub-Mark-32px.png';
  }
}
