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
                    <Number
                        width={'sm'}
                        label={'数字'}
                        name={['data', 'number']}
                    />
                    <Text
                        width={'sm'}
                        label={'文本'}
                        name={['data', 'text']}
                    />
                    {[0, 1, 2, 3].map((index) => {
                        return (
                            <Text
                                width={'sm'}
                                label={'文本-' + index}
                                name={['data', 'arr', index, 'text']}
                            />
                        )
                    })}
                    <Button html-type={'submit'}>提交</Button>
                </Form>
            )
        }
    }
})
