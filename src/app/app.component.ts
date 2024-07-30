import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedIndex: number | null = null;

  userTypes = [
    { iconClass: 'fas fa-user', title: 'Utilisateur', description: 'Description de l\'utilisateur' },
    { iconClass: 'fas fa-wallet', title: 'Portefeuille', description: 'Description du portefeuille' },
    { iconClass: 'fas fa-flask', title: 'Laboratoire', description: 'Description du laboratoire' }
  ];

  onSelect(index: number) {
    this.selectedIndex = index;
    this.handleSelection(index);
  }

  handleSelection(index: number) {
    switch (index) {
      case 0:
        this.handleUserSelection();
        break;
      case 1:
        this.handleWalletSelection();
        break;
      case 2:
        this.handleLabSelection();
        break;
      default:
        console.log('Sélection non reconnue');
    }
  }

  handleUserSelection() {
    console.log('Utilisateur sélectionné');
    // Ajoutez ici le traitement spécifique pour l'utilisateur
  }

  handleWalletSelection() {
    console.log('Portefeuille sélectionné');
    // Ajoutez ici le traitement spécifique pour le portefeuille
  }

  handleLabSelection() {
    console.log('Laboratoire sélectionné');
    // Ajoutez ici le traitement spécifique pour le laboratoire
  }
}