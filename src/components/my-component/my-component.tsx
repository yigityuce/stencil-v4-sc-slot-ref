import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false,
  scoped: true
})
export class MyComponent {
  @State() headerSlotRef: Element;

  render() {
    return (
      <Host>
        <slot
          name="header"
          ref={el => {
            console.log('header slot ref:', el);
            this.headerSlotRef = el;
          }}
        />
        <slot />

        <span>Header ref status: {this.headerSlotRef ? 'true' : 'false'}</span>
      </Host>
    );
  }
}
