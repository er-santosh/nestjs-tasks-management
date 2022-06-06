import { TaskStatus } from './../task.model';
import { BadRequestException, PipeTransform } from '@nestjs/common';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];

  transform(value: any) {
    if (!this.isValidStatus(value)) {
      throw new BadRequestException(`Invalid Status: ${value}`);
    }

    return value;
  }

  private isValidStatus(status: any) {
    const index = this.allowedStatuses.indexOf(status);
    return index !== -1;
  }
}
