import { type SVGProps } from 'react'

import { type IconName } from '@/types/name'

import { cn } from '@/lib/utils'

export { IconName }
import { forwardRef } from 'react'

export const Icon = forwardRef(
    (
        {
            name,
            childClassName,
            className,
            children,
            ...props
        }: SVGProps<SVGSVGElement> & {
            name: IconName
            childClassName?: string
        },
        ref: React.Ref<SVGSVGElement>
    ) => {
        if (children) {
            return (
                <span
                    className={cn(
                        `inline-flex items-center font gap-1.5`,
                        childClassName
                    )}
                >
                    <Icon name={name} className={className} {...props} />
                    {children}
                </span>
            )
        }
        return (
            <svg
                ref={ref}
                {...props}
                className={cn('inline self-center w-[1em] h-[1em]', className)}
            >
                <use href={`http://localhost:3000/icons/sprite.svg#${name}`} />
            </svg>
        )
    }
)
