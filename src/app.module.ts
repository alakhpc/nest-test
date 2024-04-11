import { Module } from '@nestjs/common';
import { DataModule } from './data/data.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { UserModule } from './user/user.module';

@Module({ imports: [DataModule, SchedulerModule, UserModule] })
export class AppModule {}
