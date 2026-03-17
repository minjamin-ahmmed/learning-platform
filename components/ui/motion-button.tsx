'use client'

import { FC, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MotionButtonProps {
  label: string
  classes?: string
  onClick?: () => void
  inverted?: boolean
  width?: string
}

const MotionButton: FC<MotionButtonProps> = ({ label, classes, onClick, inverted = false, width }) => {
  const circleRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleMouseEnter = () => {
    if (circleRef.current && buttonRef.current) {
      circleRef.current.style.width = `${buttonRef.current.clientWidth - 8}px`
    }
    if (textRef.current) {
      textRef.current.style.color = inverted ? '#000000' : 'var(--color-primary-foreground)'
    }
  }

  const handleMouseLeave = () => {
    if (circleRef.current) {
      circleRef.current.style.width = '3rem'
    }
    if (textRef.current) {
      textRef.current.style.color = inverted ? '#ffffff' : 'var(--color-foreground)'
    }
  }

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={width ? { width } : undefined}
      className={cn(
        'group relative h-14 cursor-pointer rounded-full border p-1 outline-none overflow-hidden',
        !width && 'w-52 pr-6',
        inverted ? 'border-white/20 bg-transparent' : 'border-border bg-background',
        classes
      )}
    >
      {/* Expanding circle */}
      <span
        ref={circleRef}
        aria-hidden="true"
        className={cn('block h-12 w-12 rounded-full', inverted ? 'bg-white' : 'bg-primary')}
        style={{ transition: 'width 0.6s cubic-bezier(0.45, 0, 0.15, 1)' }}
      />

      {/* Arrow */}
      <div
        className="absolute top-1/2 left-4 -translate-y-1/2"
        style={{ transition: 'transform 0.5s cubic-bezier(0.45, 0, 0.15, 1)' }}
      >
        <ArrowRight
          className={cn('size-5', inverted ? 'text-black' : 'text-primary-foreground')}
        />
      </div>

      {/* Label */}
      <span
        ref={textRef}
        className="pointer-events-none absolute top-1/2 left-1/2 ml-3 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-center text-base font-medium tracking-tight"
        style={{
          color: inverted ? '#ffffff' : 'var(--color-foreground)',
          transition: 'color 0.4s cubic-bezier(0.45, 0, 0.15, 1)',
        }}
      >
        {label}
      </span>
    </button>
  )
}

export default MotionButton
