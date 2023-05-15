import { Component } from '@angular/core';
import { User } from 'src/user';
import { UserService } from 'src/user.service';
import { ACTIVATE } from 'src/config';

@Component({
   selector: 'app-deleted-user',
   templateUrl: './deleted-user.component.html',
   styleUrls: ['./deleted-user.component.css']
})
export class DeletedUserComponent {
   users: User[] = [];
   btnName = ACTIVATE;
   constructor(private userService: UserService) {

   }

   ngOnInit(): void {
      this.getDeletedUsers();
   }

   getDeletedUsers(): void {
      this.users = this.userService.getUsers().filter(user => {
         return user.isDeleted;
      })
   }

   activate = (user: User): void => {
      user.isDeleted = false;
      this.getDeletedUsers();
   }
}
