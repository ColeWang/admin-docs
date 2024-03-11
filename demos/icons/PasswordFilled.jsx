import { defineComponent } from 'vue'
import { PasswordFilled } from '@/components/icons.js'

export default defineComponent({
    setup () {
        return () => {
            return (
                <PasswordFilled></PasswordFilled>
            )
        }
    }
})
