import { defineComponent } from 'vue'
import { Button, Card } from 'ant-design-vue'
import { default as Descs } from '@/components/descriptions'

export default defineComponent({
    setup () {
        function request () {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const data = {
                        switch: true,
                        slider: [10, 90],
                        number: 9010,
                        textarea: '这是一段文本',
                        text: '文本',
                        date: Date.now(),
                        dateRange: [Date.now(), Date.now()]
                    }
                    resolve({ data })
                }, 1000)
            })
        }

        return () => {
            return (
                <Card>
                    <Descs
                        title={'Descriptions'}
                        request={request}
                        size={'small'}
                        v-slots={{
                            extra: () => {
                                return [<Button>链接</Button>, <Button>链接</Button>]
                            }
                        }}
                    >
                        <Descs.Item
                            label={'switch'}
                            name={'switch'}
                            valueType={'switch'}
                        />
                        <Descs.Item
                            label={'slider'}
                            name={'slider'}
                            valueType={'slider'}
                        />
                        <Descs.Item
                            label={'number'}
                            name={'number'}
                            valueType={'number'}
                        />
                        <Descs.Item
                            label={'textarea'}
                            name={'textarea'}
                            valueType={'textarea'}
                        />
                        <Descs.Item
                            label={'text'}
                            name={'text'}
                            valueType={'text'}
                            v-slots={{ a: () => '111' }}
                        />
                        <Descs.Item label={'test'}>
                            123
                        </Descs.Item>
                        <Descs.Item
                            label={'date'}
                            name={'date'}
                            valueType={'date'}
                        />
                        <Descs.Item
                            label={'dateRange'}
                            hide={true}
                            name={'dateRange'}
                            valueType={'dateRange'}
                        />
                    </Descs>
                </Card>
            )
        }
    }
})
