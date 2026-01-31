import { Component } from '@angular/core';

export interface BubbleGuidelines {
  purpose: string;
  allowed: string;
  notAllowed: string;
  behavior: string;
  notes?: string;
}

export interface CreateBubble {
  name: string;
  description: string;
  color: string;
  isPublic: boolean;
  guidelines: BubbleGuidelines;
}

@Component({
  selector: 'app-create-bubble',
  templateUrl: './create-bubble.component.html',
  styleUrl: './create-bubble.component.css'
})
export class CreateBubbleComponent {

  bubble = {
    name: '',
    description: '',
    guidelines: '',
    isPublic: true,
    color: '#6f42c1'
  };

  colors = [
    '#6f42c1',
    '#0d6efd',
    '#198754',
    '#dc3545',
    '#fd7e14',
    '#20c997'
  ];

  

}
