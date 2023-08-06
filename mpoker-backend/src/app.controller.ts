import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/home')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('user')
  getHello(): object {
    return this.appService.getHello();
  }
}
