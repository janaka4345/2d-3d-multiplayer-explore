'use client'
import { cn } from '@/lib/utils'
import { Slider } from '@/components/ui/slider'
import { motion } from 'framer-motion'

type SliderProps = React.ComponentProps<typeof Slider>
export default function page() {
    return (
        <motion.div
            className="mt-6 w-[60%] mx-auto"
            initial={false}
            whileHover={{ scale: 1.2 }}
        >
            <Slider
                onValueChange={(e) => console.log(e)}
                defaultValue={[50]}
                max={100}
                step={1}
                className={cn('w-[60%]')}
            />
        </motion.div>
    )
}
