import { defineComponent } from 'vue'
import { Form, Number, Text } from '@/components/form'
import { Button } from 'ant-design-vue'

export default defineComponent({
    setup () {
        function onFinish (values) {
            console.log(values)
        }

        return () => {
            return (
                <Form onFinish={onFinish}>
                    <Text
                        width={'sm'}
                        label={'文本'}
                        name={'text'}
                        required={true}
                    />
                    <Number
                        width={'sm'}
                        label={'数字-自定义校验'}
                        name={'number'}
                        rules={{
                            required: true,
                            validator: (rule, value, callback) => {
                                console.log(value)
                                if (value && value > 100) {
                                    return Promise.resolve()
                                } else {
                                    return Promise.reject('需要大于100')
                                }
                            }
                        }}
                    />
                    <Number
                        width={'sm'}
                        label={'数字'}
                        name={['data', 'number']}
                        required={true}
                    />
                    <Button html-type={'submit'}>提交</Button>
                </Form>
            )
        }
    }
})
