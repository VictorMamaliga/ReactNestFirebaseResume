import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/nicolae')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllProjects() {
    return this.appService.getAllProjects();
  }

  @Post()
  submitData(@Body() data) {
    return this.appService.submitData(data);
  }
}

