
import { makeNotification } from "@test/factories/notification-factory"
import { InMemoryNotificationRepository } from "../../../test/repositories/in-memory-notifications-repository"
import { GetRecipientNotification } from "./get-recipient-notifications"


describe("Get recipients notifications", () => {
	it("Should be able to get recipient notifications", async () => {
		const notificationRepository = new InMemoryNotificationRepository()
		const getRecipientNotifications = new GetRecipientNotification(notificationRepository)

                    await notificationRepository.create(makeNotification({recipientId:"exampleId-getNotification"}))

                    await notificationRepository.create(makeNotification({recipientId:"exampleId-getNotification"}))
                    await notificationRepository.create(makeNotification({recipientId:"exampleId-getNotification3"}))


                     const {notifications}=await getRecipientNotifications.execute({recipientId:"exampleId-getNotification"})

                     expect(notifications).toHaveLength(2)
	})
})