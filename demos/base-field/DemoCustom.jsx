import { defineComponent } from 'vue'
import { CustomFields } from '@/components/base-field'
import { Form, HocField } from '@/components/form'

const CustomInput = defineComponent({
    props: {
        fieldProps: {
            type: Object,
            default: () => ({})
        }
    },
    setup (props, { attrs }) {
        console.log(props, attrs)

        function onInput (evt) {
            const { fieldProps } = props
            const nextValue = evt.target.value
            if (fieldProps['onUpdate:value']) {
                fieldProps['onUpdate:value'](nextValue)
            }
        }

        return () => {
            const { fieldProps } = props

            return (
                <input
                    style={{ border: '1px solid #1677ff' }}
                    type="text"
                    value={fieldProps.value}
                    onInput={onInput}
                />
            )
        }
    }
})

const SInput = HocField('sInput')

export default defineComponent({
    setup () {
        function onValuesChange (values) {
            console.log(values)
        }

        return () => {
            return (
                <CustomFields valueTypeMap={{
                    sInput: ({ props, slots }) => <CustomInput {...props} v-slots={slots}/>
                }}>
                    <Form onValuesChange={onValuesChange}>
                        <SInput
                            label={'自定义输入框'}
                            name={'custom'}
                        />
                    </Form>
                </CustomFields>
            )
        }
    }
})
