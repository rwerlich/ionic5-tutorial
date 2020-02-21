import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	private usuario: string = '';
	private senha: string = '';
	public nomeUsuario: string;
	public formLogin: FormGroup;

	constructor(
		private formBuilder: FormBuilder
	) {
		this.formLogin = this.formBuilder.group({
			'email': [null, Validators.compose([Validators.required,Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])],
			'password': [null, Validators.compose([Validators.required, Validators.minLength(3)])]
		});

	}

	ngOnInit() {
	}
	

}