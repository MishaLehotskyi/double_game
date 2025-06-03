'use client'
import {useAuthModal} from "@/contexts/AuthModalContext";
import {Modal} from "@/components/Modal";
import {LoginForm} from "@/components/LoginForm";
import {RegisterForm} from "@/components/RegisterForm";
import React from "react";
import {VerifyForm} from "@/components/VerifyForm";
import Buy from "@/components/Buy";

export default function AuthModals() {
  const { modal, close } = useAuthModal();

  return (
    <>
      {modal === 'login' && (
        <Modal onClose={close}>
          <LoginForm onClose={close} />
        </Modal>
      )}
      {modal === 'register' && (
        <Modal onClose={close}>
          <RegisterForm onClose={close} />
        </Modal>
      )}
      {modal === 'verify' && (
        <Modal onClose={close}>
          <VerifyForm onClose={close} />
        </Modal>
      )}
      {modal === 'buy' && (
        <Modal onClose={close}>
          <Buy onClose={close} />
        </Modal>
      )}
    </>
  );
}