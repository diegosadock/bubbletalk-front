import { Component } from '@angular/core';

@Component({
  selector: 'app-general-profile',
  templateUrl: './general-profile.component.html',
  styleUrl: './general-profile.component.css'
})
export class GeneralProfileComponent {

  user = {
    username: 'seninha',
    displayName: 'Erik Senna',
    avatarUrl: 'assets/erik.jpg',
    bio: 'Criador de bolhas, explorador de ideias e comunidades.',
    status: 'ACTIVE',
    joinedAt: 'Março de 2025',

    level: 7,
    title: 'Explorador Social',

    stats: {
      bubbles: 6,
      posts: 128,
      interactions: 842
    },

    activities: [
      {
        bubble: 'Java Brasil',
        text: 'Criou um novo post sobre Spring Security',
        color: '#ff6b6b'
      },
      {
        bubble: 'Umbanda',
        text: 'Recebeu o badge Guardião',
        color: '#6f42c1'
      },
      {
        bubble: 'Estudos',
        text: 'Comentou em uma discussão',
        color: '#4dabf7'
      }
    ]
  };


}
