import { Controller, Get, Res,Post, Put, Delete, Body, Param, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('nicolae')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getAllProjects() {
    return this.appService.getAllProjects();
  }

  // @Get(':id')
  // getProject(@Param('name') id: string) {
  //   return this.appService.getAllProjects();
  // }

  @Post('imageupload')
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(@UploadedFile() file: Express.Multer.File, @Res() res: Response) {
    return this.appService.uploadImage(file, res);
  }

  @Post('test')
  test() {
    console.log("serrrrreevvvv")
    // return this.appService.test();
  }
  
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
