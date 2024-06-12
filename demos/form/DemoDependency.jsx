import { defineComponent } from 'vue'
import { Form, Number, Text } from '@/components/form'

export default defineComponent({
    setup () {
        return () => {
            return (
                <Form>
                    <Number
                        width={'sm'}
                        label={'数字'}
                        name={'number'}
                    />
                    <Text
                        width={'sm'}
                        label={'文本'}
                        name={['data', 'text']}
                    />
                    <Form.Dependency name={['number', ['data', 'text']]}>
                        {(slotScope) => {
                            return '输入的内容是: ' + JSON.stringify(slotScope)
                        }}
                    </Form.Dependency>
                </Form>
            )
        }
    }
})
