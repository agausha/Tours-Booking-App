"use client";

import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../button/Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);
  const overlayRef = useRef(null);

  const overlayCloseHandler = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const modalCloseHandler = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);

    const timer = setTimeout(() => {
      onClose();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  const secondaryActionHandler = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <Fragment>
      <div
        ref={overlayRef}
        onClick={overlayCloseHandler}
        className="
    justify-center
    items-center
    flex
    overflow-x-hidden
    overflow-y-auto
    fixed
    inset-0
    z-20
    outline-none
    focus:outline-none
    bg-neutral-800/70
    "
      >
        <div
          className="
        relative
        w-full
        md:w-4/6
        lg:w-3/6
        xl:w-2/5
        my-6
        mx-auto
        h-full
        lg:h-auto
        md:h-auto
        "
        >
          {/* Content */}
          <div
            className={`
            translate
            duration-300
            h-full
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}
            `}
          >
            <div
              className="
            translate
            h-full
            lg:h-auto
            md:h-auto
            border-0
            rounded-lg
            shadow-lg
            relative
            flex
            flex-col
            w-full
            bg-white
            outline-none
            focus:outline-none
            "
            >
              {/* Header */}
              <div
                className="
                flex
                items-center
                p-6
                rounded-t
                justify-center
                relative
                border-b-[1px]
                "
              >
                <button
                  onClick={modalCloseHandler}
                  className="
                p-1
                border-0
                hover:opacity-70
                hover:bg-rose-500
                transition
                absolute
                right-9
                "
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              {/* Body */}
              <div className="relative p-6 flex-auto">{body}</div>
              {/* Footer */}
              <div className="flex flex-col gap-2 p-6">
                <div
                  className="
                    flex
                    flex-row
                    items-center
                    gap-4
                    w-full
                    "
                >
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      outline
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={secondaryActionHandler}
                    />
                  )}

                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleSubmit}
                  />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
