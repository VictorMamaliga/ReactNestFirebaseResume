import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/nicolae')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllProjects() {
    return this.appService.getAllProjects();
  }

  // @Get(':id')
  // getProject(@Param('name') id: string) {
  //   return this.appService.getAllProjects();
  // }

  @Post()
  submitData(@Body() data) {
    return this.appService.submitData(data);
  }

  @Put(':id')
  updateProject(@Param('id') id: string, @Body() updateProjectDto) {
    return this.appService.updateProject(id, updateProjectDto);
  }

  @Delete(':id')
  deleteProject(@Param('id') id: string) {
    return this.appService.deleteProject(id);
  }
}
