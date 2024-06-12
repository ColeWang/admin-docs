import { defineComponent } from 'vue'
import { Field, Form } from '@/components/form'

export default defineComponent({
    setup () {
        return () => {
            return (
                <Form>
                    <Field valueType={'text'}/>
                </Form>
            )
        }
    }
})
