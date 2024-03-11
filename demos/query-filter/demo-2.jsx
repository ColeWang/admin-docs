import { defineComponent } from 'vue'
import { Number, QueryFilter, Select, Text } from '@/components/form'

export default defineComponent({
    setup () {
        return () => {
            const queryFilterSlots = {
                default: (slotScope) => {
                    return [
                        <Text
                            label={'文本'}
                            name={'text'}
                            formItemProps={slotScope.props}
                        />,
                        <Number
                            label={'数字'}
                            name={'number'}
                            formItemProps={slotScope.props}
                        />,
                        <Select
                            label={'选择'}
                            name={'select'}
                            formItemProps={slotScope.props}
                        />,
                        <Text
                            label={'文本2'}
                            name={'text2'}
                            formItemProps={slotScope.props}
                        />,
                        <Number
                            label={'数字2'}
                            name={'number2'}
                            formItemProps={slotScope.props}
                        />,
                        <Select
                            label={'选择2'}
                            name={'select2'}
                            formItemProps={slotScope.props}
                        />
                    ]
                }
            }

            return (
                <QueryFilter collapseRender={true} v-slots={queryFilterSlots}/>
            )
        }
    }
})
