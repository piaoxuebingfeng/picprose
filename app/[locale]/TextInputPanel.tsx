"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { usePicprose } from "./PicproseContext";
import { useTranslations } from "next-intl";

const KEY_CODE_ENTER = 13;

export const TextInputPanel = React.memo(() => {
  const { textElements, addTextElement, removeTextElement, selectedTextId, setSelectedTextId, newTextInput, setNewTextInput } = usePicprose();
  const t = useTranslations('LeftResourcePanel');
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [localValue, setLocalValue] = React.useState(newTextInput);
  const prevNewTextInput = React.useRef(newTextInput);

  React.useEffect(() => {
    if (prevNewTextInput.current !== newTextInput) {
      prevNewTextInput.current = newTextInput;
      if (document.activeElement !== inputRef.current) {
        setLocalValue(newTextInput);
      }
    }
  }, [newTextInput]);

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleAddText = () => {
    if (localValue.trim()) {
      addTextElement(localValue.trim());
      setLocalValue("");
      setNewTextInput("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.keyCode === KEY_CODE_ENTER) {
      handleAddText();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
    setNewTextInput(e.target.value);
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-medium mb-4">{t('text_panel')}</h3>
      
      {/* Add new text input */}
      <div className="flex gap-2 mb-4">
        <input
          ref={inputRef}
          type="text"
          placeholder={t('text_placeholder')}
          value={localValue}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          className="flex-grow px-3 py-2 border border-default-200 rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          style={{ backgroundColor: 'var(--nextui-background)' }}
        />
        <Button
          color="primary"
          onClick={handleAddText}
          isIconOnly
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </Button>
      </div>

      {/* Text elements list */}
      <h4 className="text-sm font-medium mb-2">{t('text_elements')}</h4>
      {textElements.length === 0 ? (
        <p className="text-sm text-gray-500">{t('no_text_elements')}</p>
      ) : (
        <div className="space-y-2">
          {textElements.map((textEl) => (
            <div
              key={textEl.id}
              className={`p-3 rounded-lg border cursor-pointer ${
                selectedTextId === textEl.id 
                  ? 'border-primary bg-primary-50 dark:bg-primary-20' 
                  : 'border-default-200 hover:border-default-400'
              }`}
              onClick={() => setSelectedTextId(textEl.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-grow overflow-hidden">
                  <p 
                    className="text-sm truncate"
                    style={{ 
                      color: textEl.color,
                      fontWeight: textEl.isBold ? 'bold' : 'normal',
                      fontStyle: textEl.isItalic ? 'italic' : 'normal',
                    }}
                  >
                    {textEl.text}
                  </p>
                  <p className="text-xs text-gray-500">
                    {textEl.fontSize}px
                  </p>
                </div>
                <Button
                  isIconOnly
                  size="sm"
                  variant="light"
                  color="danger"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTextElement(textEl.id);
                  }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

TextInputPanel.displayName = 'TextInputPanel';
