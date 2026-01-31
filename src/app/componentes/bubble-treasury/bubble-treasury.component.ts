import { Component } from '@angular/core';

@Component({
  selector: 'app-bubble-treasury',
  templateUrl: './bubble-treasury.component.html',
  styleUrl: './bubble-treasury.component.css'
})
export class BubbleTreasuryComponent {

  bubble = {
    name: 'Umbanda',
    color: '#6f42c1'
  };

  treasuryBalance = 42500;

  votingOptions = [
    { name: 'Tema Noturno Animado', percentage: 75 },
    { name: 'Pack de Emojis Raridade', percentage: 15 },
    { name: 'Ambient Soundscape: Floresta', percentage: 10 }
  ];

  globalItems = [
    {
      name: 'Shader de Fundo: Aurora',
      description: 'Adiciona um efeito de luzes dançantes no fundo da bolha para todos os membros.',
      price: 50000,
      icon: '✨',
      previewColor: 'rgba(111, 66, 193, 0.2)',
      owned: false
    },
    {
      name: 'Pack Emojis: Divindades',
      description: 'Libera 24 emojis exclusivos inspirados em divindades para uso no feed.',
      price: 15000,
      icon: '🙏',
      previewColor: 'rgba(255, 215, 0, 0.1)',
      owned: true
    },
    {
      name: 'Som Ambiente: Chuva Leve',
      description: 'Membros podem ativar um som de chuva relaxante enquanto navegam na bolha.',
      price: 25000,
      icon: '🌧️',
      previewColor: 'rgba(51, 154, 240, 0.1)',
      owned: false
    },
    {
      name: 'Upvote Icon: Chama Sagrada',
      description: 'Altera o ícone de Upvote de toda a bolha para uma chama dinâmica.',
      price: 35000,
      icon: '🔥',
      previewColor: 'rgba(255, 146, 43, 0.1)',
      owned: false
    }
  ];

}
