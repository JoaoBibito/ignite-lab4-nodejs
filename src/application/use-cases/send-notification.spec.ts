import { SendNotification } from "../../../src/application/use-cases/send-notfiction"
import { InMemoryNotificationRepository } from "../../../test/repositories/in-memory-notifications-repository"

describe("Send notification", () => {
	it("Should be able to send a Notification", async () => {
		const notificationRepository = new InMemoryNotificationRepository()
		const sendNotification = new SendNotification(notificationRepository)

		const {notification}=await sendNotification.execute({
			content: "This is a notification",
			category: "Test notfication",
			recipientId: "test_send_notification_ID"
		})
		expect(notificationRepository.notifications).toHaveLength(1)
		expect(notificationRepository.notifications[0]).toEqual(notification)
	})
})