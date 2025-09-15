import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
  featured?: boolean;
}

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Casa Moderna',
      image: 'assets/images/proyecto1.png',
      category: 'Residencial',
      description: 'Proyecto residencial con diseño moderno y eficiente.',
      featured: true
    },
    {
      id: 2,
      title: 'Edificio Corporativo',
      image: 'assets/images/proyecto2.png',
      category: 'Corporativo',
      description: 'Edificio con enfoque en sostenibilidad y tecnología.'
    },
    // ...más proyectos
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getFeatured(): Project[] {
    return this.projects.filter(p => p.featured);
  }

  getByCategory(category: string): Project[] {
    return this.projects.filter(p => p.category === category);
  }
}
