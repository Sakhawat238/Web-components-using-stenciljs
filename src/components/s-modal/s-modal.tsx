import {Component, Method, Element, Prop} from '@stencil/core';

@Component({
    tag: 's-modal',
    styleUrl: 's-modal.scss'
})

export class SModal {
    @Element() modalEl: HTMLElement;

    @Prop() mtitle: string;

    @Method()
    open() {
        this.modalEl.style.display = 'block';
    }

    closeModalHandler = ()=> {
        this.modalEl.style.display = 'none';
    }


    render(){
        return (
            <div>
                <div class="dv001" onClick={this.closeModalHandler}></div>
                <div class="dv002">
                    <div class="dv003">
                        <p class="p001">{this.mtitle}</p>
                        <p class="p002" onClick={this.closeModalHandler}>close</p>
                    </div>
                    <slot></slot>
                </div>
            </div>
        );
    }
}