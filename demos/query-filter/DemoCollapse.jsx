import { defineComponent, ref, unref } from 'vue'
import { Number, QueryFilter, Select, Text } from '@/components/form'

export default defineComponent({
    setup () {
        const loading = ref(false)

        function onFinish (values) {
            console.log(values)
            loading.value = true
            setTimeout(() => {
                loading.value = false
            }, 1000)
        }

        return () => {
            return (
                <QueryFilter showCollapse={true} loading={unref(loading)} onFinish={onFinish}>
                    {(slotScope) => {
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
                    }}
                </QueryFilter>
            )
        }
    }
})
