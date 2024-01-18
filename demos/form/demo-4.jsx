import { defineComponent } from 'vue'
import { Form, Number } from '@/components/form'

export default defineComponent({
    setup () {
        return () => {
            return (
                <Form>
                    <Number width={'sm'} label={'数字'} name={'number'}/>
                    <Form.Dependency name={['number']} v-slots={{
                        default: ({ number }) => {
                            return (
                                <div style={{ color: 'blue' }}>
                                    输入的数字是: {number}
                                </div>
                            )
                        }
                    }}/>
                </Form>
            )
        }
    }
})
