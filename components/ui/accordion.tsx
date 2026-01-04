"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const AccordionContext = React.createContext<{
  value: string[]
  onValueChange: (value: string[]) => void
}>({
  value: [],
  onValueChange: () => {},
})

interface AccordionProps {
  children: React.ReactNode
  type?: "single" | "multiple"
  defaultValue?: string[]
  collapsible?: boolean
  className?: string
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, type = "single", defaultValue = [], collapsible = false, className, ...props }, ref) => {
    const [value, setValue] = React.useState<string[]>(defaultValue)

    const onValueChange = (itemValue: string) => {
      if (type === "single") {
        setValue(value.includes(itemValue) ? [] : [itemValue])
      } else {
        setValue(
          value.includes(itemValue)
            ? value.filter((v) => v !== itemValue)
            : [...value, itemValue]
        )
      }
    }

    return (
      <AccordionContext.Provider value={{ value, onValueChange: (v: string[]) => setValue(v) }}>
        <div ref={ref} className={className} {...props}>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child as React.ReactElement<any>, {
                onValueChange,
              })
            }
            return child
          })}
        </div>
      </AccordionContext.Provider>
    )
  }
)
Accordion.displayName = "Accordion"

interface AccordionItemProps {
  children: React.ReactNode
  value: string
  className?: string
  onValueChange?: (value: string) => void
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, value, className, onValueChange, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("border-b", className)} data-value={value} {...props}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, {
              value,
              onValueChange,
            })
          }
          return child
        })}
      </div>
    )
  }
)
AccordionItem.displayName = "AccordionItem"

interface AccordionTriggerProps {
  children: React.ReactNode
  className?: string
  value?: string
  onValueChange?: (value: string) => void
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, value, onValueChange, ...props }, ref) => {
    const { value: openValues } = React.useContext(AccordionContext)
    const isOpen = value ? openValues.includes(value) : false

    return (
      <button
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-4 text-left font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
          className
        )}
        onClick={() => value && onValueChange && onValueChange(value)}
        data-state={isOpen ? "open" : "closed"}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
      </button>
    )
  }
)
AccordionTrigger.displayName = "AccordionTrigger"

interface AccordionContentProps {
  children: React.ReactNode
  className?: string
  value?: string
}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, value, ...props }, ref) => {
    const { value: openValues } = React.useContext(AccordionContext)
    const isOpen = value ? openValues.includes(value) : false

    if (!isOpen) return null

    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
          className
        )}
        data-state={isOpen ? "open" : "closed"}
        {...props}
      >
        <div className="pb-4 pt-0">{children}</div>
      </div>
    )
  }
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

