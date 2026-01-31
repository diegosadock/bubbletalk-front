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
    symbol: '🫧',
    bannerUrl: 'https://images.unsplash.com/photo-1518005020250-eccdd5f2d716?q=80&w=2000&auto=format&fit=crop',
    theme: {
      background: 'linear-gradient(135deg, #6f42c1, #b197fc)',
      accent: '#9b6cff'
    }
  };

  user = {
    username: 'seninha',
    avatarUrl: 'assets/erik.jpg',
    customStatus: '🌿 Conectado com as raízes'
  };

  membership = {
    role: 'GUARDIAN',
    roleColor: '#ffd700',
    bio: 'Zelo pelo espaço, respeito e orientação aos novos membros. Sempre aberto a conversas sobre espiritualidade.',
    joinedAt: 'Jan 2024',

    reputation: {
      level: 42,
      rank: 'Mestre da Bolha',
      title: 'Guardião Espiritual',
      xp: 8450,
      nextLevelXp: 10000,
      progress: 84.5
    },

    stats: {
      posts: 156,
      likesReceived: 1240,
      daysActive: 395
    },

    cosmetics: {
      avatarBorder: 'border-epic', // epic, rare, legendary, common
      profileGlow: true,
      perfilTema: 'mystic-purple'
    },

    badges: [
      {
        id: 1,
        icon: '🛡️',
        name: 'Guardião da Paz',
        description: 'Concedido a membros que mantêm a harmonia e respeitam as regras da bolha.',
        unlockedAt: '31 Jul, 2024',
        rarity: 'rare',
        history: 'Promovido a Guardião por @mestre_bolha'
      },
      {
        id: 2,
        icon: '🔥',
        name: 'Chama Ativa',
        description: 'Postou diariamente por 30 dias seguidos nesta bolha.',
        unlockedAt: '15 Jan, 2024',
        rarity: 'epic',
        history: 'Sequência de 45 dias alcançada'
      },
      {
        id: 3,
        icon: '🌱',
        name: 'Semente Fundadora',
        description: 'Um dos primeiros 100 membros a ingressar e ajudar a bolha a crescer.',
        unlockedAt: '01 Jan, 2024',
        rarity: 'legendary',
        history: 'Membro #42 a entrar'
      },
      {
        id: 4,
        icon: '💎',
        name: 'Doador de Cristal',
        description: 'Apoiou o desenvolvimento da bolha através de contribuições financeiras.',
        unlockedAt: '10 Fev, 2024',
        rarity: 'legendary',
        history: 'Contribuição Crystal totalizada'
      }
    ],

    economy: {
      balance: 1250,
      currencyName: 'Bubble Points'
    }
  };

  navigateToStore() {
    console.log('Navegando para a loja de cosméticos...');
  }

}
