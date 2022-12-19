
import { makeNotification } from "@test/factories/notification-factory"
import { InMemoryNotificationRepository } from "../../../test/repositories/in-memory-notifications-repository"
import { CancelNotification } from "./cancel-notification"
import { NotificationNotFound } from "./errors/notification-not-found-error"


describe("Cancel notification", () => {
	it("Should be able to cancel a Notification", async () => {
		const notificationRepository = new InMemoryNotificationRepository()
		const cancelNotification = new CancelNotification(notificationRepository)

                    const notification=  await makeNotification()

                    await notificationRepository.create(notification)

                    await cancelNotification.execute({notificationId:notification.id})

		expect(notificationRepository.notifications[0].cancelAt).toEqual(expect.any(Date))
		expect(notificationRepository.notifications[0]).toEqual(notification)
	})

          it("Should not be able to cancel a non existing notification", async ()=>{
                    const notificationRepository = new InMemoryNotificationRepository();
                    const cancelNotification=new CancelNotification(notificationRepository)

                    expect(()=>{
                              return cancelNotification.execute({notificationId:"fake-notification-id"})
                    }).rejects.toThrow(NotificationNotFound)
          })
})