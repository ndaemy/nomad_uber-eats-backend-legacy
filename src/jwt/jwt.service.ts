import { Inject, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

import { CONFIG_OPTIONS } from './jwt.constants';
import { JwtModuleOptions } from './jwt.interfaces';

@Injectable()
export class JwtService {
  constructor(@Inject(CONFIG_OPTIONS) readonly options: JwtModuleOptions) {}

  sign(payload: Record<string, unknown>): string {
    return jwt.sign(payload, this.options.privateKey, { expiresIn: '7d' });
  }

  verify(token: string) {
    return jwt.verify(token, this.options.privateKey);
  }
}
