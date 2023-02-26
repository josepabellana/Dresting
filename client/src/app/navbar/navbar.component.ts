import { Component, Inject,HostListener } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // Inject the authentication service into your component through the constructor
  constructor(@Inject(DOCUMENT) public document: Document,public auth: AuthService) {}

  dropShowProduct() {
    document.getElementById("dropdown__product")?.classList.toggle("show");
  }
  
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: any) {
    if (!event?.target?.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}
