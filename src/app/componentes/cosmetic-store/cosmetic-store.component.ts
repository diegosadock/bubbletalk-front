import { Component } from '@angular/core';

@Component({
  selector: 'app-cosmetic-store',
  templateUrl: './cosmetic-store.component.html',
  styleUrl: './cosmetic-store.component.css'
})
export class CosmeticStoreComponent {

  userBalance = 12500;

  activeCategory = 'borders';

  categories = [
    { id: 'themes', label: 'Temas de Bolha' },
    { id: 'borders', label: 'Bordas de Avatar' },
    { id: 'backgrounds', label: 'Fundo de Perfil' },
    { id: 'badges', label: 'Badges Únicos' }
  ];

  items = {
    themes: [
      { name: 'Cyberpunk Neon', price: 5000, rarity: 'epic', icon: '🌃' },
      { name: 'Bosque Sagrado', price: 3500, rarity: 'rare', icon: '🌿' },
      { name: 'Minimal Dark', price: 1000, rarity: 'common', icon: '🌑' }
    ],
    borders: [
      { name: 'Aura Lendária', price: 15000, rarity: 'legendary', icon: '✨' },
      { name: 'Chamas de Plasma', price: 8000, rarity: 'epic', icon: '🔥' },
      { name: 'Cristal Ártico', price: 4500, rarity: 'rare', icon: '❄️' },
      { name: 'Aço Escovado', price: 1500, rarity: 'common', icon: '🛡️' }
    ],
    backgrounds: [
      { name: 'Nebulosa Animada', price: 20000, rarity: 'legendary', icon: '🌌' },
      { name: 'Matrix Rain', price: 7000, rarity: 'epic', icon: '📟' },
      { name: 'Serenidade', price: 2000, rarity: 'rare', icon: '🌊' }
    ],
    badges: [
      { name: 'Doador de Sangue', price: 500, rarity: 'common', icon: '🩺' },
      { name: 'Guardião do Código', price: 2500, rarity: 'rare', icon: '💻' },
      { name: 'Lenda Urbana', price: 10000, rarity: 'legendary', icon: '🏆' }
    ]
  };

  get currentItems() {
    return (this.items as any)[this.activeCategory] || [];
  }

  setCategory(id: string) {
    this.activeCategory = id;
  }

}
