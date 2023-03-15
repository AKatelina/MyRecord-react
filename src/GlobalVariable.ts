import React, {Component} from 'react';



export class GlobalVariable extends Component <any, any> {
    constructor(props: any) {
        super(props);
        this.state = {

        };


    }


    static host() {
        return 'https://term.chio-chio.ru';
        // return 'https://devchiochio.ru';
    }

}
export default GlobalVariable;