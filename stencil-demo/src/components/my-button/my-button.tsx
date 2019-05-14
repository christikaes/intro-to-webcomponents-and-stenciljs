import { Component, Prop, Event, EventEmitter } from "@stencil/core";
import { Color, Size } from "../../types";

@Component({
  tag: "my-button",
  styleUrl: "my-button.css",
  shadow: true
})
export class MyButton {
  @Prop() color: Color;
  @Prop() size: Size;
  @Event() onSmash: EventEmitter;

  render() {
    return (
      <button
        class={`textbutton textbutton-skin-${this.color} textbutton-${
          this.size
        }`}
        onClick={() => {
          this.onSmash.emit();
        }}
      >
        <slot />
      </button>
    );
  }
}
