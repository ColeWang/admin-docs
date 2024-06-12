import { defineComponent } from 'vue'
import { Select, Text } from '@/components/form'
import { Action, BaseSearch, Table } from '@/components/table'

export default defineComponent({
    setup () {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name'
            },
            {
                title: 'Text',
                dataIndex: 'text'
            },
            {
                title: 'Address',
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
                        text: '1',
                        address: 'New York No. 1 Lake Park',
                    },
                    {
                        key: '2',
                        name: 'Jim Green',
                        text: '2',
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
                request: request
            }

            return (
                <Table {...tableProps} v-slots={{
                    search: (searchProps) => (
                        <BaseSearch {...searchProps}>
                            <Select
                                label={'Age'}
                                name={['data', 'age']}
                                valueEnum={{
                                    '1': '选项一',
                                    '2': '选项二',
                                }}
                            />
                            <Text
                                label={'Text'}
                                name={'text'}
                            />
                        </BaseSearch>
                    )
                }}/>
            )
        }
    }
})
