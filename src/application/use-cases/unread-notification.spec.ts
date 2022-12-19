
import { makeNotification } from "@test/factories/notification-factory"
import { InMemoryNotificationRepository } from "../../../test/repositories/in-memory-notifications-repository"
import { NotificationNotFound } from "./errors/notification-not-found-error"
import { UnreadNotification } from "./unread-notification"


describe("Unread notification", () => {
	it("Should be able to unread a Notification", async () => {
		const notificationRepository = new InMemoryNotificationRepository()
		const unreadNotification = new UnreadNotification(notificationRepository)

                    const notification=  await makeNotification({
                              readAt:new Date()
                    })

                    await notificationRepository.create(notification)

                    await unreadNotification.execute({notificationId:notification.id})

		expect(notificationRepository.notifications[0].readAt).toBeNull()
	})

          it("Should not be able to unread a non existing notification", async ()=>{
                    const notificationRepository = new InMemoryNotificationRepository();
                    const unreadNotification=new UnreadNotification(notificationRepository)

                    expect(()=>{
                              return unreadNotification.execute({notificationId:"fake-notification-id"})
                    }).rejects.toThrow(NotificationNotFound)
          })
})