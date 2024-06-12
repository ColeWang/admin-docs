import { defineComponent, ref } from 'vue'
import { Button } from 'ant-design-vue'
import { DrawerForm, Number, Text } from '@/components/form'

export default defineComponent({
    setup () {
        const open = ref(false)

        function handleClick () {
            open.value = true
        }

        function onFinish (values) {
            console.log(values)
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(true)
                }, 1000)
            })
        }

        return () => {
            return (
                <div>
                    <Button onClick={handleClick}>新建表单</Button>
                    <DrawerForm
                        v-model={[open.value, 'open']}
                        title={'抽屉表单'}
                        grid={true}
                        width={512}
                        onFinish={onFinish}
                    >
                        <Text
                            label={'文本'}
                            name={'text'}
                            colProps={{ span: 12 }}
                        />
                        <Number
                            label={'数字'}
                            name={'number'}
                            colProps={{ span: 12 }}
                        />
                    </DrawerForm>
                </div>
            )
        }
    }
})
