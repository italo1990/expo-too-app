import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AgentChatComponent } from './ia-chat/agent-chat/agent-chat.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, AgentChatComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  protected readonly title = signal('expo-too-app');

  consoleAca(): void {
    console.log('¡Hola desde AppComponent!');
  }
}
