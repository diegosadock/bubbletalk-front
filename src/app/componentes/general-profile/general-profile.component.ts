import { Component } from '@angular/core';

@Component({
  selector: 'app-general-profile',
  templateUrl: './general-profile.component.html',
  styleUrls: ['./general-profile.component.css']
})
export class GeneralProfileComponent {

  user = {
    username: 'seninha',
    displayName: 'Erik Senna',
    avatarUrl: 'assets/erik.jpg',
    bannerUrl: 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop', // Subtle gradient banner
    bio: 'Criador de bolhas, explorador de ideias e comunidades. Focado em construir ambientes digitais saudáveis e produtivos.',
    status: 'ACTIVE',
    joinedAt: 'Março de 2025',

    level: 7,
    title: 'Explorador Social',

    socialLinks: [
      { platform: 'Instagram', url: '#', icon: 'social-instagram' },
      { platform: 'Twitter', url: '#', icon: 'social-twitter' },
      { platform: 'LinkedIn', url: '#', icon: 'social-linkedin' }
    ],

    stats: {
      bubbles: 12,
      posts: 128,
      followers: 1420,
      following: 842
    },

    joinedBubbles: [
      { name: 'Java Brasil', icon: '☕', color: '#ff6b6b' },
      { name: 'Umbanda', icon: '🫧', color: '#6f42c1' },
      { name: 'UX Design', icon: '🎨', color: '#4dabf7' },
      { name: 'Estudos', icon: '📚', color: '#51cf66' },
      { name: 'Filmes', icon: '🎬', color: '#fcc419' },
      { name: 'Música', icon: '🎵', color: '#ff922b' }
    ],

    recentActivity: [
      {
        bubble: 'Java Brasil',
        text: 'Publicou: "Arquitetura Hexagonal na prática"',
        time: '2h atrás'
      },
      {
        bubble: 'Umbanda',
        text: 'Conquistou o badge "Membro Fundador"',
        time: '5h atrás'
      }
    ]
  };

}
