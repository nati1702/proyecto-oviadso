"use client";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type PropsResetPassword = {
  textButton: string;
  OnClick?: () => void;
};

export default function ResetPassword(props: PropsResetPassword) {
  return (
    <Dialog>
      {/* BOTÓN PARA ABRIR RECUPERAR CONTRASEÑA */}
      <DialogTrigger
        className="
          text-end
          text-sm
          text-indigo-500
          hover:underline
          cursor-pointer
        "
        onClick={props.OnClick}
      >
        {props.textButton}
      </DialogTrigger>

      {/* CONTENIDO */}
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-center font-bold">
            Recuperar Contraseña
          </DialogTitle>

          <DialogDescription className="text-center">
            Ingrese sus credenciales
          </DialogDescription>
        </DialogHeader>

        <FieldGroup>
          <Field>
            <Label htmlFor="usuario-recuperar">
              Usuario
            </Label>

            <Input
              id="usuario-recuperar"
              name="usuario"
              type="text"
              placeholder="Ingrese usuario o su correo electrónico"
            />
          </Field>
        </FieldGroup>

        <DialogFooter>
          <Button
            type="button"
            className="w-full bg-green-500 hover:bg-green-600"
          >
            Restablecer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
