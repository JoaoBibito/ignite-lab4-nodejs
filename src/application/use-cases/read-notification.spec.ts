
import { makeNotification } from "@test/factories/notification-factory"
import { InMemoryNotificationRepository } from "../../../test/repositories/in-memory-notifications-repository"
import { NotificationNotFound } from "./errors/notification-not-found-error"
import { ReadNotification } from "./read-notification"


describe("Read notification", () => {
	it("Should be able to read a Notification", async () => {
		const notificationRepository = new InMemoryNotificationRepository()
		const readNotification = new ReadNotification(notificationRepository)

                    const notification=  await makeNotification()

                    await notificationRepository.create(notification)

                    await readNotification.execute({notificationId:notification.id})

		expect(notificationRepository.notifications[0].readAt).toEqual(expect.any(Date))
		expect(notificationRepository.notifications[0]).toEqual(notification)
	})

          it("Should not be able to read a non existing notification", async ()=>{
                    const notificationRepository = new InMemoryNotificationRepository();
                    const readNotification=new ReadNotification(notificationRepository)

                    expect(()=>{
                              return readNotification.execute({notificationId:"fake-notification-id"})
                    }).rejects.toThrow(NotificationNotFound)
          })
})