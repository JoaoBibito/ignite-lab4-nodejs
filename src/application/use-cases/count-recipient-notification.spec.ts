
import { makeNotification } from "@test/factories/notification-factory"
import { InMemoryNotificationRepository } from "../../../test/repositories/in-memory-notifications-repository"
import { CountRecipientNotification } from "./count-recipient-notification"


describe("Count recipients notifications", () => {
	it("Should be able to count recipient notifications", async () => {
		const notificationRepository = new InMemoryNotificationRepository()
		const countRecipientNotifications = new CountRecipientNotification(notificationRepository)

                    await notificationRepository.create(makeNotification({recipientId:"exampleId-countNotification"}))

                    await notificationRepository.create(makeNotification({recipientId:"exampleId-countNotification"}))
                    await notificationRepository.create(makeNotification({recipientId:"exampleId-countNotification3"}))


                     const {count}=await countRecipientNotifications.execute({recipientId:"exampleId-countNotification"})

                     expect(count).toEqual(2)
	})
})