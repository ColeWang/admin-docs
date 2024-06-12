import { defineComponent, ref, unref } from 'vue'
import { Form, Submitter, Text } from '@/components/form'

export default defineComponent({
    setup () {
        const formRef = ref(null)

        function onFinish (values) {
            console.log(values)
        }

        function onSubmit () {
            const context = unref(formRef)
            if (context && context.getFormInstance) {
                const formInstance = context.getFormInstance()
                formInstance && formInstance.submit()
            }
        }

        return () => {
            return (
                <Form
                    ref={formRef}
                    onFinish={onFinish}
                >
                    <Text
                        width={365}
                        label={'文本'}
                        name={'text'}
                        required={true}
                    />
                    <Submitter onSubmit={onSubmit}/>
                </Form>
            )
        }
    }
})
