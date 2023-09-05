import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mobileMenuOpen = false;
  userProfileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleUserProfileMenu() {
    this.userProfileMenuOpen = !this.userProfileMenuOpen;
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
