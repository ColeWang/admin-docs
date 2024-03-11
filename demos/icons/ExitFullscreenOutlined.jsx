import { defineComponent } from 'vue'
import { ExitFullscreenOutlined } from '@/components/icons.js'

export default defineComponent({
    setup () {
        return () => {
            return (
                <ExitFullscreenOutlined></ExitFullscreenOutlined>
            )
        }
    }
})
