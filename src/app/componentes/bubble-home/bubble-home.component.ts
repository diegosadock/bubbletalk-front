import { Component } from '@angular/core';

@Component({
  selector: 'app-bubble-home',
  templateUrl: './bubble-home.component.html',
  styleUrl: './bubble-home.component.css'
})
export class BubbleHome2Component {

  isMod = true;

  bubble = {
    id: 1,
    name: 'Bolha Criativa',
    symbol: '🫧',
    slogan: 'Criando, compartilhando e evoluindo juntos',
    color: '#7b5cff',
    bannerUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f'
  };

  user = {
    id: 99,
    username: 'seninha',
    avatarUrl: '../../assets/erik.jpg'
  };

  posts = [
    {
      id: 1,
      author: 'seninha',
      authorAvatar: '../../assets/erik.jpg',
      time: '2 horas',
      title: 'Qual a melhor stack pra uma rede social em 2026?',
      content:
        'Tô em dúvida entre Spring + Angular ou algo mais moderno tipo Nest + React. O que vocês acham?',
      image: null,
      votes: 128,
      userVote: 1, // 1 = upvote | -1 = downvote | 0 = nenhum
      comments: 42,
      tag: 'Discussão'
    },
    {
      id: 2,
      author: 'aurora.dev',
      authorAvatar: 'https://i.pravatar.cc/150?img=32',
      time: '5 horas',
      title: 'UI inspirada em Orkut + Reddit funciona?',
      content:
        'Misturar nostalgia com UX moderno pode ser um diferencial enorme. Essa bolha é prova disso.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      votes: 256,
      userVote: 0,
      comments: 67,
      tag: 'UX/UI'
    },
    {
      id: 3,
      author: 'lunar.art',
      authorAvatar: 'https://i.pravatar.cc/150?img=44',
      time: '1 dia',
      title: 'Design espiritual não é só estética',
      content:
        'Existe algo além das cores e formas. Design também é vibração e intenção.',
      image: null,
      votes: 512,
      userVote: -1,
      comments: 103,
      tag: 'Reflexão'
    }
  ];

}
