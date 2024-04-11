import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DataModule, SchedulerModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
