import {Injectable} from '@angular/core';

@Injectable()
export class UserService{

users = [
  {_id: 123,  username: 'bob', password: 'bobpassword', userDisplayName: 'bob'},
  {_id: 123,  username: 'mike', password: 'mikepassword', userDisplayName: 'mike'}
];

findUserByCredentials(username: String, password: String){
  for(let i = 0; i < this.users.length; i++){
    const user = this.users[i];
    if(username === user.username && password === user.password)
      return user;
  }
  return null;
}

findUserById(id: number){
 for(let i = 0; i < this.users.length; i++){
    const user = this.users[i];
    const userid = this.users[i]._id;
    if(id === user._id)
      return user;
  }
  return null;
  }
}
