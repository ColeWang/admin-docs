import { defineComponent } from 'vue'
import { HamburgerOutlined } from '@/components/icons.js'

export default defineComponent({
    setup () {
        return () => {
            return (
                <HamburgerOutlined></HamburgerOutlined>
            )
        }
    }
})
