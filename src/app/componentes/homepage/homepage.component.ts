import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  user = { name: 'Erik' };
  isLoading: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1200);
  }

  myBubbles = [
    { name: 'Umbanda', type: 'Espiritualidade', icon: 'leaf', hasUpdates: true, color: '#6f42c1' },
    { name: 'Java', type: 'Tecnologia', icon: 'cup-hot', hasUpdates: true, color: '#0d6efd' },
    { name: 'Games', type: 'Lazer', icon: 'controller', hasUpdates: false, color: '#6610f2' }
  ];


  activities = [
    {
      bubble: 'Umbanda',
      items: [
        {
          user: 'Ana',
          action: 'comentou sobre firmeza espiritual',
          time: 'há 5 min',
          avatar: 'https://i.pravatar.cc/100?img=5'
        },
        {
          user: 'Carlos',
          action: 'criou uma nova discussão',
          time: 'há 20 min',
          avatar: 'https://i.pravatar.cc/100?img=8'
        }
      ]
    }
  ];


  discoverBubbles = [
    {
      name: 'Angular Brasil',
      description: 'Comunidade para devs Angular',
      type: 'Tecnologia',
      isPublic: true
    },
    {
      name: 'Espiritismo Estudos',
      description: 'Debates e estudos doutrinários',
      type: 'Espiritualidade',
      isPublic: true
    }
  ];

  enableHorizontalDrag(container: HTMLElement) {
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    container.addEventListener('mousedown', (e) => {
      isDown = true;
      container.classList.add('dragging');
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
      isDown = false;
      container.classList.remove('dragging');
    });

    container.addEventListener('mouseup', () => {
      isDown = false;
      container.classList.remove('dragging');
    });

    container.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.2;
      container.scrollLeft = scrollLeft - walk;
    });
  }

  ngAfterViewInit(): void {
    const el = document.querySelector('.bubble-scroll') as HTMLElement;
    if (el) {
      this.enableHorizontalDrag(el);
    }
  }

}
