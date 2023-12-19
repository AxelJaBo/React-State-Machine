import React from "react";
import { useMachine } from "@xstate/react";
import { bookingMachine } from "../Machines/bookingMachine";

const BaseLayaout = () => {
    const [state, send] = useMachine(bookingMachine);
    console.log('nuestra maquina', state);
    console.log('matches true', state.matches('initial'));
    console.log('matches false', state.matches('tickets'));
    console.log('can', state.can('FINISH'));
    return (
        <div>
            Hola
        </div>
    );
}

export { BaseLayaout };