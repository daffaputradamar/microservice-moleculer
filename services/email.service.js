import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

broker.createService({
    name: 'email',
    actions: {
        async sendEmail(ctx) {
            const { recepient, subject, content } = ctx.params;
            console.log(`Sending email to ${recepient} with subject ${subject}`)
            console.log(`Content: ${content}`);

            return `Email sent to ${recepient}`;
        }
    }
})

export default broker;