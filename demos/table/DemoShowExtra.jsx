import { defineComponent } from 'vue'
import { Card } from 'ant-design-vue'
import { Table, Action } from '@/components/table'
import { default as Descs } from '@/components/descriptions'

export default defineComponent({
    setup () {
        const columns = [
            {
                title: 'Name',
                search: true,
                initialValue: '123',
                dataIndex: 'name',
                formItemProps: {
                    required: true
                }
            },
            {
                title: 'Age',
                search: true,
                dataIndex: 'age',
                valueType: 'select',
                valueEnum: {
                    '1': '选项一',
                    '2': '选项二'
                },
            },
            {
                title: 'Address',
                search: true,
                dataIndex: 'address'
            },
            {
                title: 'Action',
                customRender: () => {
                    return (
                        <Action.Group>
                            <Action>操作</Action>
                        </Action.Group>
                    )
                }
            }
        ]

        function request (params, paginate, filter, sort) {
            return new Promise((resolve) => {
                console.log(params)

                const data = [
                    {
                        key: '1',
                        name: 'John Brown',
                        age: 32,
                        address: 'New York No. 1 Lake Park',
                    },
                    {
                        key: '2',
                        name: 'Jim Green',
                        age: 42,
                        address: 'London No. 1 Lake Park',
                    }
                ]

                setTimeout(() => {
                    resolve({ data: data })
                }, 1000)
            })
        }

        return () => {
            const tableProps = {
                columns: columns,
                request: request,
                search: { showCollapse: true }
            }

            return (
                <Table {...tableProps} v-slots={{
                    extra: ({ pageData }) => {
                        return (
                            <Card bodyStyle={{ padding: '24px 24px 17px' }}>
                                <Descs size={'small'} column={3}>
                                    <Descs.Item label={'Row'}>{pageData.length}</Descs.Item>
                                    <Descs.Item label={'Created'}>Cole</Descs.Item>
                                    <Descs.Item label={'Association'}>
                                        <a>Dublin No. 2 Lake Park</a>
                                    </Descs.Item>
                                    <Descs.Item label={'Creation Time'}>
                                        2024-04-09
                                    </Descs.Item>
                                    <Descs.Item label={'Effective Time'}>
                                        2024-04-09
                                    </Descs.Item>
                                </Descs>
                            </Card>
                        )
                    }
                }}/>
            )
        }
    }
})
