import { Injectable } from '@angular/core';
import { getWindow } from '../../app.component';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public getToken() {
    if (getWindow()) {
      return String(localStorage.getItem('accessToken'));
    }
    return '';
  }

  public setToken(token: string) {
    if (getWindow()) {
      localStorage.setItem('accessToken', token);
    }
  }
  public getDeviceId() {
    if (getWindow()) {
      return String(localStorage.getItem('deviceId'));
    }
    return '';
  }

  public setDeviceId(deviceId: string) {
    if (getWindow()) {
      localStorage.setItem('deviceId', deviceId);
    }
  }
  public getUserId() {
    if (getWindow()) {
      return String(localStorage.getItem('userId'));
    }
    return '';
  }

  public setUserId(userId: string) {
    if (getWindow()) {
      localStorage.setItem('userId', userId);
    }
  }
}
