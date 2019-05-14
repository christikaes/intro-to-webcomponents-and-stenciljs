import { Component, State } from "@stencil/core";

@Component({
  tag: "my-accordion",
  styleUrl: "my-accordion.css",
  shadow: true
})
export class MyAccordion {
  @State() open: boolean;

  render() {
    return this.open ? (
      <div>
        <button
          onClick={() => {
            this.open = false;
          }}
        >
          -
        </button>
        <slot />
      </div>
    ) : (
      <button
        onClick={() => {
          this.open = true;
        }}
      >
        +
      </button>
    );
  }
}
