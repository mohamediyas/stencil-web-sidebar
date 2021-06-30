import { Component, h, Method, Prop, State } from '@stencil/core';

// decorator like a function
@Component({
  tag: 'th-side-drawer',
  styleUrl: './side-drawer.css',
  shadow: true,
})
export class SideDrawer {
  @State() showContactInfo = false;
  @Prop({ reflect: true }) title: string;
  @Prop({ reflect: true, mutable: true }) open: boolean;

  onCloseDrawer = () => {
    this.open = false;
  };

  onContentChange = (content: string) => {
    this.showContactInfo = content === 'contact';
  };

  @Method()
  sideOpen() {
    this.open = true;
  }

  render() {
    let mainContent = <slot />;
    if (this.showContactInfo) {
      mainContent = [
        <div id="contact-info">
          <h1>Contact Information </h1>
          <p>You can reach us mail or phone</p>
          <ul>
            <li>Phone:97347777939</li>
            <li>Mail:mail@mail.com</li>
          </ul>
        </div>,
      ];
    }

    return [
      <div class="backdrop" onClick={this.onCloseDrawer}></div>,
      <aside>
        <header>
          <h1>{this.title}</h1>
          <button onClick={this.onCloseDrawer.bind(this)}>X</button>
        </header>
        <section id="tabs">
          <button class={!this.showContactInfo ? 'active' : ''} onClick={this.onContentChange.bind(this, 'nav')}>
            Navigation
          </button>
          <button class={this.showContactInfo ? 'active' : ''} onClick={this.onContentChange.bind(this, 'contact')}>
            Contact
          </button>
        </section>

        <main>
          {/* like childeren */}
          {/* <slot /> */}
          {mainContent}
        </main>
      </aside>,
    ];
  }
}

// condition rendering

// let content = null;
// if (this.open) {
//   content = (
//     <aside>
//       <header>
//         <h1>{this.title}</h1>
//       </header>
//       <main>
//         {/* like childeren */}
//         <slot />
//       </main>
//     </aside>
//   );
// }
// return content;
