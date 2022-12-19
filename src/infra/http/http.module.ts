import { Module } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notfiction';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from '../../../src/infra/http/controllers/notifications.controller';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { CountRecipientNotification } from '@application/use-cases/count-recipient-notification';
import { GetRecipientNotification } from '@application/use-cases/get-recipient-notifications';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers:[NotificationsController],
  providers:[
    SendNotification,
    CancelNotification,
    CountRecipientNotification,
    GetRecipientNotification,
    ReadNotification,
    UnreadNotification
  ]
})
export class HttpModule {}
