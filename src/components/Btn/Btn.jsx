import React, { Component } from 'react'
import style from './Btn.module.css'

export class Btn extends Component {
    render() {
        return (
            <div className={`${style['btn']}`}>
                <button>
                    Read more
                </button>
            </div>
        )
    }
}

export default Btn