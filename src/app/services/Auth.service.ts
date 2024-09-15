import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { IAuthResponse } from "../../model/IauthResponse.model";
import { Observable } from "rxjs";
import { User } from "../../model/user.model";
@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private http: HttpClient) {

    }

    login(email: string, password: string): Observable<IAuthResponse> {
        return this.http.post<IAuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,
            { email, password, returnSecureToken: true }
        );
    }

    formatUser(response: IAuthResponse) {
        const expirationDate = new Date(new Date().getTime() + + response.expiresIn * 1000);
        const user = new User(response.email, response.idToken, response.localId, expirationDate);
        return user;
    }

    formatErrorResponse(message: string): string {
        switch (message) {
            case 'EMAIL_NOT_FOUND':
                return "Email not found, please check your email"
            case 'INVALID_PASSWORD':
                return "The password is invalid"
            case 'USER_DISABLED':
                return "The user is disabled"
            case 'INVALID_LOGIN_CREDENTIALS':
                return "Invalid credentials"
            default:
                return "The error has occured"
        }
    }
}