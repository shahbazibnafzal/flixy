import { type RefObject, useRef } from "react";

export function useEnterSubmit(): {
    formRef: RefObject<HTMLFormElement>;
    handleKeyDown: (event: React.KeyboardEvent<HTMLTextAreaElement>)=> void;
} {
const formRef = useRef<HTMLFormElement>(null)

// Detect "Enter" key press inside a textarea to submit the form,
// while allowing "Shift + Enter" for multi-line input.

const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>): void => 
    {
        if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
            formRef.current?.requestSubmit();
            event.preventDefault()
        }
    }
    return { formRef, handleKeyDown }
}