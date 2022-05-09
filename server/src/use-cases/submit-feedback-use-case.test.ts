import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"


const createFeedbackSpy = jest.fn()
const sendMailSpay = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy},
    { sendMail: sendMailSpay}
)

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
    
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'exemple comment',
            screenshot: 'data:image/png;base64'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpay).toHaveBeenCalled();

    });

    it('should not be able to submit feedback without type', async () => {
        
        await expect(submitFeedback.execute({
            type: '',
            comment: 'exemple comment',
            screenshot: 'data:image/png;base64'
        })).rejects.toThrow();
    });

    it('should not be able to submit feedback without comment', async () => {
        
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64'
        })).rejects.toThrow();
    });

    it('should not be able to submit feedback with screenshot invalid', async () => {
        
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'exemple comment',
            screenshot: 'tests.jpg'
        })).rejects.toThrow();
    });
});