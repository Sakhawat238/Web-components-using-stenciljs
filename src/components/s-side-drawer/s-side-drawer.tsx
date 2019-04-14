import { Component, Prop } from '@stencil/core';

@Component({
    tag: 's-side-drawer',
    styleUrl: 's-side-drawer.scss',
    shadow: true
}) 


export class SideDrawer {

    @Prop({reflectToAttr: true}) title: string;
    @Prop({reflectToAttr: true, mutable: true}) open: boolean;

    oncloseDrawer = () => {
        this.open = false;
    }

    render(){
        return (
            <aside>
                <header class="sdh101">
                    <h1 class="sdht45">{this.title}</h1>
                    <button class="sdhbt22" onClick={this.oncloseDrawer}>X</button>
                </header>
                <main>
                    <slot />
                </main>
            </aside>
        );
    }
}