import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Observable } from "rxjs";
import { IAuthResponse } from "../../model/IauthResponse.model";

@Injectable({
    providedIn: 'root'
})
export class SignUpService {
    constructor(private _httpClient: HttpClient) {

    }

    signUp(email: string, password: string): Observable<IAuthResponse> {
        return this._httpClient.post<IAuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}`,
            { email, password, returnSecureToken: true });
    }
}