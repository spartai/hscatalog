import { Component, OnInit , Input, OnChanges, Output, EventEmitter  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUser } from '../../appuser';
import { UserService } from '../../appuser.service';

@Component({
  selector: 'app-regisztracio',
  templateUrl: './regisztracio.component.html',
  styleUrls: ['./regisztracio.component.scss']
})
export class RegisztracioComponent implements OnInit, OnChanges {
  user: AppUser

  
  constructor( 
    private fb: FormBuilder,
    private us: UserService,
    private router: Router ) { 
      this.user = new AppUser();
    }

  userForm = this.fb.group(
    {
      username: ['', [Validators.required, Validators.minLength]],
      email: ['', [Validators.required]],
      pword: ['', [Validators.required]]
    }
  );

  get username() { return this.userForm.get('username'); }
  get email() { return this.userForm.get('email'); }
  get pword() { return this.userForm.get('pword'); }

  ngOnInit() {
  }

  ngOnChanges() {
      this.userForm.patchValue(this.userForm.value);
  }

  async onSubmit() {
    await this.us.addUser(this.user).subscribe(result => this.router.navigate(['/']));
  }

}
