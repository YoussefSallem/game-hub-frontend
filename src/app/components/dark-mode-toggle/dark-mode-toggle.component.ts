import { Component } from '@angular/core';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
})
export class DarkModeToggleComponent {
  ngOnInit() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') document.body.classList.add('dark');
  }

  toggleDark() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
}
