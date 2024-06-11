import { defineComponent } from 'vue'
import { FullscreenOutlined } from '@/components/icons.js'

export default defineComponent({
    setup () {
        return () => {
            return (
                <FullscreenOutlined></FullscreenOutlined>
            )
        }
    }
})
