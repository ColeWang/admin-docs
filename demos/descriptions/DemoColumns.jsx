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
                        text: '文本'
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
                        columns={[
                            {
                                title: 'switch',
                                dataIndex: 'switch',
                                valueType: 'switch',
                            },
                            {
                                title: 'slider',
                                dataIndex: 'slider',
                                valueType: 'slider',
                            },
                            {
                                title: 'number',
                                dataIndex: 'number',
                                valueType: 'number',
                            },
                            {
                                title: 'textarea',
                                dataIndex: 'textarea',
                                valueType: 'textarea',
                            },
                            {
                                title: 'text',
                                dataIndex: 'text',
                                valueType: 'text',
                                hideInDescriptions: true
                            }
                        ]}
                    />
                </Card>
            )
        }
    }
})
