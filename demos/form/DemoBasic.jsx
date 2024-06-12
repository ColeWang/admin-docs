import { defineComponent } from 'vue'
import { Button } from 'ant-design-vue'
import { Date, Form, Number, Select, Text } from '@/components/form'

export default defineComponent({
    setup () {
        const initialValues = {
            text: 'default name'
        }

        function onValuesChange (values) {
            console.log(values)
        }

        function onFinish (values) {
            console.log(values)
        }

        return () => {
            return (
                <Form
                    initialValues={initialValues}
                    onValuesChange={onValuesChange}
                    onFinish={onFinish}
                >
                    <Text
                        width={365}
                        label={'文本'}
                        name={'text'}
                        required={true}
                    />
                    <Number
                        width={'sm'}
                        label={'数字'}
                        name={'number'}
                    />
                    <Date
                        width={'sm'}
                        label={'时间'}
                        name={'datePicker'}
                    />
                    <Select
                        width={'sm'}
                        label={'选择'}
                        name={'select'}
                        valueEnum={{ '1': '选项一', '2': '选项二' }}
                    />
                    <Button html-type={'submit'}>提交</Button>
                </Form>
            )
        }
    }
})
