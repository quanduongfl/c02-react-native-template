import {TypeLoginRequest, TypeSignUp} from 'api/interface/authenticate';
import request from 'api/request';

export const login = (params: TypeLoginRequest) =>
  request.post('auth/login', params);
