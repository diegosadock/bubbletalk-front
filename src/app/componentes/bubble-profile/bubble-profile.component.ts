import { Component } from '@angular/core';

@Component({
  selector: 'app-bubble-profile',
  templateUrl: './bubble-profile.component.html',
  styleUrl: './bubble-profile.component.css'
})
export class BubbleProfileComponent {

  bubble = {
    name: 'Umbanda',
    color: '#6f42c1',
    theme: {
      background: 'linear-gradient(135deg, #6f42c1, #b197fc)'
    }
  };

  user = {
    username: 'seninha',
    avatarUrl: 'assets/erik.jpg'
  };

  membership = {
    role: 'GUARDIAN',
    bio: 'Zelo pelo espaço, respeito e orientação.',
    reputation: {
      level: 4,
      title: 'Guardião Espiritual',
      progress: 68
    },
    cosmetics: {
      avatarBorder: 'border-guardian'
    },
    badges: ['🛡 Guardião', '🔥 Ativo', '🌱 Fundador']
  };


}
