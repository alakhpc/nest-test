import { SetMetadata } from '@nestjs/common';
import { SCHEDULER_TOKEN, SchedulerMeta } from './scheduler.consts';

export const Interval = (meta: SchedulerMeta) =>
  SetMetadata(SCHEDULER_TOKEN, meta);
