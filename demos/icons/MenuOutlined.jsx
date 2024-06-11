import { defineComponent } from 'vue'
import { MenuOutlined } from '@/components/icons.js'

export default defineComponent({
    setup () {
        return () => {
            return (
                <MenuOutlined></MenuOutlined>
            )
        }
    }
})
